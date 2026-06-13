# 😂 Joke Generator App

Eine lustige React-App, die Witze von einer kostenlosen API abruft und anzeigt!

## 🎯 Features

- ✅ Zufällige Witze laden
- ✅ Verschiedene Kategorien (Programming, General, Knock-knock, etc.)
- ✅ Witze als Favoriten speichern
- ✅ Favoriten lokal speichern (localStorage)
- ✅ Witze teilen
- ✅ Moderne, responsive UI
- ✅ Loading-Animation

## 🚀 Installation & Starten

### 1. Dependencies installieren
```bash
npm install
```

### 2. App starten
```bash
npm start
```

Die App läuft dann auf: **http://localhost:3000**

## 📚 API

Die App nutzt die kostenlose **JokeAPI** von https://jokeapi.dev/

### Verfügbare Kategorien:
- **General** - Allgemeine Witze
- **Programming** - Programmierer-Witze
- **Knock-knock** - Klopf-Witze
- **Misc** - Verschiedenes
- **Dark** - Düstere Witze
- **Pun** - Wortspiele

## 🎨 Komponenten

- `App.js` - Hauptkomponente
- `JokeCard.js` - Witz-Anzeige Komponente
- `CategorySelector.js` - Kategorie-Auswahl
- `FavoritesList.js` - Favoriten-Liste

## 💾 Lokale Speicherung

Favoriten werden automatisch in `localStorage` gespeichert und bleiben bestehen!

## 📝 Lizenz

MIT
