# NotenTracker

Eine moderne, webbasierte Anwendung zur Verwaltung und Analyse schulischer Leistungen für Lernende der Berufsbildung und Berufsmaturität in der Schweiz.

🌐 **Live-Demo:** [www.gibb.kurmann.dev](https://www.gibb.kurmann.dev)


## 🎯 Über das Projekt

Der NotenTracker ist eine speziell für Schweizer Berufsschulen und Berufsmaturitätsschulen entwickelte Anwendung, die Lernenden hilft, ihre schulischen Leistungen effizient zu verwalten und zu analysieren. Die App bietet automatisierte Durchschnittsberechnungen, visuelle Analysen und unterstützt verschiedene Notensysteme.

Link zum [Benutzerhandbuch](https://github.com/LuanKurmann/BMS-Notenrechner/blob/main/BENUTZERHANDBUCH.md)


## ✨ Funktionen

### Kernfunktionen

- **📊 Automatische Notenberechnung**
  - Gewichtete Durchschnitte pro Fach und Semester
  - Unterstützung für Teilbereiche (z.B. Physik/Chemie in Naturwissenschaften)
  - Konfigurierbare Rundungsregeln (0.5, 0.25, 0.1)
  - Promotionsprüfung nach Schweizer Kriterien

- **📚 Semesterverwaltung**
  - Unbegrenzte Anzahl von Semestern
  - Fachspezifische Semesterzuordnung
  - Übersichtliche Semester-Tabs

- **📈 Statistiken & Analysen**
  - Notenentwicklung über Zeit
  - Fächervergleich
  - Simulation von Abschlussprüfungen
  - Berechnung mit/ohne Abschlussprüfungen

- **📅 Prüfungskalender**
  - Verwaltung kommender Prüfungen
  - iCal-Export für Google Calendar, Outlook, Apple Calendar
  - Countdown bis zur Prüfung

- **🔄 Cloud-Synchronisation**
  - Optionales Benutzerkonto
  - Automatische Datensicherung in der Cloud
  - Geräteübergreifender Zugriff

- **🤖 KI-gestützte Notenerfassung (Beta)**
  - Automatische Erkennung von Noten aus Screenshots
  - Intelligente Zuordnung zu bestehenden Fächern
  - Manuelle Bestätigung vor Import

- **🎨 Personalisierung**
  - Hell-/Dunkelmodus
  - 9 verschiedene Akzentfarben
  - Mehrsprachig (Deutsch, Englisch, Französisch)

### Vorlagen

Die App enthält 9 vorkonfigurierte Vorlagen für verschiedene Bildungsgänge:

- BM 2 TALS (Vollzeit & Teilzeit)
- BM 2 Gestaltung & Kunst
- BM 2 Dienstleistungen
- BM 1 TALS (3 & 4 Jahre)
- BM 1 Gestaltung & Kunst
- BM 1 Wirtschaft & Dienstleistungen (Vollzeit & Teilzeit)

## 🛠 Technologie-Stack

### Frontend
- **React 19.2** - UI-Framework
- **TypeScript** - Typsichere Entwicklung
- **TailwindCSS** - Styling
- **Lucide React** - Icon-Bibliothek
- **Vite** - Build-Tool

### Backend & Services
- **Supabase** - Backend-as-a-Service
  - PostgreSQL Datenbank
  - Authentifizierung
  - Cloud Storage für Kalender-Dateien
- **Google Gemini API** - KI-gestützte Bilderkennung

### Mobile
- **Capacitor 8** - Native App-Wrapper für Android


## 📱 Progressive Web App (PWA)

Die App kann auf mobilen Geräten als PWA installiert werden:

1. Öffne die App im Browser
2. Tippe auf "Zum Startbildschirm hinzufügen"
3. Die App verhält sich wie eine native Anwendung

## 🔒 Datenschutz & Sicherheit

- **Lokale Speicherung**: Daten werden standardmäßig nur lokal im Browser gespeichert
- **Optionale Cloud**: Cloud-Sync nur mit expliziter Anmeldung
- **Verschlüsselung**: Alle Datenübertragungen erfolgen über HTTPS
- **Keine Tracking**: Keine Analyse-Tools oder Tracking-Cookies

**Hinweis**: Diese App ist ein Hilfsmittel zur Notenverwaltung. Die offiziellen Noten deiner Schule sind massgebend.
