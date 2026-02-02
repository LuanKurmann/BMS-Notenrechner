# NotenTracker - Benutzerhandbuch

**Version 1.0**  
**Stand: Februar 2025**

---

## Inhaltsverzeichnis

1. [Einleitung und Funktionsumfang](#1-einleitung-und-funktionsumfang)
2. [Zugang und Installation](#2-zugang-und-installation)
3. [Ersteinrichtung und Konfiguration](#3-ersteinrichtung-und-konfiguration)
4. [Die Benutzeroberfläche (Dashboard)](#4-die-benutzeroberfläche-dashboard)
5. [Erfassen von Noten und Leistungen](#5-erfassen-von-noten-und-leistungen)
6. [KI-gestützte Notenerfassung (Beta)](#6-ki-gestützte-notenerfassung-beta)
7. [Statistik und Auswertung](#7-statistik-und-auswertung)
8. [Einstellungen und Datenverwaltung](#8-einstellungen-und-datenverwaltung)
9. [Benutzerkonto und Cloud-Synchronisation](#9-benutzerkonto-und-cloud-synchronisation)
10. [Kalender-Integration](#10-kalender-integration)
11. [Häufig gestellte Fragen (FAQ)](#11-häufig-gestellte-fragen-faq)
12. [Tipps und Best Practices](#12-tipps-und-best-practices)
13. [Fehlerbehebung](#13-fehlerbehebung)

---

## 1. Einleitung und Funktionsumfang

### 1.1 Was ist der NotenTracker?

Der NotenTracker ist eine webbasierte Anwendung zur Verwaltung und Analyse schulischer Leistungen. Die Software wurde speziell für Lernende der Berufsbildung und Berufsmaturität in der Schweiz entwickelt und bietet eine intuitive Lösung zur Notenverwaltung.

### 1.2 Zielgruppe

- **Lernende der Berufsmaturität** (BM1 und BM2)
- **Schüler in technischen Ausbildungen** (TALS)
- **Lernende in gestalterischen Berufen** (ARTE)
- **Kaufmännische Auszubildende** (WD-D)
- **Alle Personen**, die ihre schulischen Leistungen systematisch erfassen möchten

### 1.3 Hauptfunktionen

Der NotenTracker bietet folgende Kernfunktionen:

- ✅ **Automatische Durchschnittsberechnung** mit konfigurierbaren Gewichtungen
- ✅ **Semesterübergreifende Verwaltung** aller Noten
- ✅ **Promotionsprüfung** nach Schweizer Kriterien
- ✅ **Visuelle Statistiken** zur Leistungsentwicklung
- ✅ **Prüfungskalender** mit Export-Funktion
- ✅ **Cloud-Synchronisation** für geräteübergreifenden Zugriff
- ✅ **KI-gestützte Notenerfassung** aus Screenshots (Beta)
- ✅ **Mehrsprachigkeit** (Deutsch, Englisch, Französisch)
- ✅ **Personalisierung** mit verschiedenen Designs und Farben

### 1.4 Vorteile gegenüber manueller Verwaltung

- **Zeitersparnis**: Keine manuellen Berechnungen mehr nötig
- **Fehlerfreiheit**: Automatische Berechnung verhindert Rechenfehler
- **Übersichtlichkeit**: Alle Noten an einem Ort
- **Mobilität**: Zugriff von überall (Smartphone, Tablet, PC)
- **Sicherheit**: Automatische Datensicherung in der Cloud (optional)

---

## 2. Zugang und Installation

### 2.1 Web-Version (empfohlen)

Die einfachste Methode ist die Nutzung über den Webbrowser:

1. **Browser öffnen** (Chrome, Firefox, Safari, Edge)
2. **Website aufrufen**: [https://notentracker.site/landing/](https://notentracker.site/landing/)
3. **"App starten" klicken**
4. Die App läuft direkt im Browser – keine Installation nötig

**Unterstützte Browser:**
- Google Chrome (empfohlen)
- Mozilla Firefox
- Safari (macOS, iOS)
- Microsoft Edge

### 2.2 Progressive Web App (PWA)

Die Web-Version kann als App installiert werden:

**Auf dem Smartphone (Android/iOS):**
1. Website im Browser öffnen
2. Browser-Menü öffnen (⋮)
3. "Zum Startbildschirm hinzufügen" wählen
4. App-Icon erscheint auf dem Homescreen

**Auf dem Desktop (Chrome):**
1. Website öffnen
2. Adressleiste: Installations-Symbol (⊕) klicken
3. "Installieren" bestätigen

### 2.3 Android App (APK)

Für Android-Nutzer steht eine native App zur Verfügung:

1. **APK herunterladen**:
   - Besuche [gibb.kurmann.dev/landing/](https://gibb.kurmann.dev/landing/)
   - Scrolle zum Download-Bereich
   - Klicke auf "Download für Android"

2. **Installation vorbereiten**:
   - Öffne die Einstellungen deines Smartphones
   - Navigiere zu "Sicherheit" oder "Apps"
   - Aktiviere "Installation aus unbekannten Quellen" oder "Unbekannte Apps installieren"

3. **App installieren**:
   - Öffne die heruntergeladene APK-Datei
   - Bestätige die Installation
   - Nach erfolgreicher Installation kann die Sicherheitseinstellung wieder deaktiviert werden

**Hinweis**: Die App ist nicht im Google Play Store verfügbar, da sie über "Sideloading" verteilt wird.

### 2.4 iOS App

Eine iOS-Version ist derzeit in Planung. iOS-Nutzer können die Web-Version als PWA installieren (siehe 2.2).

---

## 3. Ersteinrichtung und Konfiguration

### 3.1 Erster Start

Beim ersten Öffnen der App erscheint der **Einrichtungsassistent**. Dieser führt dich durch die initiale Konfiguration.

### 3.2 Vorlage wählen

Der einfachste Weg ist die Auswahl einer vorkonfigurierten Vorlage:

**Verfügbare Vorlagen:**

1. **BM 2 TALS (Vollzeit)** – 2 Semester
   - Deutsch, Französisch, Englisch
   - Mathematik Grundlagen & Schwerpunkt
   - Naturwissenschaften (Physik/Chemie)
   - Geschichte und Politik, Wirtschaft und Recht
   - IDPA

2. **BM 2 TALS (Teilzeit)** – 4 Semester
   - Gleiche Fächer wie Vollzeit, verteilt auf 4 Semester

3. **BM 2 Gestaltung & Kunst** – 2 Semester
   - Gestaltung, Kunst, Kultur
   - Information & Kommunikation
   - Weitere allgemeinbildende Fächer

4. **BM 2 Dienstleistungen** – 2 Semester
   - Finanz- & Rechnungswesen
   - Wirtschaft & Recht (Schwerpunkt)
   - Weitere kaufmännische Fächer

5. **BM 1 TALS (4 Jahre)** – 8 Semester
6. **BM 1 TALS (3 Jahre)** – 6 Semester
7. **BM 1 Gestaltung & Kunst** – 6 Semester
8. **BM 1 Wirtschaft & Dienstleistungen (Vollzeit)** – 4 Semester
9. **BM 1 Wirtschaft & Dienstleistungen (Teilzeit)** – 6 Semester

**Vorlage auswählen:**
1. Gewünschte Vorlage anklicken
2. Vorschau prüfen
3. "Vorlage verwenden" bestätigen
4. Die Konfiguration wird automatisch geladen

### 3.3 Eigene Konfiguration erstellen

Für individuelle Bedürfnisse kannst du eine eigene Konfiguration erstellen:

**Schritt 1: Grundeinstellungen**
- **Name der Konfiguration** eingeben (z.B. "Meine BM")
- **Anzahl Semester** festlegen
- **Promotionskriterien** definieren:
  - Minimaler Notendurchschnitt (Standard: 4.0)
  - Maximale Anzahl ungenügender Noten (Standard: 2)
  - Maximale Anzahl Noten unter 4.0 (Standard: 2)

**Schritt 2: Semester benennen**
- Jedes Semester erhält einen Namen (z.B. "1. Semester", "Herbst 2024")

**Schritt 3: Fächer hinzufügen**
Für jedes Fach kannst du festlegen:
- **Fachname** (z.B. "Mathematik")
- **Gewichtung** (Standard: 1, kann auch 2 oder 0.5 sein)
- **Rundung** (0.5, 0.25 oder 0.1)
- **Semester**, in denen das Fach unterrichtet wird
- **Abschlussprüfung**: Ja/Nein
  - Falls ja: Gewichtung der Abschlussprüfung (z.B. 50%)
- **Teilbereiche** (optional, z.B. "Physik" und "Chemie" in Naturwissenschaften)

**Schritt 4: Speichern**
- Konfiguration überprüfen
- "Konfiguration erstellen" klicken

### 3.4 Konfiguration später anpassen

Die Konfiguration kann jederzeit angepasst werden:
1. Einstellungen öffnen (⚙️ Symbol)
2. Zum Bereich "Daten & Export" scrollen
3. Aktuelle Konfiguration als JSON herunterladen
4. JSON-Datei bearbeiten
5. Geänderte Datei wieder importieren

**Achtung**: Beim Ändern der Konfiguration können bestehende Noten betroffen sein. Erstelle vorher ein Backup!

---

## 4. Die Benutzeroberfläche (Dashboard)

### 4.1 Aufbau der Hauptansicht

Nach der Einrichtung gelangst du auf das **Dashboard** – die zentrale Ansicht der App.

**Kopfzeile (Header):**
- **App-Name**: "Notentracker"
- **Navigationssymbole**:
  - 📊 Noten (Dashboard)
  - 📈 Statistik
  - ⚙️ Einstellungen
- **Benutzersymbol**: Login/Registrierung

**Semester-Tabs:**
- Horizontale Leiste mit allen Semestern
- Aktives Semester ist hervorgehoben
- Wechsel durch Antippen

**Hauptbereich:**
- **Semesterdurchschnitt** (große Anzeige oben)
- **Promotionsstatus**: "Bestanden" (grün) oder "Nicht bestanden" (rot)
- **Fachkarten**: Alle Fächer des aktiven Semesters

### 4.2 Fachkarten verstehen

Jede Fachkarte zeigt:

- **Fachname** (z.B. "Mathematik")
- **Aktueller Durchschnitt** (große Zahl)
- **Fortschrittsbalken**:
  - Grün: Note ≥ 4.5
  - Gelb: Note zwischen 4.0 und 4.5
  - Rot: Note < 4.0
- **Anzahl Noten** (z.B. "5 Noten")
- **Nächste Prüfung** (falls eingetragen)

**Farbcodierung:**
- 🟢 **Grün**: Sehr gut (≥ 5.0)
- 🟡 **Gelb**: Gut (4.0 - 4.9)
- 🔴 **Rot**: Ungenügend (< 4.0)

### 4.3 Semesterdurchschnitt

Der Semesterdurchschnitt wird prominent oben angezeigt:

- **Berechnung**: Gewichteter Durchschnitt aller Fächer
- **Rundung**: Auf eine Dezimalstelle
- **Promotionsstatus**: Zeigt an, ob die Promotionskriterien erfüllt sind

**Promotionskriterien (Standard):**
- ✅ Durchschnitt ≥ 4.0
- ✅ Maximal 2 ungenügende Noten
- ✅ Maximal 2 Noten unter 4.0

Falls ein Kriterium nicht erfüllt ist, wird der Grund angezeigt (z.B. "Notenschnitt zu tief (< 4.0)").

### 4.4 Navigation

**Zwischen Ansichten wechseln:**
- **📊 Noten**: Dashboard mit Fachkarten
- **📈 Statistik**: Detaillierte Analysen und Grafiken
- **⚙️ Einstellungen**: Konfiguration und Personalisierung

**Zwischen Semestern wechseln:**
- Semester-Tabs oben antippen
- Das aktive Semester ist farblich hervorgehoben

---

## 5. Erfassen von Noten und Leistungen

### 5.1 Note hinzufügen

**Schritt-für-Schritt:**

1. **Fachkarte antippen**
   - Wähle das gewünschte Fach aus dem Dashboard

2. **Detailansicht öffnet sich**
   - Zeigt alle bisherigen Noten des Fachs
   - Chronologisch sortiert (neueste zuerst)

3. **Plus-Symbol (+) antippen**
   - Befindet sich unten rechts

4. **Notendaten eingeben**:
   - **Note**: Zahlenwert (z.B. 5.5)
   - **Datum**: Datum der Leistung (Standard: heute)
   - **Beschreibung**: Titel der Leistung (z.B. "Mathe Test 1")
   - **Teilbereich** (falls vorhanden): z.B. "Physik" oder "Chemie"

5. **Speichern**
   - Note wird sofort gespeichert
   - Durchschnitt wird automatisch neu berechnet

### 5.2 Teilbereiche (Subkategorien)

Manche Fächer haben Teilbereiche, z.B.:
- **Naturwissenschaften**: Physik, Chemie
- **Sprachen**: Schriftlich, Mündlich

**Teilbereich auswählen:**
1. Beim Hinzufügen einer Note erscheint ein Dropdown-Menü
2. Wähle den passenden Teilbereich
3. Die Note wird dem Teilbereich zugeordnet

**Gewichtung:**
- Teilbereiche haben eigene Gewichtungen (z.B. Physik 50%, Chemie 50%)
- Der Fachdurchschnitt wird aus den Teilbereichs-Durchschnitten berechnet

### 5.3 Note bearbeiten

**Bestehende Note ändern:**
1. Fach öffnen
2. Note in der Liste antippen
3. Werte anpassen
4. "Speichern" klicken

### 5.4 Note löschen

**Note entfernen:**
1. Fach öffnen
2. Note in der Liste antippen
3. "Löschen" klicken
4. Bestätigen

**Achtung**: Gelöschte Noten können nicht wiederhergestellt werden (außer aus einem Backup).

### 5.5 Kommende Prüfungen

**Prüfung eintragen:**
1. Fach öffnen
2. Zum Bereich "Kommende Prüfungen" scrollen
3. Plus-Symbol (+) antippen
4. Eingeben:
   - **Beschreibung** (z.B. "Abschlussprüfung")
   - **Datum** der Prüfung
   - **Gewichtung** (optional)
5. Speichern

**Anzeige:**
- Kommende Prüfungen erscheinen auf der Fachkarte
- Countdown zeigt verbleibende Tage
- Prüfungen werden im Kalender exportiert (falls aktiviert)

### 5.6 Abschlussprüfungen

Für Fächer mit Abschlussprüfung:

1. **Note eintragen** wie gewohnt
2. **Als Abschlussprüfung markieren** (Checkbox)
3. Die Note wird mit der konfigurierten Gewichtung berücksichtigt

**Beispiel:**
- Erfahrungsnote: 5.0 (Gewichtung 50%)
- Abschlussprüfung: 4.0 (Gewichtung 50%)
- **Fachnote**: (5.0 × 0.5) + (4.0 × 0.5) = 4.5

---

## 6. KI-gestützte Notenerfassung (Beta)

### 6.1 Funktion aktivieren

Die KI-Notenerfassung ist eine experimentelle Funktion:

1. **Einstellungen öffnen** (⚙️)
2. Zu "Allgemein" scrollen
3. **"Beta-Funktionen"** aktivieren
4. Seite neu laden

### 6.2 Screenshot hochladen

**Voraussetzungen:**
- Klares, gut lesbares Bild der Noten
- Fach- und Notennamen sollten sichtbar sein
- Unterstützte Formate: JPG, PNG

**Ablauf:**
1. **Einstellungen öffnen**
2. Zum Bereich **"KI Noten Import"** scrollen
3. **"Bild hochladen & Noten finden"** klicken
4. Screenshot auswählen
5. **Warten** (Analyse dauert 5-15 Sekunden)

### 6.3 Erkannte Noten bestätigen

Nach der Analyse erscheint ein **Bestätigungsdialog**:

**Anzeige:**
- Liste aller erkannten Noten
- Zugeordnetes Fach
- Notenwert
- Datum

**Aktionen:**
- ✅ **Häkchen setzen**: Note wird importiert
- ❌ **Häkchen entfernen**: Note wird ignoriert
- **Werte anpassen**: Falls die KI etwas falsch erkannt hat

**Importieren:**
- "Auswahl importieren" klicken
- Noten werden den entsprechenden Fächern hinzugefügt

### 6.4 Tipps für beste Ergebnisse

- **Gute Beleuchtung**: Vermeide Schatten
- **Scharfes Bild**: Keine Unschärfe
- **Vollständige Ansicht**: Alle relevanten Informationen sichtbar
- **Kontrast**: Dunkle Schrift auf hellem Hintergrund
- **Sprache**: Deutsch funktioniert am besten

### 6.5 Einschränkungen

- **Beta-Status**: Funktion ist noch in Entwicklung
- **Fehlerquote**: KI kann Noten falsch erkennen oder zuordnen
- **Manuelle Prüfung**: Immer die erkannten Werte kontrollieren
- **Datenschutz**: Bilder werden an Google Gemini gesendet

---

## 7. Einstellungen und Datenverwaltung

### 7.1 Einstellungen öffnen

Zahnrad-Symbol (⚙️) in der Kopfzeile antippen.

### 7.2 Erscheinungsbild

**Design (Hell/Dunkel):**
- **Light Mode**: Heller Hintergrund, dunkle Schrift
- **Dark Mode**: Dunkler Hintergrund, helle Schrift
- Umschalten durch Antippen

**Akzentfarbe:**
- 9 verschiedene Farben verfügbar
- Beeinflusst Buttons, Hervorhebungen und Fortschrittsbalken
- Farben: Blau, Indigo, Violett, Smaragd, Amber, Orange, Rot, Pink, Cyan

**Sprache:**
- Deutsch (Standard)
- Englisch
- Französisch
- Umschalten durch Auswahl

### 7.3 Allgemeine Einstellungen

**Standard-Semester:**
- Legt fest, welches Semester beim App-Start geöffnet wird
- Praktisch, wenn du dich auf ein bestimmtes Semester konzentrierst

**Beta-Funktionen:**
- Aktiviert experimentelle Features
- Derzeit: KI-gestützte Notenerfassung

### 7.4 Datenexport (Backup)

**Warum ein Backup?**
- Schutz vor Datenverlust
- Übertragung auf ein anderes Gerät
- Archivierung alter Semester

**Backup erstellen:**
1. Einstellungen → "Daten & Export"
2. "Daten herunterladen" klicken
3. JSON-Datei wird heruntergeladen
4. Datei sicher aufbewahren (z.B. Cloud-Speicher, USB-Stick)

**Backup wiederherstellen:**
1. Einstellungen → "Daten & Export"
2. "Konfiguration laden" (Upload-Button)
3. JSON-Datei auswählen
4. Daten werden importiert

**Hinweis**: Beim Import werden die aktuellen Daten überschrieben!

### 7.5 Daten zurücksetzen

**Alle Daten löschen:**
1. Einstellungen → "Daten & Export"
2. "Daten unwiderruflich löschen" klicken
3. Bestätigung lesen
4. Erneut bestätigen

**Was wird gelöscht:**
- Alle Noten und Fächer
- Alle Einstellungen
- Cloud-Daten (falls angemeldet)
- Lokale Daten im Browser

**Achtung**: Diese Aktion kann nicht rückgängig gemacht werden! Erstelle vorher ein Backup.

---

## 8. Benutzerkonto und Cloud-Synchronisation

### 8.1 Vorteile eines Benutzerkontos

- ☁️ **Cloud-Backup**: Daten werden automatisch gesichert
- 🔄 **Geräte-Sync**: Zugriff von mehreren Geräten
- 📅 **Kalender-Export**: iCal-Feed für Prüfungstermine
- 🔒 **Sicherheit**: Daten gehen nicht verloren bei Browser-Wechsel

### 8.2 Registrierung

**Neues Konto erstellen:**
1. **Benutzersymbol** in der Kopfzeile antippen
2. "Registrieren" wählen
3. Eingeben:
   - **E-Mail-Adresse**
   - **Passwort** (mindestens 6 Zeichen)
4. "Registrieren" klicken
5. **Bestätigungs-E-Mail** öffnen und Link anklicken

**Wichtig**: Verwende eine gültige E-Mail-Adresse, die du regelmäßig abrufst.

### 8.3 Anmeldung

**Mit bestehendem Konto anmelden:**
1. Benutzersymbol antippen
2. "Anmelden" wählen
3. E-Mail und Passwort eingeben
4. "Anmelden" klicken

**Automatische Synchronisation:**
- Nach erfolgreicher Anmeldung werden lokale Daten in die Cloud hochgeladen
- Bei jedem Speichern werden Daten automatisch synchronisiert

### 8.4 Synchronisationsstatus

**Status-Anzeige:**
- 🔄 **"Synchronisiere..."**: Daten werden gerade hochgeladen
- ✅ **"Gespeichert"**: Daten sind in der Cloud gesichert
- ❌ **"Fehler"**: Synchronisation fehlgeschlagen (Internetverbindung prüfen)

**Manuell synchronisieren:**
- Normalerweise nicht nötig (automatisch)
- Bei Problemen: App neu laden (F5)

### 8.5 Abmeldung

**Vom Konto abmelden:**
1. Einstellungen → "Konto & Synchronisation"
2. "Abmelden" klicken
3. Bestätigen

**Was passiert:**
- Du wirst abgemeldet
- Lokale Daten bleiben erhalten
- Cloud-Sync wird deaktiviert

**Wichtig**: Lokale Daten werden nicht gelöscht. Bei erneuter Anmeldung werden sie wieder synchronisiert.

### 8.6 Passwort zurücksetzen

**Passwort vergessen:**
1. Kontaktieren sie uns per E-Mail auf [support@kurmann.dev](mailto:support@kurmann.dev)
---

## 9. Kalender-Integration

### 9.1 Funktion aktivieren

**Voraussetzung**: Du musst angemeldet sein (Cloud-Sync aktiv).

**Kalender aktivieren:**
1. Einstellungen → "Konto & Synchronisation"
2. Zum Bereich "Kalender abonnieren" scrollen
3. "Kalender aktivieren" klicken
4. Kalender-URL wird generiert

### 9.2 Kalender-URL kopieren

**URL kopieren:**
1. Kalender-URL wird angezeigt (beginnt mit `webcal://`)
2. "Link kopieren" klicken
3. URL ist in der Zwischenablage

### 9.3 In Google Calendar einbinden

**Schritt-für-Schritt:**
1. [Google Calendar](https://calendar.google.com) öffnen
2. Links auf **"+"** neben "Weitere Kalender" klicken
3. **"Per URL hinzufügen"** wählen
4. Kalender-URL einfügen (Strg+V)
5. **"Kalender hinzufügen"** klicken

**Ergebnis**: Alle kommenden Prüfungen erscheinen automatisch in deinem Google Calendar.

### 9.4 In Apple Calendar einbinden

**Auf dem Mac:**
1. Kalender-App öffnen
2. Menü: **Ablage → Neues Kalenderabonnement**
3. Kalender-URL einfügen
4. **"Abonnieren"** klicken
5. Einstellungen anpassen (Name, Farbe)
6. **"OK"** klicken

**Auf iPhone/iPad:**
1. Einstellungen → Kalender → Accounts
2. "Account hinzufügen" → "Andere"
3. "Kalenderabonnement hinzufügen"
4. URL einfügen
5. "Weiter" → "Sichern"

### 9.5 In Outlook einbinden

**Outlook.com (Web):**
1. Outlook Calendar öffnen
2. "Kalender hinzufügen" → "Aus dem Internet abonnieren"
3. URL einfügen
4. "Importieren" klicken

**Outlook Desktop:**
1. Kalender-Ansicht öffnen
2. Menü: **Datei → Kontoeinstellungen → Internetkalender**
3. "Neu" klicken
4. URL einfügen
5. "Hinzufügen" klicken

### 9.6 Aktualisierung

**Automatische Aktualisierung:**
- Änderungen an Prüfungsterminen werden automatisch synchronisiert
- Kalender-Apps aktualisieren in der Regel alle 24 Stunden
- Bei Bedarf: Manuelle Aktualisierung in der Kalender-App

---

## Schlusswort

Vielen Dank, dass du den NotenTracker nutzt! Diese App wurde entwickelt, um dir das Leben als Lernende/r zu erleichtern und dir zu helfen, deine schulischen Ziele zu erreichen.

**Wichtiger Hinweis**: Der NotenTracker ist ein Hilfsmittel zur Notenverwaltung. Die offiziellen Noten deiner Schule sind immer massgebend. Überprüfe regelmäßig, ob deine eingetragenen Noten mit den offiziellen Dokumenten übereinstimmen.

---

**Version**: 1.0  
**Letzte Aktualisierung**: Februar 2025  
**Autor**: Luan Kurmann  
**Website**: [www.gibb.kurmann.dev](https://www.gibb.kurmann.dev)
