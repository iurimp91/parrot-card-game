let numeroCartas;
const cartasPossiveis = ["bobross", "explody", "fiesta", "metal", "revertit", "triplets", "unicorn"];
let cartasEscolhidas = [];
let mesa;

comecarJogo();

function comecarJogo() {
    numeroCartas = parseInt(prompt("Com quantas cartas vocês quer jogar?"));

    while (numeroCartas < 4 || numeroCartas > 14 || numeroCartas % 2 !== 0) {
        numeroCartas = parseInt(prompt("Com quantas cartas vocês quer jogar?"));
    }

    distribuirCartas();
}

function distribuirCartas() {
    embaralhar();
    mesa = document.querySelector("ul");
    
    for (let i = 0; i < numeroCartas; i++) {
        mesa.innerHTML += `<li class="carta" onclick="escolha(this, '${cartasEscolhidas[i]}')">
        <div class="face-frente face"><img src="media/front.png"></div>
        <div class="face-costas face"><img src="media/${cartasEscolhidas[i]}parrot.gif"></div>
        </li>`
    }
}

function embaralhar() {
    cartasEscolhidas = cartasPossiveis.sort(comparador).slice(0, numeroCartas / 2);
    console.log(cartasEscolhidas);
    cartasEscolhidas = cartasEscolhidas.concat(cartasEscolhidas);
    console.log(cartasEscolhidas);
    cartasEscolhidas = cartasEscolhidas.sort(comparador);
    console.log(cartasEscolhidas);
}

function comparador() {
    return Math.random() - 0.5;
}

let cartaViradaAgora = "";
let cartaViradaAntes = "";
let quantidadeJogadas = 0;
let cartasViradasTotal = 0;
let cartaClicadaAgora = "";
let cartaClicadaAntes = "";

function escolha(elemento, carta) {
    console.log(cartaClicadaAgora);
    console.log(cartaClicadaAntes);
    cartaViradaAntes = cartaViradaAgora;
    cartaViradaAgora = carta;
    cartaClicadaAntes = cartaClicadaAgora;
    cartaClicadaAgora = elemento;

    cartaClicadaAgora.classList.add("virada");

    if (cartaViradaAntes === "") {
        quantidadeJogadas++;
    } else if (cartaViradaAgora !== cartaViradaAntes) {
        setTimeout(function () {
            cartaClicadaAgora.classList.remove("virada");
            cartaClicadaAntes.classList.remove("virada");
            cartaViradaAgora = "";
            cartaViradaAntes = "";
            quantidadeJogadas++;
        }, 1000);
    } else {
        cartaClicadaAgora.setAttribute("onclick", "");
        cartaClicadaAntes.setAttribute("onclick", "");
        quantidadeJogadas++;
        cartasViradasTotal += 2;
        cartaViradaAgora = "";
        cartaViradaAntes = "";
        fimDeJogo();
    }
    console.log(cartasViradasTotal);
    console.log(quantidadeJogadas);

}

let tempo = 0;

const idRelogio = setInterval(contarSegundos, 1000);

function contarSegundos() {
    tempo++;
    const relogio = document.querySelector(".relogio");
    relogio.innerHTML = tempo;
}

function fimDeJogo() {
    if (cartasViradasTotal === numeroCartas) {
        clearInterval(idRelogio);
        alert(`Você ganhou com ${quantidadeJogadas} jogadas e ${tempo} segundos!`);
        const jogarDeNovo = prompt("Você deseja jogar novamente? (Sim ou Não)");
        while (jogarDeNovo === "" || jogarDeNovo !== "sim" || jogarDeNovo !== "s" || jogarDeNovo !== "nao" || jogarDeNovo !== "não" || jogarDeNovo !== "n") {
            prompt("Você deseja jogar novamente? (Sim ou Não)");
            if (jogarDeNovo === "sim" || jogarDeNovo === "s") {
                numeroCartas = 0;
                cartasEscolhidas = [];
                mesa = ""
                cartaViradaAgora = "";
                cartaViradaAntes = "";
                quantidadeJogadas = 0;
                cartasViradasTotal = 0;
                cartaClicadaAgora = "";
                cartaClicadaAntes = "";
                tempo = 0;
                comecarJogo();
            }
        }
    }
}

//Colocar o sort que nem o Patrick falou. OK!
//Alterar a quantidade de jogadas para cartas viradas e não para duplas viradas. OK!
//Ajeitar layout do relógio.
//Fazer o bônus de perguntar se quer jogar novamente.
//CONSERTAR BUG DE SAIR CLICANDO QUE NEM DOIDO!