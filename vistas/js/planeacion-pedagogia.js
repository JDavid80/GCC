/* let mainNav = document.getElementById("mainNav");
let iconoMenu = document.getElementById("iconoMenu");*/
alert("Holis");
let idProcesoFormacion = document.getElementById("idProcesoFormacion");




/* iconoMenu.addEventListener("click", function() {
    mainNav.classList.remove("main-nav");
    mainNav.classList.add("main-nav-hidden");
}); */

let divBoxDisplayAsignatura = document.getElementById("divBoxDisplayAsignatura");
let divBoxDisplayOrientador = document.getElementById("divBoxDisplayOrientador");
let iconoPlusProcesoFormacion = document.getElementById('iconoPlusProcesoFormacion');
let iconoPlusOrientador = document.getElementById('iconoPlusOrientador');

/* const inputProcesoFormacion = document.querySelector('#inputProcesoFormacion'); */
//const inputOrientador = document.querySelector('#inputOrientador');

iconoPlusProcesoFormacion.addEventListener('click', function() {
    divBoxDisplayAsignatura.classList.remove('div-box-input-single-hidden');
    divBoxDisplayAsignatura.classList.add('div-box-input-single');
});
/* iconoPlusOrientador.addEventListener('click', function() {
    divBoxDisplayOrientador.classList.remove('div-box-display-orientador-hidden');
    divBoxDisplayOrientador.classList.add('div-box-display-orientador');
}); */
/* iconoPlusOrientador.addEventListener('click', function() {
    divBoxDisplayOrientador.classList.remove("div-box-display-orientador-hidden");
    divBoxDisplayOrientador.classList.add('div-box-display-orientador');
}); */

let btnProcesoFormacion = document.getElementById('btnProcesoFormacion');
let btnCancelarProcesoFormacion = document.getElementById('btnCancelarProcesoFormacion');
let btnOrientador = document.getElementById('btnOrientador');
let btnCancelarOrientador = document.getElementById('btnCancelarOrientador');

btnProcesoFormacion.addEventListener('click', function() {
    if (`${inputProcesoFormacion.value}`.trim() == "") {
        alert("No se puede guardar un proceso de formación vacío.");
    } else {
        window.location.href = `agregar/${inputProcesoFormacion.value}`
        divBoxDisplayAsignatura.classList.add("div-box-input-single-hidden");
        divBoxDisplayAsignatura.classList.remove('div-box-input-single');
    }
})

/* btnOrientador.addEventListener('click', function() { 
    if (`${inputOrientador.value}`.trim() == "") {
        alert("No se puede guardar un espacio vacío para orientador.");
    }
    else {
        window.location.href = `agregarOrientador/${inputOrientador.value}`
        divBoxDisplayOrientador.classList.add("div-box-display-orientador-hidden");
        divBoxDisplayOrientador.classList.remove('div-box-display-orientador');
    }       
}); */
/*
btnOrientador.addEventListener('click', function() {
    window.location.href = `agregarOrientador/${inputOrientador.value}`
    divBoxDisplayOrientador.classList.add("div-box-display-orientador-hidden");
    divBoxDisplayOrientador.classList.remove('div-box-display-orientador');
}); */
btnCancelarProcesoFormacion.addEventListener('click', function() {
    divBoxDisplayAsignatura.classList.add("div-box-input-single-hidden");
    divBoxDisplayAsignatura.classList.remove('div-box-input-single');
});

/*
btnCancelarOrientador.addEventListener('click', function() {
    divBoxDisplayOrientador.classList.add("div-box-display-orientador-hidden");
    divBoxDisplayOrientador.classList.remove('div-box-display-orientador');
}); */
/* function ocultarProcesoFormacion() {
    divBoxDisplayAsignatura.classList.remove("div-box-display-asignatura-hidden");
    divBoxDisplayAsignatura.classList.add('div-box-display-asignatura');
}
 */