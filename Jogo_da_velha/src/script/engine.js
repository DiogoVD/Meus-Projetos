const state = {
    variaveis: {
        player: 0,
        computer: 0
    },
    view:{
        quadrados: document.querySelectorAll(".quadrados")

    },
}
const arrayVencedor = [
    [1,2,3],
    [1,4,7],
    [1,5,9],
    [4,5,6],
    [2,5,8],
    [7,8,9],
    [3,5,7],
    [3,6,9]
];
const casas = [1,2,3,4,5,6,7,8,9];
let jogadasPlayer = [];
let jogadasComputer = [];
let casasDisponiveis = [];



function jogada(){
    state.view.quadrados.forEach((quadrado) =>{
        quadrado.addEventListener("mousedown", () => {
            jogadasPlayer.push(quadrado.id)
            console.log(jogadasPlayer);
            quadrado.classList.add("marcaX");
            if(jogadasPlayer.length>2){
                checkVitoria(jogadasPlayer, arrayVencedor);
            }
            
        });
    });
}

function checkVitoria(jogadas, arrayVencedor){
    let vence = 0;
    arrayVencedor.map( (x)=> {
        x.map((elemento) => {
            if((jogadas.sort()).includes(elemento.toString()) === true){
                vence++;
            }
            if((jogadas.sort()).includes(elemento.toString()) === false){
                vence = 0;
            }
        })
        if(vence === 3){
            alert("Ganhou");
        }
        console.log(x, jogadas)
    });
    
}

function init(){
    jogada()
    
}

init();