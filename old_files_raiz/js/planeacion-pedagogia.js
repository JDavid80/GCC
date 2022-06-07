"use strict"

let mainNav = document.getElementById("mainNav");
let iconoMenu = document.getElementById("iconoMenu");

/* iconoMenu.addEventListener("click", function() {
    mainNav.classList.remove("main-nav");
    mainNav.classList.add("main-nav-hidden");
}); */

let divBoxDisplayAsignatura = document.getElementById("divBoxDisplayAsignatura");
let iconoPlusProcesoFormacion = document.getElementById('iconoPlusProcesoFormacion');

iconoPlusProcesoFormacion.addEventListener('click', function() {
    divBoxDisplayAsignatura.classList.remove("div-box-display-asignatura-hidden");
    divBoxDisplayAsignatura.classList.add('div-box-display-asignatura');
});

let btnProcesoFormacion = document.getElementById('btnProcesoFormacion');
let btnCancelarProcesoFormacion = document.getElementById('btnCancelarProcesoFormacion');

btnProcesoFormacion.addEventListener('click', function() {
    divBoxDisplayAsignatura.classList.add("div-box-display-asignatura-hidden");
    divBoxDisplayAsignatura.classList.remove('div-box-display-asignatura');
});
btnCancelarProcesoFormacion.addEventListener('click', function() {
    divBoxDisplayAsignatura.classList.add("div-box-display-asignatura-hidden");
    divBoxDisplayAsignatura.classList.remove('div-box-display-asignatura');
});

/* function ocultarProcesoFormacion() {
    divBoxDisplayAsignatura.classList.remove("div-box-display-asignatura-hidden");
    divBoxDisplayAsignatura.classList.add('div-box-display-asignatura');
}
 */