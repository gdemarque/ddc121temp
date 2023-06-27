const casa = document.querySelector(".casa");
const disco = document.querySelector(".disco");

console.log(casa)
console.log(disco)

disco.addEventListener('dragstart', comecaArrastar);
casa[1].addEventListener('dragover',passouPorCima);
casa[1].addEventListener