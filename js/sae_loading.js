// Initialisation des variables et tableaux vides pour simplifier la manipulation des données
let sae_number = Object.keys(SAE);
let title = [];
let comp = [];
let zone_sae = ""

// Remplissage des tableaux avec les données des SAE
for (let i = 0; i < sae_number.length; i++) {
    title.push(SAE[sae_number[i]].titre);
    comp.push(SAE[sae_number[i]].compétences);
}

// Construction de l'affichage des SAE
for(let t = 0; t<sae_number.length; t++) {
    let tmp = ""
    // Traitement des compétences multiples avec défilement
    if(comp[t].length>1) {
        let tmp2 =""
        comp[t].forEach(e => {
            tmp2+=e+" ";
        })
        
        tmp+='<div class="competences"><marquee direction="left" scrollamount="6">'+tmp2+'</marquee></div>';
    }
    
    // Traitement d'une compétence unique
    else {
        tmp+='<div class="competences">'+comp[t]+'</div>'
    }

    // Construction du HTML pour chaque SAE
    zone_sae += `<div onclick="location.href='sae_information.html?sae=${sae_number[t]}'" class="sae-color" style="cursor: pointer;">
                    <div class="sae">
                        <h3>${sae_number[t]}</h3>
                        <p>${title[t]}</p>
                        ${tmp}
                    </div>
                </div>`
}

// Insertion du contenu généré dans le conteneur des SAE
document.querySelector(".container-sae").innerHTML = zone_sae