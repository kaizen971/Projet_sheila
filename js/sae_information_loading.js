// Récupération du numéro de la SAE depuis l'URL
let param = new URLSearchParams(location.search)
let num_sae = param.get("sae")

console.log(num_sae)

// Initialisation des variables nécessaires au script
let sae_key = Object.keys(SAE)
let sae_index = sae_key.indexOf(num_sae)
let comp_html = ""
let ac_html = ""
let ressource_html = ""
let ac_key = Object.keys(SAE[num_sae].AC)
let ac_value = Object.values(SAE[num_sae].AC)
let ressource_key = Object.keys(SAE[num_sae].ressources)
let ressource_value = Object.values(SAE[num_sae].ressources)

// Modification du contenu des éléments via innerHTML
document.querySelector(".sae-title>h3").innerHTML=sae_key[sae_index]
document.querySelector(".sae-title>h3:nth-child(2)").innerHTML=SAE[num_sae].titre
document.querySelector(".sae-title>h3:last-child").innerHTML="Semestre : " + SAE[num_sae].semestre
document.querySelector(".description>p").innerHTML=SAE[num_sae].description

// Création des divs pour chaque compétence
SAE[num_sae].compétences.forEach(element => {
    comp_html+='<div>'+element+'</div>'
});

// Création des paragraphes pour chaque AC
for(let i = 0; i<ac_key.length; i++) {
    ac_html += '<p><a class="ac-link" href="../pdf/'+num_sae+'.pdf" target="_blank">'+ac_key[i]+' : '+ac_value[i]+'</a></p>'
}

// Création des divs pour chaque ressource
for(let j = 0; j<ressource_key.length; j++) {
    ressource_html += '<div class="ressources"><h3>'+ressource_key[j]+'</h3><p>'+ressource_value[j]+'</p></div>'
}

// Insertion des éléments générés dans leurs conteneurs respectifs
document.querySelector(".competences").innerHTML=comp_html;
document.querySelector(".AC").innerHTML=ac_html;
document.querySelector(".ressources-zone").innerHTML=ressource_html;