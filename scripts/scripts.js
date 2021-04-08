let numeroCartas;
const cartasPossiveis = ["bobross", "explody", "fiesta", "metal", "revertit", "triplets", "unicorn"];
let cartasEscolhidas = [];

comecarJogo();

function comecarJogo() {
    numeroCartas = parseInt(prompt("Com quantas cartas vocês quer jogar?"));

    while (numeroCartas < 4 || numeroCartas > 14 || numeroCartas % 2 !== 0) {
        numeroCartas = parseInt(prompt("Com quantas cartas vocês quer jogar?"));
    }

    distribuirCartas();
}

function distribuirCartas() {
    randomizar();
    const mesa = document.querySelector("ul");
    
    for (let i = 0; i < numeroCartas; i++) {
        mesa.innerHTML += `<li>
        <img src="media/front.png" class="face-frente">
        <img src="media/${cartasEscolhidas[i]}parrot.gif" class="face-costas">
        </li>`
    }
}

function randomizar() {
    cartasEscolhidas = cartasPossiveis.slice(0, numeroCartas / 2);
    console.log(cartasEscolhidas);
    cartasEscolhidas = cartasEscolhidas.concat(cartasEscolhidas);
    console.log(cartasEscolhidas);
    cartasEscolhidas = cartasEscolhidas.sort(comparador);
    console.log(cartasEscolhidas);
}

function comparador() {
    return Math.random() - 0.5;
}