// Récupération du numéro de SAE depuis l'URL
let param = new URLSearchParams(location.search);
let num_sae = param.get("sae");

// Recherche de la SAE correspondante
const sae = SAE.sae.find(s => s.numero === num_sae);


if (sae) {
    // Mise à jour du titre et des informations de base
    document.querySelector(".sae-title>h3").innerHTML = `SAE ${sae.numero}`;
    document.querySelector(".sae-title>h3:nth-child(2)").innerHTML = sae.titre;
    document.querySelector(".sae-title>h3:last-child").innerHTML = `Semestre : ${sae.semestre}`;
    document.querySelector(".description>p").innerHTML = sae.description;

    // Génération des compétences
    let comp_html = "";
    sae.competences.forEach(comp => {
        comp_html += `<div>${comp}</div>`;
    });
    document.querySelector(".competences").innerHTML = comp_html;

    // Génération des apprentissages critiques
    let ac_html = "";
    sae.apprentissages_critiques.forEach(acId => {
        const ac = SAE.apprentissages_critiques.find(a => a.id === acId);
        if (ac) {
            ac_html += `<p><a href="../pdf/${num_sae}.pdf" target="_blank">${ac.id} : ${ac.description}</a></p>`;
        }
    });
    document.querySelector(".AC").innerHTML = ac_html;

    // Génération des ressources
    let ressource_html = "";
    sae.ressources_utilisees.forEach(resId => {
        const ressource = SAE.ressources.find(r => r.id === resId);
        if (ressource) {
            ressource_html += `
                <a href="">
                    <div class="ressources">
                        <h3>${ressource.id}</h3>
                        <p>${ressource.nom}</p>
                    </div>
                </a>
            `;
        }
    });
    document.querySelector(".ressources-zone").innerHTML = ressource_html;
}