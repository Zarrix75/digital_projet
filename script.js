document.getElementById("fetchDataBtn").addEventListener("click", async () => {
    try {
        const response = await fetch("/api/data");
        if (!response.ok) throw new Error("Erreur lors du chargement des données");

        const data = await response.json();

        let htmlContent = "<ul>";
        data.forEach(item => {
            htmlContent += `<li><strong>${item.titre}</strong> : ${item.contenu}</li>`;
        });
        htmlContent += "</ul>";

        document.getElementById("dataContainer").innerHTML = htmlContent;
    } catch (error) {
        document.getElementById("dataContainer").innerHTML = "<p>Une erreur est survenue.</p>";
        console.error("Erreur:", error);
    }
});
