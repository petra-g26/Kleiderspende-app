# Kleiderspende-app
## Projektbeschreibung

Im Rahmen der Fallstudie zum Modul **Programmierung von Webanwendungsoberflächen* wurde eine responsive Webanwendung zur Registrierung von Kleidersprenden entwickelt.
Die Anwendung richtet sich an einen gemeinnützigen Verein, der Kleiderspenden organisiert und  in aktuelle Krisengebiete versendet. Spendende Personen können ihre Spende digital anmelden und selbst auswählen, für welche Krisenregion die Kleidung vorgesehen ist. 
---
## Funktionen
- Titel und Logo
- Einführung in das Projekt
- Navigation zur Registrierungsseite
### Registrierungsformular
- Auswahl zwischen:
  - Übergabe an der Geschäftsstelle
  - Abholung
- Dynamisches Ein- und Ausblenden relevanter Eingabefelder
- Kontaktmöglichkeit bei Abholung
- Auswahl des Krisengebiet
- Eingabe der Textil- und Kleidungsart
### Validierung
- Prüfung der Postleitzahl bei Abholung
- Nur Adresse im Einzugsgebiet werden akzeptiert
- Pflichtfelder werden geprüft
### Bestätigungsseite
Nach erfolgreicher Registrierung werden folgende Daten angezeigt:
- Übergabeart
- Ort
- Textil-/Kleidungsart
- Krisengebiet
- Datum
- Uhrzeit
- Kontaktmöglichkeit
### Responsive Design
Optimiert für: 
- Desktop-PC
- Laptop
- Tablet
- Smartphone

## Verwendete Technologien
- HTML5
- CSS3
- Bootstrap5
- JavaScript
- GitHub
- GitHub Pages

## Projektstruktur
```text
kleiderspende-app/
│
├── index.html
├── form.html
├── confirm.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── assets/
    └── logo.png
