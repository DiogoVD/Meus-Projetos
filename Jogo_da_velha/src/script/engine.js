const state = {
    variaveis: {
        player: 0,
        computer: 0
    },
    view:{
        quadrados: document.querySelectorAll(".quadrados")

    },
}

let jogadasPlayer = [];
let jogadasComputer = [];

function jogada(){
    state.view.quadrados.forEach((quadrado) =>{
        quadrado.addEventListener("mousedown", () => {
            jogadasPlayer.push(quadrado.id)
            console.log(jogadasPlayer);
        });
    });
}

function init(){
    jogada()
    
}

init();