import { SchoolConfig, Subject, SubCategory, SemesterStats, CalculatedSubject } from "../types";

/**
 * Rounds a number to the specified precision (e.g., "0.5", "0.1", "0.25").
 */
export const roundGrade = (value: number, precisionStr: string): number => {
  const precision = parseFloat(precisionStr);
  if (isNaN(precision) || precision <= 0) return value;
  const factor = 1 / precision;
  return Math.round(value * factor) / factor;
};

/**
 * Converts points to a grade using Swiss formula: (achieved * 5 / max) + 1
 * Returns a value between 1 and 6.
 */
export const pointsToGrade = (achieved: number, max: number, rounding: string = "0.1"): number => {
  if (max <= 0) return 1;
  const rawGrade = (achieved * 5 / max) + 1;
  // Clamp between 1 and 6
  const clampedGrade = Math.max(1, Math.min(6, rawGrade));
  return roundGrade(clampedGrade, rounding);
};

/**
 * Gets the effective final exam grade for a subject.
 * If input mode is 'points', calculates the grade from points.
 * Otherwise returns the direct grade.
 */
export const getEffectiveFinalExamGrade = (subject: Subject): number | undefined => {
  if (subject.finalExamInputMode === 'points') {
    if (subject.finalExamPointsAchieved !== undefined && subject.finalExamPointsMax !== undefined && subject.finalExamPointsMax > 0) {
      return pointsToGrade(
        subject.finalExamPointsAchieved, 
        subject.finalExamPointsMax,
        subject.finalExamRounding || subject.rounding
      );
    }
    return undefined;
  }
  return subject.globalFinalExamGrade;
};

/**
 * Calculates the average of a specific entity (Subject or SubCategory) for a given semester.
 * Handles nested subcategories and final exams.
 */
export const calculateSubjectAverage = (
  subject: Subject,
  semesterId: number
): number | null => {
  // Check if subject is active in this semester
  if (!subject.semesters.includes(semesterId)) return null;

  // 1. Calculate Subcategories (if any)
  if (subject.subCategories && subject.subCategories.length > 0) {
    let totalWeightedScore = 0;
    let totalWeight = 0;

    for (const sub of subject.subCategories) {
      if (!sub.semesters.includes(semesterId)) continue;
      
      const subAvg = calculateSimpleAverage(sub.grades, semesterId);
      if (subAvg !== null) {
        // Get semester-specific weight or fall back to default weight
        const weight = sub.semesterWeights?.[semesterId] ?? sub.weight;
        // Round the subcategory average before using it for the parent
        const roundedSubAvg = roundGrade(subAvg, sub.rounding);
        totalWeightedScore += roundedSubAvg * weight;
        totalWeight += weight;
      }
    }

    if (totalWeight === 0) return null;
    
    // Normalize weights to 100% if needed, but usually weights sum to 100.
    const preExamAverage = totalWeightedScore / totalWeight;
    const roundedPreExamAvg = roundGrade(preExamAverage, subject.rounding);

    return applyFinalExam(subject, roundedPreExamAvg, semesterId);
  }

  // 2. Simple Subject (No subcategories)
  const simpleAvg = calculateSimpleAverage(subject.grades, semesterId);
  
  if (simpleAvg === null) {
    // Check if only final exam exists
    const finalExamGrade = subject.finalExamGrades?.[semesterId];
    if (subject.hasFinalExam && finalExamGrade !== undefined) {
       return roundGrade(finalExamGrade, subject.finalExamRounding || subject.rounding);
    }
    return null;
  }

  const roundedAvg = roundGrade(simpleAvg, subject.rounding);
  return applyFinalExam(subject, roundedAvg, semesterId);
};

/**
 * Calculates the GLOBAL average for a subject with subcategories.
 * Used when subCategoryMode is 'global' - all subcategories are weighted together across all semesters.
 */
export const calculateSubjectGlobalAverage = (subject: Subject): number | null => {
  if (!subject.subCategories || subject.subCategories.length === 0) {
    return null;
  }

  let totalWeightedScore = 0;
  let totalWeight = 0;

  for (const sub of subject.subCategories) {
    // Get ALL grades from this subcategory (across all semesters)
    const allGrades = sub.grades;
    if (!allGrades || allGrades.length === 0) continue;

    // Calculate average of all grades in this subcategory
    const sum = allGrades.reduce((acc, g) => acc + g.value, 0);
    const subAvg = sum / allGrades.length;
    
    // Round the subcategory average
    const roundedSubAvg = roundGrade(subAvg, sub.rounding);
    totalWeightedScore += roundedSubAvg * sub.weight;
    totalWeight += sub.weight;
  }

  if (totalWeight === 0) return null;

  const globalAverage = totalWeightedScore / totalWeight;
  return roundGrade(globalAverage, subject.rounding);
};

const calculateSimpleAverage = (grades: { value: number, semesterId: number }[], semesterId: number): number | null => {
  if (!grades || grades.length === 0) return null;
  
  const semesterGrades = grades.filter(g => g.semesterId === semesterId);
  
  if (semesterGrades.length === 0) return null;

  const sum = semesterGrades.reduce((acc, g) => acc + g.value, 0);
  return sum / semesterGrades.length;
};

const applyFinalExam = (subject: Subject, currentAverage: number, semesterId: number): number => {
  const finalExamGrade = subject.finalExamGrades?.[semesterId];

  if (subject.hasFinalExam && finalExamGrade !== undefined && subject.finalExamWeight) {
    const examWeightDec = subject.finalExamWeight / 100;
    const semesterWeightDec = 1 - examWeightDec;
    
    // Calculate combined grade
    const finalVal = (currentAverage * semesterWeightDec) + (finalExamGrade * examWeightDec);
    
    // Round based on final exam rounding rule or subject rounding
    return roundGrade(finalVal, subject.finalExamRounding || subject.rounding);
  }
  return currentAverage;
};

/**
 * Calculates statistics for a whole semester.
 */
export const calculateSemesterStats = (config: SchoolConfig, semesterId: number): SemesterStats => {
  const activeSubjects: CalculatedSubject[] = [];
  let sumGrades = 0;
  let countGrades = 0;
  let insufficientCount = 0;

  config.subjects.forEach(subj => {
    if (subj.semesters.includes(semesterId)) {
      const avg = calculateSubjectAverage(subj, semesterId);
      
      const calculatedSubj: CalculatedSubject = {
        id: subj.id,
        name: subj.name,
        average: avg,
        displayAverage: avg ? avg.toFixed(2) : '-',
        isPassing: avg ? avg >= 4 : true, // Default to passing if no grades
      };

      activeSubjects.push(calculatedSubj);

      if (avg !== null) {
        sumGrades += avg;
        countGrades++;
        if (avg < 4) {
          insufficientCount++;
        }
      }
    }
  });

  const semesterAvg = countGrades > 0 ? sumGrades / countGrades : 0;
  const roundedSemesterAvg = roundGrade(semesterAvg, "0.1"); // Standard semester rounding usually 0.1 or 0.01

  // Check passing criteria
  const criteria = config.passingCriteria;
  const failureReasons: string[] = [];

  if (countGrades > 0) {
    if (roundedSemesterAvg < criteria.minAverageGrade) {
      failureReasons.push('minAverage');
    }
    if (insufficientCount > criteria.maxInsufficientGrades) {
      failureReasons.push('maxInsufficient');
    }
    // Assuming maxBelowFour is same check as insufficientCount for standard Swiss systems,
    // but if it's distinct (e.g. < 4.0 vs < 3.0), we track it here. 
    // For now assuming both mean < 4.0 based on typical usage.
    if (insufficientCount > criteria.maxBelowFour && criteria.maxBelowFour !== criteria.maxInsufficientGrades) {
      failureReasons.push('maxBelowFour');
    }
  }

  return {
    semesterId,
    average: roundedSemesterAvg,
    insufficientCount,
    passed: failureReasons.length === 0,
    failureReasons,
    subjects: activeSubjects
  };
};

export const calculateOverallStats = (config: SchoolConfig): { average: number, passed: boolean } => {
  // Aggregate all semester averages
  const semesterIds = config.semesters.map(s => s.id);
  let totalAvg = 0;
  let count = 0;
  let allPassed = true;

  semesterIds.forEach(id => {
    const stats = calculateSemesterStats(config, id);
    if (stats.average > 0) {
      totalAvg += stats.average;
      count++;
    }
    if (!stats.passed) allPassed = false;
  });

  const overallAvg = count > 0 ? totalAvg / count : 0;
  return {
    average: roundGrade(overallAvg, "0.1"),
    passed: allPassed
  };
};

/**
 * Calculates subject average across ALL semesters (without final exam).
 * Used for the overall statistics with final exams applied at the end.
 * Supports subCategoryMode: 'global' for subjects where all subcategories are combined across semesters.
 */
export const calculateSubjectOverallAverage = (
  subject: Subject,
  config: SchoolConfig
): number | null => {
  // For subjects with global subcategory mode, use the global calculation
  if (subject.subCategoryMode === 'global' && subject.subCategories && subject.subCategories.length > 0) {
    return calculateSubjectGlobalAverage(subject);
  }

  // Default: perSemester mode - calculate average per semester then combine
  const activeSemesters = config.semesters.filter(s => subject.semesters.includes(s.id));
  if (activeSemesters.length === 0) return null;

  let totalAvg = 0;
  let count = 0;

  activeSemesters.forEach(sem => {
    const avg = calculateSubjectAverage(subject, sem.id);
    if (avg !== null) {
      totalAvg += avg;
      count++;
    }
  });

  if (count === 0) return null;
  return totalAvg / count;
};

/**
 * Applies the global final exam to a subject's overall average.
 * Supports both direct grade input and points-based calculation.
 */
export const applyGlobalFinalExam = (
  subject: Subject,
  overallAverage: number
): number => {
  const effectiveGrade = getEffectiveFinalExamGrade(subject);
  
  if (subject.hasFinalExam && effectiveGrade !== undefined && subject.finalExamWeight) {
    const examWeightDec = subject.finalExamWeight / 100;
    const semesterWeightDec = 1 - examWeightDec;
    
    const finalVal = (overallAverage * semesterWeightDec) + (effectiveGrade * examWeightDec);
    return roundGrade(finalVal, subject.finalExamRounding || subject.rounding);
  }
  return overallAverage;
};

/**
 * Calculates overall statistics with and without final exams.
 * Final exams are applied at the end to the overall subject averages, not per semester.
 */
export const calculateOverallStatsWithFinalExams = (config: SchoolConfig): {
  averageWithoutFinalExams: number;
  averageWithFinalExams: number;
  subjectDetails: {
    id: string;
    name: string;
    averageWithout: number | null;
    averageWith: number | null;
    hasFinalExam: boolean;
    finalExamGrade?: number;
    finalExamWeight?: number;
  }[];
} => {
  const subjectDetails: {
    id: string;
    name: string;
    averageWithout: number | null;
    averageWith: number | null;
    hasFinalExam: boolean;
    finalExamGrade?: number;
    finalExamWeight?: number;
  }[] = [];

  let sumWithout = 0;
  let sumWith = 0;
  let countWithout = 0;
  let countWith = 0;

  config.subjects.forEach(subject => {
    const avgWithout = calculateSubjectOverallAverage(subject, config);
    const effectiveFinalGrade = getEffectiveFinalExamGrade(subject);
    
    let avgWith = avgWithout;
    if (avgWithout !== null && subject.hasFinalExam && effectiveFinalGrade !== undefined) {
      avgWith = applyGlobalFinalExam(subject, avgWithout);
    }

    subjectDetails.push({
      id: subject.id,
      name: subject.name,
      averageWithout: avgWithout,
      averageWith: avgWith,
      hasFinalExam: subject.hasFinalExam,
      finalExamGrade: effectiveFinalGrade,
      finalExamWeight: subject.finalExamWeight
    });

    if (avgWithout !== null) {
      sumWithout += avgWithout;
      countWithout++;
    }
    if (avgWith !== null) {
      sumWith += avgWith;
      countWith++;
    }
  });

  return {
    averageWithoutFinalExams: countWithout > 0 ? roundGrade(sumWithout / countWithout, "0.1") : 0,
    averageWithFinalExams: countWith > 0 ? roundGrade(sumWith / countWith, "0.1") : 0,
    subjectDetails
  };
};