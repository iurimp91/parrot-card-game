function abrirPagina() {
    let numeroCartas = parseInt(prompt("Com quantas cartas vocês quer jogar?"));

    while (numeroCartas < 4 || numeroCartas > 14 || numeroCartas % 2 !== 0) {
        numeroCartas = parseInt(prompt("Com quantas cartas vocês quer jogar?"));
    }

    const mesa = document.querySelector("ul");

    if (numeroCartas === 4) {
        for (let i = 0; i < 2; i++) {
            mesa.innerHTML += `
                <li onclick='virarCarta(this)'>
                <img class="para-baixo" src="media/front.png" alt="Papagaio">
                <img class="para-cima escondido" src="media/explodyparrot.gif" alt="Papagaio que explode">
                </li>
            `;
        }
        for (let i = 0; i < 2; i++) {
            mesa.innerHTML += `
                <li onclick='virarCarta(this)'>
                <img class="para-baixo" src="media/front.png" alt="Papagaio">
                <img class="para-cima escondido" src="media/bobrossparrot.gif" alt="Papagaio que explode">
                </li>
            `;
        }
    }

    let cartas = [];
    cartas = mesa.querySelectorAll("ul li");
}

function virarCarta(elemento) {


    const cartaFrente = elemento.querySelector(".para-baixo");
    cartaFrente.classList.add("escondido");

    const cartaCostas = elemento.querySelector(".para-cima");
    cartaCostas.classList.remove("escondido");
}



abrirPagina();