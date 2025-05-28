const express = require("express");
const path = require("path");
const app = express();
const port = 4000; // changer le port pour éviter le conflit avec Grafana
const jsonData = require("./data/data.json"); // assure-toi que le fichier existe

app.use(express.static("public")); // dossiers statiques dans /public

app.get("/api/data", (req, res) => {
    res.json(jsonData);
});

// Route racine pour servir index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});
