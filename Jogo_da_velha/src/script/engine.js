const state = {
    view:{
        quadrados: document.querySelectorAll(".quadrados")

    },
}

//  0   3   6
//  1   4   7
//  2   5   8
const arrayVencedor = [
    ["0","1","2"],
    ["3","4","5"],
    ["6","7","8"],
    ["0","3","6"],
    ["1","4","7"],
    ["2","5","8"],
    ["0","4","8"],
    ["2","4","6"]
];
const casas = ["0","1","2","3","4","5","6","7","8"];
let jogadasPlayer = [];
let jogadasComputer = [];
let casasDisponiveis = [];


function jogadaComputer(){
    filtroJogadas();
    
    let casaAleatoria = Math.floor(Math.random() * casasDisponiveis.length);
    let computerMove = casasDisponiveis[casaAleatoria]
    jogadasComputer.push(computerMove);
    state.view.quadrados[computerMove].classList.add("marcaO");
    checkVitoria(jogadasComputer,arrayVencedor, "O");

    
};

function filtroJogadas(){
    let arrayAux = jogadasComputer.concat(jogadasPlayer);
    casasDisponiveis = [];
    casas.forEach((e) => {
        if((arrayAux.includes(e)) === false){
            casasDisponiveis.push(e);
        }
    });
}


function jogadaPlayer1(){
    state.view.quadrados.forEach((quadrado) =>{
        quadrado.addEventListener("mousedown", () => {
            jogadasPlayer.push(quadrado.id)
            quadrado.classList.add("marcaX");
            if(jogadasPlayer.length>2){
                checkVitoria(jogadasPlayer, arrayVencedor, "X");
            }
        });
    });
}

function checkVitoria(jogadas, arrayVencedor, player){
    let vence = 0;
    arrayVencedor.map( (x)=> {
        x.map((elemento) => {
            if(jogadas.includes(elemento) === true){
                vence++;
            }
        })
        if(vence === 3){
            alert(`Ganhador: ${player}`)
        }
        vence = 0;
    });
    
};

function init(){
    if(jogadasPlayer.length <= jogadasComputer.length){
        jogadaPlayer1();
    }else{
        jogadaComputer();
    }    
    if(jogadasPlayer.length >= 4){
        alert("Jogo empatou");
    }

    
}

init();