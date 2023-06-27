import { getTabuleiro } from "./state.js";

const etabuleiro = document.querySelector(".tabuleiro");
const disco = document.querySelector(".disco");

let arrastado = null;

setup();

function comecaArrastar(evento){
    console.log(evento.target);
    arrastado = evento.target;
}