document.addEventListener('DOMContentLoaded', () => {
    const containerSae = document.querySelector('.container-sae');
    
    // Pour chaque SAE dans les données
    data.sae.forEach(sae => {
        const saeElement = document.createElement('div');
        saeElement.className = 'sae';
        
        saeElement.innerHTML = `
            <a href="sae-document.html" class="sae-color">
                <div class="sae-content">
                    <h3>SAE ${sae.numero} - ${sae.titre}</h3>
                    <p>${sae.description}</p>
                    <div class="competences">
                        ${sae.competences.map(comp => `<div class="competence-item">${comp}</div>`).join('')}
                    </div>
                    <div class="productions">
                        ${sae.productions.map(prod => `
                            <div class="production-item">
                                <span>${prod.type}</span>
                                ${prod.visuel ? `<img src="${prod.visuel}" alt="${prod.type}">` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </a>
        `;
        
        containerSae.appendChild(saeElement);
    });
});