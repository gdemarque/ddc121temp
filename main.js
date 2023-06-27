import { getTabuleiro } from "./state.js";

const etabuleiro = document.querySelector(".tabuleiro");
const disco = document.querySelector(".disco");

let arrastado = null;

setup();

disco.addEventListener('dragstart', comecaArrastar);
casa[1].addEventListener('dragover',passouPorCima);
casa[1].addEventListener