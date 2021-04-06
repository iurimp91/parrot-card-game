function abrirPagina() {
    let numeroCartas = parseInt(prompt("Com quantas cartas vocês quer jogar?"));

    while (numeroCartas < 4 || numeroCartas > 14 || numeroCartas % 2 !== 0) {
        numeroCartas = parseInt(prompt("Com quantas cartas vocês quer jogar?"));
    }

    const mesa = document.querySelector("ul");

    for (let i = 0; i < numeroCartas; i++) {
        mesa.innerHTML += `<li></li>`;
    }





}

//abrirPagina();