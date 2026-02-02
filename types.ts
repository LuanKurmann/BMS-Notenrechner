
export interface Grade {
  id: string;
  value: number;
  date: string;
  name: string;
  semesterId: number;
}

export interface ComingGrade {
  id: string;
  name: string;
  date: string;
  semesterId: number;
}

export interface Semester {
  id: number;
  name: string;
}

export interface SubCategory {
  name: string;
  weight: number; // Default percentage (e.g. 33), used if no semester-specific weight
  semesterWeights?: { [semesterId: number]: number }; // Optional: different weight per semester
  rounding: string; // "0.5", "0.1", etc.
  semesters: number[];
  grades: Grade[];
  commingGrades: ComingGrade[];
  hasFinalExam?: boolean;
  finalExamWeight?: number;
  finalExamRounding?: string;
  finalExamGrades?: { [semesterId: number]: number }; // Map semesterId to grade
}

export interface Subject {
  id: string;
  name: string;
  weight: number;
  rounding: string;
  hasFinalExam: boolean;
  finalExamWeight?: number;
  finalExamRounding?: string;
  semesters: number[];
  grades: Grade[];
  commingGrades: ComingGrade[];
  subCategories: SubCategory[];
  subCategoryMode?: 'perSemester' | 'global'; // How subcategory grades are combined: perSemester (default) = average per semester then combine, global = all subcategories weighted together across all semesters
  finalExamGrades?: { [semesterId: number]: number }; // Map semesterId to grade (legacy)
  globalFinalExamGrade?: number; // Single final exam grade across all semesters
  // Points-based final exam input (alternative to direct grade)
  finalExamInputMode?: 'grade' | 'points'; // How the user enters the final exam
  finalExamPointsAchieved?: number; // Points achieved
  finalExamPointsMax?: number; // Maximum possible points
}

export interface PassingCriteria {
  maxInsufficientGrades: number;
  maxBelowFour: number;
  minAverageGrade: number;
}

export interface Settings {
  language: 'de' | 'en' | 'fr';
  theme: 'light' | 'dark';
  calendarFileId?: string; // UUID for the public .ics file in Supabase Storage
  activeSemesterId?: number; // The semester to show by default
  accentColor?: string; // Hex code for the primary color
  enableBetaFeatures?: boolean; // Enable experimental features like AI import
}

export interface SchoolConfig {
  id: string;
  name: string;
  semesters: Semester[];
  subjects: Subject[];
  passingCriteria: PassingCriteria;
  settings: Settings;
  disclaimer?: string; // Optional disclaimer text for the template
}

export interface CalculatedSubject {
  id: string;
  name: string;
  average: number | null;
  displayAverage: string;
  isPassing: boolean;
  subCategoryAverages?: { name: string; average: number | null }[];
}

export interface SemesterStats {
  semesterId: number;
  average: number;
  insufficientCount: number; // Number of grades < 4
  passed: boolean;
  failureReasons: string[]; // List of keys explaining why it failed
  subjects: CalculatedSubject[];
}

export interface ExtractedGrade {
  id: string; // temp id
  subjectId: string;
  subCategoryName?: string; // if it belongs to a subcategory
  value: number;
  name: string;
  date: string;
  semesterId: number;
}
