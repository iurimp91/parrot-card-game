function abrirPagina() {
    let numeroCartas = parseInt(prompt("Com quantas cartas vocês quer jogar?"));

    while (numeroCartas < 4 || numeroCartas > 14 || numeroCartas % 2 !== 0) {
        numeroCartas = parseInt(prompt("Com quantas cartas vocês quer jogar?"));
    }

    const mesa = document.querySelector("ul");

    if (numeroCartas > 3) {
        for (let i = 0; i < 2; i++) {
            mesa.innerHTML += `
                <li onclick='virarCarta(this)'>
                <img class="para-baixo" src="media/front.png" alt="Papagaio">
                <img class="para-cima escondido" src="media/bobrossparrot.gif" alt="Papagaio bobross">
                </li>
            `;
        }
        for (let i = 0; i < 2; i++) {
            mesa.innerHTML += `
                <li onclick='virarCarta(this)'>
                <img class="para-baixo" src="media/front.png" alt="Papagaio">
                <img class="para-cima escondido" src="media/explodyparrot.gif" alt="Papagaio que explode">
                </li>
            `;
        }
    } if (numeroCartas > 5) {
        for (let i = 0; i < 2; i++) {
            mesa.innerHTML += `
                <li onclick='virarCarta(this)'>
                <img class="para-baixo" src="media/front.png" alt="Papagaio">
                <img class="para-cima escondido" src="media/fiestaparrot.gif" alt="Papagaio fiesta">
                </li>
            `;
        }
    } if (numeroCartas > 7) {
        for (let i = 0; i < 2; i++) {
            mesa.innerHTML += `
                <li onclick='virarCarta(this)'>
                <img class="para-baixo" src="media/front.png" alt="Papagaio">
                <img class="para-cima escondido" src="media/metalparrot.gif" alt="Papagaio metal">
                </li>
            `;
        }
    } if (numeroCartas > 9) {
        for (let i = 0; i < 2; i++) {
            mesa.innerHTML += `
                <li onclick='virarCarta(this)'>
                <img class="para-baixo" src="media/front.png" alt="Papagaio">
                <img class="para-cima escondido" src="media/revertitparrot.gif" alt="Papagaio revertit">
                </li>
            `;
        }
    } if (numeroCartas > 11) {
        for (let i = 0; i < 2; i++) {
            mesa.innerHTML += `
                <li onclick='virarCarta(this)'>
                <img class="para-baixo" src="media/front.png" alt="Papagaio">
                <img class="para-cima escondido" src="media/tripletsparrot.gif" alt="Papagaio trigêmeos">
                </li>
            `;
        }
    } if (numeroCartas > 13) {
        for (let i = 0; i < 2; i++) {
            mesa.innerHTML += `
                <li onclick='virarCarta(this)'>
                <img class="para-baixo" src="media/front.png" alt="Papagaio">
                <img class="para-cima escondido" src="media/unicornparrot.gif" alt="Papagaio unicórnio">
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