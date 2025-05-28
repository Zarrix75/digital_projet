# Projet Express + JSON

Ce projet est une petite application utilisant **Node.js + Express** pour exposer une API qui retourne des données au format JSON.

## Structure du projet

- `app.js` : Serveur Express
- `données/` : Contient un fichier JSON simulant une base de données
- `public/` : Site statique HTML/CSS/JS
  - `donnees.html` utilise Fetch API pour afficher les données dynamiquement

## Lancer le projet

```bash
npm install
node app.js
