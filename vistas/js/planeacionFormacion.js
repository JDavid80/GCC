let divBoxDisplayAsignatura = document.getElementById("divBoxDisplayAsignatura");
let divBoxDisplayOrientador = document.getElementById("divBoxDisplayOrientador");
let divBoxDisplayCurso = document.getElementById("divBoxDisplayCurso");
let iconoPlusProcesoFormacion = document.getElementById('iconoPlusProcesoFormacion');
let iconoPlusOrientador = document.getElementById('iconoPlusOrientador');
let iconoPlusCurso = document.getElementById('iconoPlusCurso');
let iconoPlusPeriodo = document.getElementById('iconoPlusPeriodo');
let iconoPlusUnidad = document.getElementById('iconoPlusUnidad');
let iconoPlusTopico = document.getElementById('iconoPlusTopico');
let iconoPlusSemana = document.getElementById('iconoPlusSemana');
let iconoPlusFaseSecuencia = document.getElementById('iconoPlusFaseSecuencia');
let iconoPlusRecurso = document.getElementById('iconoPlusRecurso');

iconoPlusProcesoFormacion.addEventListener('click', function() {
    divBoxDisplayAsignatura.classList.remove('div-box-input-single-hidden');
    divBoxDisplayAsignatura.classList.add('div-box-input-single');
});
iconoPlusOrientador.addEventListener('click', function() {
    tiposDocumento();
    divBoxDisplayOrientador.classList.remove('div-box-input-single-hidden');
    divBoxDisplayOrientador.classList.add('div-box-input-single');
});
iconoPlusCurso.addEventListener('click', function() {
    divBoxDisplayCurso.classList.remove("div-box-input-single-hidden");
    divBoxDisplayCurso.classList.add('div-box-input-single');
});
iconoPlusPeriodo.addEventListener('click', function() {
    divBoxDisplayPeriodo.classList.remove("div-box-input-single-hidden");
    divBoxDisplayPeriodo.classList.add('div-box-input-single');
});
iconoPlusUnidad.addEventListener('click', function() {
    divBoxDisplayUnidad.classList.remove("div-box-input-single-hidden");
    divBoxDisplayUnidad.classList.add('div-box-input-single');
});
iconoPlusTopico.addEventListener('click', function() {
    divBoxDisplayTopico.classList.remove('div-box-input-single-hidden');
    divBoxDisplayTopico.classList.add('div-box-input-single');
});
iconoPlusSemana.addEventListener('click', function() {
    divBoxDisplaySemana.classList.remove("div-box-input-single-hidden");
    divBoxDisplaySemana.classList.add('div-box-input-single');
});
iconoPlusFaseSecuencia.addEventListener('click', function() {
    divBoxDisplayFaseSecuencia.classList.remove("div-box-input-single-hidden");
    divBoxDisplayFaseSecuencia.classList.add('div-box-input-single');
});
iconoPlusRecurso.addEventListener('click', function() {
    divBoxDisplayRecurso.classList.remove("div-box-input-single-hidden");
    divBoxDisplayRecurso.classList.add('div-box-input-single');
});

let btnProcesoFormacion = document.getElementById('btnProcesoFormacion');
let btnCancelarProcesoFormacion = document.getElementById('btnCancelarProcesoFormacion');
let btnOrientador = document.getElementById('btnOrientador');
let btnCancelarOrientador = document.getElementById('btnCancelarOrientador');
let btnCurso = document.getElementById('btnCurso');
let btnCancelarCurso = document.getElementById('btnCancelarCurso');
let btnPeriodo = document.getElementById('btnPeriodo');
let btnUnidad = document.getElementById('btnUnidad');
let btnSemana = document.getElementById('btnSemana');
let btnFaseSecuencia = document.getElementById('btnFaseSecuencia');
let btnRecurso = document.getElementById('btnRecurso');
let btnGuardarPlaneacion = document.getElementById('btnGuardarPlaneacion');

btnCancelarProcesoFormacion.addEventListener('click', function() {
    divBoxDisplayAsignatura.classList.add("div-box-input-single-hidden");
    divBoxDisplayAsignatura.classList.remove('div-box-input-single');
});
btnCancelarOrientador.addEventListener('click', function() {
    divBoxDisplayOrientador.classList.add("div-box-input-single-hidden");
    divBoxDisplayOrientador.classList.remove('div-box-input-single');
});
btnCancelarCurso.addEventListener('click', function() {
    divBoxDisplayCurso.classList.add("div-box-input-single-hidden");
    divBoxDisplayCurso.classList.remove('div-box-input-single');
});
btnCancelarPeriodo.addEventListener('click', function() {
    divBoxDisplayPeriodo.classList.add("div-box-input-single-hidden");
    divBoxDisplayPeriodo.classList.remove('div-box-input-single');
});
btnCancelarUnidad.addEventListener('click', function() {
    divBoxDisplayUnidad.classList.add("div-box-input-single-hidden");
    divBoxDisplayUnidad.classList.remove('div-box-input-single');
});
btnCancelarTopico.addEventListener('click', function() {
    divBoxDisplayTopico.classList.add("div-box-input-single-hidden");
    divBoxDisplayTopico.classList.remove('div-box-input-single');
});
btnCancelarSemana.addEventListener('click', function() {
    divBoxDisplaySemana.classList.add("div-box-input-single-hidden");
    divBoxDisplaySemana.classList.remove('div-box-input-single');
});
btnCancelarFaseSecuencia.addEventListener('click', function() {
    divBoxDisplayFaseSecuencia.classList.add("div-box-input-single-hidden");
    divBoxDisplayFaseSecuencia.classList.remove('div-box-input-single');
});
btnCancelarCurso.addEventListener('click', function() {
    divBoxDisplayRecurso.classList.add("div-box-input-single-hidden");
    divBoxDisplayRecurso.classList.remove('div-box-input-single');
});
btnCancelarRecurso.addEventListener('click', function() {
    divBoxDisplayRecurso.classList.add("div-box-input-single-hidden");
    divBoxDisplayRecurso.classList.remove('div-box-input-single');
});

btnProcesoFormacion.addEventListener('click', function() {
    if (`${inputProcesoFormacion.value}`.trim() == "") {
        alert("No se puede guardar un proceso de formación vacío.");
    } else {
        
var x=document.getElementById('inputProcesoFormacion').value;
var datos = new URLSearchParams();

datos.append('dato',x);
datos.append('ident',5454554);

        fetch('/Guardar_Proceso_Formacion',
            {
                method:'post',
                body:datos 
            })
            .then(res=>res.text())
            .then(data=>{
                alert(data);
            });

        divBoxDisplayAsignatura.classList.add("div-box-input-single-hidden");
        divBoxDisplayAsignatura.classList.remove('div-box-input-single');
        procesoFormacion();
    }
})

btnGuardarPlaneacion.addEventListener('click', function() {
    if(validacion) {
        let datos = new URLSearchParams();

        datos.append('idProcesoFormacion', document.getElementById('idProcesoFormacion').value);
        datos.append('idOrientador', document.getElementById('idOrientador').value);
        datos.append('idCurso', document.getElementById('idCurso').value);
        datos.append('idPeriodo', document.getElementById('idPeriodo').value);
        datos.append('idUnidad', document.getElementById('idUnidad').value);

        fetch('/Guardar_Planeacion', 
        {
            method: 'post',
            body: datos
        })
        .then(res => res.text())
        .then(data => {
            alert(data);
        });
    }
});

function validacion() {
    return true;
}
btnOrientador.addEventListener('click', function() {
    if(`${inputNombresOrientador.value}`.trim() == "") {
        alert("No se puede guardar un orientador vacío");
    } else {
        let nombresOrientador = document.getElementById('inputNombresOrientador').value;
        let apellidosOrientador = document.getElementById('inputPrimerApellidoOrientador').value;

        let datos = new URLSearchParams();

        datos.append('nombres', nombresOrientador);
        datos.append('primerApellido', apellidosOrientador);

        fetch('/Guardar_Orientador',
        {
            method:'post',
            body:datos
        })
        .then(res => res.text())
        .then(data => {
            alert(data);
        });
        
        divBoxDisplayOrientador.classList.add("div-box-input-single-hidden");
        divBoxDisplayOrientador.classList.remove('div-box-input-single');
       orientadores();
    }
});

btnCurso.addEventListener('click', function() {
    if(`${inputCurso.value}`.trim() == "") {
        alert("No se puede guardar un curso vacío");
    } else {
        let curso = document.getElementById('inputCurso').value;
        let datos = new URLSearchParams();

        datos.append('dato', curso);

        fetch('/Guardar_Curso',
        {
            method:'post',
            body:datos
        })
        .then(res => res.text())
        .then(data => {
            alert(data);
        });
        divBoxDisplayCurso.classList.add("div-box-input-single-hidden");
        divBoxDisplayCurso.classList.remove('div-box-input-single');
    }
});

btnPeriodo.addEventListener("click", function() {
    if(`${inputPeriodo.value}`.trim() == "") {
        alert("No se puede guardar un periodo vacío");
    } else {
        let periodo = document.getElementById("inputPeriodo").value;
        let datos = new URLSearchParams();

        datos.append('dato', periodo);

        fetch('/Guardar_Periodo',
        {
            method:'post',
            body:datos
        })
        .then(res => res.text())
        .then(data => {
            alert(data);
        });
        divBoxDisplayPeriodo.classList.add("div-box-input-single-hidden");
        divBoxDisplayPeriodo.classList.remove('div-box-input-single');
    }
});

btnUnidad.addEventListener("click", function() {
    if(`${inputUnidad.value}`.trim() == "") {
        alert("No se puede guardar una unidad vacía");
    } else {
        let unidad = document.getElementById('inputUnidad').value;
        let datos = new URLSearchParams();

        datos.append('dato', unidad);

        fetch('/Guardar_Unidad',
        {
            method: 'post',
            body: datos
        })
        .then(res => res.text())
        .then(data => {
            alert(data);
        });
        divBoxDisplayUnidad.classList.add("div-box-input-single-hidden");
        divBoxDisplayUnidad.classList.remove('div-box-input-single');
    }
});

btnTopico.addEventListener('click', function() {
    if(`${inputTopico.value}`.trim() == "") {
        alert("No se puede guardar un tópico vacío");
    }
    else {
        let topico = document.getElementById('inputTopico').value;
        let idUnidad = document.getElementById('idUnidad').value;
        console.log(idUnidad);
        let datos = new URLSearchParams();

        datos.append('dato', topico);
        datos.append('idUnidad', idUnidad);

        fetch('/Guardar_Topico',
        {
            method: 'post',
            body: datos
        })
        .then(res => res.text())
        .then(data => {
            alert(data);
        });
        divBoxDisplayTopico.classList.add("div-box-input-single-hidden");
        divBoxDisplayTopico.classList.remove('div-box-input-single');
    }
});

btnSemana.addEventListener('click', function() {
    if(`${inputSemana.value}`.trim() == "") {
        alert("No se puede guardar una semana vacía");
    } else {
        let semana = document.getElementById('inputSemana').value;
        let datos = new URLSearchParams();

        datos.append('dato', semana);

        fetch('/Guardar_Semana',
        {
            method: 'post',
            body: datos
        })
        .then(res => res.text())
        .then(data => {
            alert(data);
        });
        divBoxDisplaySemana.classList.add("div-box-input-single-hidden");
        divBoxDisplaySemana.classList.remove('div-box-input-single');
    }
});

btnFaseSecuencia.addEventListener('click', function() {
    if(`${inputFaseSecuencia.value}`.trim() == "") {
        alert("No se puede guardar una fase vacía");
    } else {
        let faseSecuencia = document.getElementById('inputFaseSecuencia').value;
        let datos = new URLSearchParams();

        datos.append('dato', faseSecuencia);

        fetch('/Guardar_Fase_Secuencia',
        {
            method: 'post',
            body: datos
        })
        .then(res => res.text())
        .then(data => {
            alert(data);
        });
        divBoxDisplayFaseSecuencia.classList.add("div-box-input-single-hidden");
        divBoxDisplayFaseSecuencia.classList.remove('div-box-input-single');
    }
});

btnRecurso.addEventListener('click', function() {
    if(`${inputRecurso.value}`.trim() == "") {
        alert("No se puede guardar recurso vacío");
    } else {
        let recurso= document.getElementById('inputRecurso').value;
        let datos = new URLSearchParams();

        datos.append('dato', recurso);

        fetch('/Guardar_Recurso',
        {
            method: 'post',
            body: datos
        })
        .then(res => res.text())
        .then(data => {
            alert(data);
        });
        divBoxDisplayRecurso.classList.add("div-box-input-single-hidden");
        divBoxDisplayRecurso.classList.remove('div-box-input-single');
    }
});
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

/* function ocultarProcesoFormacion() {
    divBoxDisplayAsignatura.classList.remove("div-box-display-asignatura-hidden");
    divBoxDisplayAsignatura.classList.add('div-box-display-asignatura');
}
 */


procesoFormacion();
orientadores();
cursos();
periodos();
unidades();
topicos();
semanas();
fasesSecuencia();
recursos();
/* planeacion(); */

function procesoFormacion() {

    let sintaxisHtml = '';

    fetch("/Listar_Procesos")
        .then(response => response.json())
        .then(function(data) {
            for (var i = 0; i < data.length; i++) {
                sintaxisHtml += `<option value='${data[i].id_proceso_formacion}'>${data[i].nombre_proceso}</option>`;
            }
            document.getElementById('idProcesoFormacion').innerHTML = sintaxisHtml;
        });
}

function orientadores() {
    let sintaxisHtml = '';

    fetch("/Listar_Orientadores")
        .then(response => response.json())
        .then(function(data) {
            for (var i = 0; i < data.length; i++) {
                sintaxisHtml += `<option value='${data[i].id_orientador}'>${data[i].nombres} ${data[i].primer_apellido} ${data[i].segundo_apellido}</option>`;
            }
            document.getElementById('idOrientador').innerHTML = sintaxisHtml;
        });
}

function cursos() {
    let sintaxisHtml = '';

    fetch("/Listar_Cursos")
        .then(response => response.json())
        .then(function(data) {
            for (var i = 0; i < data.length; i++) {
                sintaxisHtml += `<option value='${data[i].id_curso}'>${data[i].nombre} </option>`;
            }
            document.getElementById('idCurso').innerHTML = sintaxisHtml;
        });
}

function periodos() {
    let sintaxisHtml = '';

    fetch("/Listar_Periodos")
    .then(response => response.json())
    .then(function(data) {
        for(let i = 0; i < data.length; i++) {
            sintaxisHtml += `<option value='${data[i].id_periodo}'>${data[i].nombre}</option>`;
        }
        document.getElementById('idPeriodo').innerHTML = sintaxisHtml;
    });
}

function unidades() {
    let sintaxisHtml = '';

    fetch("/Listar_Unidades")
    .then(response => response.json())
    .then(function(data) {
        for(let i = 0; i < data.length; i++) {
            sintaxisHtml += `<option value='${data[i].id_unidad}'>${data[i].nombre}</option>`;
        }
        document.getElementById('idUnidad').innerHTML = sintaxisHtml;
    });
}

function topicos() {
    let sintaxisHtml = '';

    fetch('/Listar_Topicos')
    .then(response => response.json())
    .then(function(data) {
        for(let i = 0; i < data.length; i++) {
            sintaxisHtml += `${data[i].nombre_topico}\n`
        }
        document.getElementById('idTopico').innerHTML = sintaxisHtml;
    });
}

function semanas() {
    let sintaxisHtml = '';

    fetch("/Listar_Semanas")
    .then(response => response.json())
    .then(function(data) {
        for(let i = 0; i < data.length; i++) {
            sintaxisHtml += `<option value='${data[i].id_semana}'>${data[i].nombre}</option>`
        }
        document.getElementById('idSemana').innerHTML = sintaxisHtml;
    });
}

function fasesSecuencia() {
    let sintaxisHtml = '';

    fetch("/Listar_Fases_Secuencia")
    .then(response => response.json())
    .then(function(data) {
        for(let i = 0; i < data.length; i++) {
            sintaxisHtml += `<option value='${data[i].id_fase_secuencia}'>${data[i].nombre}</option>`
        }
        document.getElementById('idFaseSecuencia').innerHTML = sintaxisHtml;
    });
}


function recursos() {
    let sintaxisHtml = '';

    fetch("/Listar_Recursos")
    .then(response => response.json())
    .then(function(data) {
        for(let i = 0; i < data.length; i++) {
            sintaxisHtml += `<option value='${data[i].id_recurso}'>${data[i].nombre}</option>`
        }
        document.getElementById('idRecurso').innerHTML = sintaxisHtml;
    });
}

function tiposDocumento() {
    let sintaxisHtml = '';

    fetch('/Listar_Tipos_Documento')
    .then(response => response.json())
    .then(function(data) {
        for(let i = 0; i < data.length; i++) {
            sintaxisHtml += `<option value='${data[i].id_tipo_documento}'>${data[i].nombre_tipo_documento}</option>`
        }
        document.getElementById('idTipoDocumento').innerHTML = sintaxisHtml;
    })
}
/* function planeacion() {
    let sintaxisHtml = '';

    fetch('/Listar_Planeaciones')
    .then(response => response.json())
    .then(function(data) {
        for(let i = 0; i < data.length; i++) {
            sintaxisHtml += ``
        }
    });
} */