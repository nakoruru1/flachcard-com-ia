// script.js
const flashcardsData = [
    {
        mito: "O Brasil é o maior consumidor de agrotóxicos do mundo.",
        verdade: "FALSO. O Brasil é um dos maiores consumidores em volume total por ser um grande produtor agrícola, mas o consumo por hectare é menor que em países como Holanda, Bélgica e Itália. Além disso, o uso segue regulamentações da Anvisa."
    },
    {
        mito: "Agrotóxicos estão envenenando a população brasileira.",
        verdade: "FALSO. De acordo com análises da Anvisa, a grande maioria das amostras de alimentos (cerca de 77%) estão dentro dos limites seguros. Resíduos acima do permitido são raros e o uso correto dos defensivos não representa risco à saúde quando respeitadas as boas práticas."
    },
    {
        mito: "Alimentos transgênicos (OGM) fazem mal à saúde.",
        verdade: "FALSO. Mais de 25 anos de estudos científicos em todo o mundo comprovam que alimentos transgênicos aprovados são tão seguros quanto os convencionais. Eles reduzem o uso de defensivos e aumentam a produtividade."
    },
    {
        mito: "O agronegócio é o principal responsável pelo desmatamento da Amazônia.",
        verdade: "PARCIALMENTE. O desmatamento ilegal é o problema real. O agronegócio moderno usa tecnologia para produzir mais em menos área e respeita o Código Florestal. Grande parte do desmatamento vem de grilagem e ocupação ilegal, não de produtores regularizados."
    },
    {
        mito: "Agricultura orgânica é sempre mais saudável e sustentável que a convencional.",
        verdade: "FALSO. Tanto orgânica quanto convencional podem ser sustentáveis. A agricultura convencional usa tecnologia para produzir mais comida com menos impacto ambiental por unidade produzida. Alimentos orgânicos não são mais nutritivos."
    },
    {
        mito: "A pecuária é a grande vilã das mudanças climáticas.",
        verdade: "FALSO. A pecuária brasileira representa cerca de 10-12% das emissões totais do país. Práticas como integração lavoura-pecuária-floresta (ILPF) e pastagens bem manejadas podem até sequestrar carbono. A Embrapa desenvolve sistemas carbono neutro."
    },
    {
        mito: "O agro não gera empregos e só beneficia grandes produtores.",
        verdade: "FALSO. O agronegócio responde por cerca de 20-25% do PIB brasileiro e gera milhões de empregos diretos e indiretos. A agricultura familiar e os grandes produtores são complementares na cadeia produtiva."
    },
    {
        mito: "O agro gasta água demais e é o maior vilão do consumo hídrico.",
        verdade: "FALSO. A irrigação é importante, mas a água usada pelas plantas retorna ao ciclo hidrológico. Cidades consomem e poluem grande parte da água. A agricultura eficiente usa tecnologias de irrigação de precisão."
    }
];

function createFlashcards() {
    const container = document.getElementById('flashcards');
    
    flashcardsData.forEach((card, index) => {
        const flashcard = document.createElement('div');
        flashcard.className = 'flashcard';
        flashcard.innerHTML = `
            <div class="flashcard-inner">
                <!-- Frente -->
                <div class="flashcard-front">
                    <div class="mito">❌ MITO</div>
                    <p>${card.mito}</p>
                    <small style="margin-top: 2rem; opacity: 0.9;">Clique para ver a verdade →</small>
                </div>
                <!-- Verso -->
                <div class="flashcard-back">
                    <div style="color: #2e7d32; font-size: 1.6rem; font-weight: bold; margin-bottom: 1.5rem;">✅ VERDADE</div>
                    <p class="verdade">${card.verdade}</p>
                    <small style="margin-top: auto; color: #666;">Clique novamente para virar</small>
                </div>
            </div>
        `;
        
        flashcard.addEventListener('click', () => {
            flashcard.classList.toggle('flipped');
        });
        
        container.appendChild(flashcard);
    });
}

document.addEventListener('DOMContentLoaded', createFlashcards);