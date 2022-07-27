let addProcesoFormacion = document.getElementById("addProcesoFormacion");
let addOrientador = document.getElementById("addOrientador");
let addCurso = document.getElementById("addCurso");
let addPeriodo = document.getElementById("addPeriodo");
let addUnidad = document.getElementById("addUnidad");
let addTopico = document.getElementById("addTopico");
let addSemana = document.getElementById("addSemana");
let addFaseSecuencia = document.getElementById('addFaseSecuencia');
let addRecurso = document.getElementById('addRecurso');
let iconoPlusProcesoFormacion = document.getElementById('iconoPlusProcesoFormacion');
let iconoPlusOrientador = document.getElementById('iconoPlusOrientador');
let iconoPlusCurso = document.getElementById('iconoPlusCurso');
let iconoPlusPeriodo = document.getElementById('iconoPlusPeriodo');
let iconoPlusUnidad = document.getElementById('iconoPlusUnidad');
let iconoPlusTopico = document.getElementById('iconoPlusTopico');
let iconoPlusSemana = document.getElementById('iconoPlusSemana');
let iconoPlusFaseSecuencia = document.getElementById('iconoPlusFaseSecuencia');
let iconoPlusRecurso = document.getElementById('iconoPlusRecurso');
let idCurso = document.getElementById('idCurso');

iconoPlusProcesoFormacion.addEventListener('click', function() {
    limpiarFormulario('inputProcesoFormacion');
    addProcesoFormacion.classList.remove('div-box-input-single-hidden');
    addProcesoFormacion.classList.add('div-box-input-single');
});
iconoPlusOrientador.addEventListener('click', function() {
    tiposDocumento();
    addOrientador.classList.remove('div-box-input-single-hidden');
    addOrientador.classList.add('div-box-input-single');
});
iconoPlusCurso.addEventListener('click', function() {
    limpiarFormulario('inputCurso');
    addCurso.classList.remove("div-box-input-single-hidden");
    addCurso.classList.add('div-box-input-single');
});
iconoPlusPeriodo.addEventListener('click', function() {
    limpiarFormulario('inputPeriodo');
    addPeriodo.classList.remove("div-box-input-single-hidden");
    addPeriodo.classList.add('div-box-input-single');
});
iconoPlusUnidad.addEventListener('click', function() {
    limpiarFormulario('inputUnidad');
    addUnidad.classList.remove("div-box-input-single-hidden");
    addUnidad.classList.add('div-box-input-single');
});
iconoPlusTopico.addEventListener('click', function() {
    limpiarFormulario('inputTopico');
    addTopico.classList.remove('div-box-input-single-hidden');
    addTopico.classList.add('div-box-input-single');
});
iconoPlusSemana.addEventListener('click', function() {
    limpiarFormulario('inputSemana');
    addSemana.classList.remove("div-box-input-single-hidden");
    addSemana.classList.add('div-box-input-single');
});
iconoPlusFaseSecuencia.addEventListener('click', function() {
    limpiarFormulario('inputFaseSecuencia');
    addFaseSecuencia.classList.remove("div-box-input-single-hidden");
    addFaseSecuencia.classList.add('div-box-input-single');
});
iconoPlusRecurso.addEventListener('click', function() {
    addRecurso.classList.remove("div-box-input-single-hidden");
    addRecurso.classList.add('div-box-input-single');
});

/* Guardar */

let btnProcesoFormacion = document.getElementById('btnProcesoFormacion');
let btnCancelarProcesoFormacion = document.getElementById('btnCancelarProcesoFormacion');
let btnEditProcesoFormacion = document.getElementById('btnEditProcesoFormacion');
let btnCancelarEditProcesoFormacion = document.getElementById('btnCancelarEditProcesoFormacion');
let btnOrientador = document.getElementById('btnOrientador');
let btnCancelarOrientador = document.getElementById('btnCancelarOrientador');
let btnCurso = document.getElementById('btnCurso');
let btnCancelarCurso = document.getElementById('btnCancelarCurso');
let btnPeriodo = document.getElementById('btnPeriodo');
let btnUnidad = document.getElementById('btnUnidad');
let btnSemana = document.getElementById('btnSemana');
let btnFaseSecuencia = document.getElementById('btnFaseSecuencia');
let btnRecurso = document.getElementById('btnRecurso');
let btnCancelarRecurso = document.getElementById('btnCancelarRecurso');
let btnGuardarPlaneacion = document.getElementById('btnGuardarPlaneacion');

btnCancelarProcesoFormacion.addEventListener('click', function() {
    addProcesoFormacion.classList.add("div-box-input-single-hidden");
    addProcesoFormacion.classList.remove('div-box-input-single');
});
btnCancelarEditProcesoFormacion.addEventListener('click', function() {
    editProcesoFormacion.classList.add("div-box-input-single-hidden");
    editProcesoFormacion.classList.remove('div-box-input-single');
});
btnCancelarOrientador.addEventListener('click', function() {
    addOrientador.classList.add("div-box-input-single-hidden");
    addOrientador.classList.remove('div-box-input-single');
});
btnCancelarCurso.addEventListener('click', function() {
    addCurso.classList.add("div-box-input-single-hidden");
    addCurso.classList.remove('div-box-input-single');
});

btnCancelarPeriodo.addEventListener('click', function() {
    addPeriodo.classList.add("div-box-input-single-hidden");
    addPeriodo.classList.remove('div-box-input-single');
});

btnCancelarUnidad.addEventListener('click', function() {
    addUnidad.classList.add("div-box-input-single-hidden");
    addUnidad.classList.remove('div-box-input-single');
});
btnCancelarTopico.addEventListener('click', function() {
    addTopico.classList.add("div-box-input-single-hidden");
    addTopico.classList.remove('div-box-input-single');
});

btnCancelarSemana.addEventListener('click', function() {
    addSemana.classList.add("div-box-input-single-hidden");
    addSemana.classList.remove('div-box-input-single');
});

btnCancelarFaseSecuencia.addEventListener('click', function() {
    addFaseSecuencia.classList.add("div-box-input-single-hidden");
    addFaseSecuencia.classList.remove('div-box-input-single');
});

btnCancelarRecurso.addEventListener('click', function() {
    addRecurso.classList.add("div-box-input-single-hidden");
    addRecurso.classList.remove('div-box-input-single');
});
/*
btnCancelarRecurso.addEventListener('click', function() {
    divBoxDisplayRecurso.classList.add("div-box-input-single-hidden");
    divBoxDisplayRecurso.classList.remove('div-box-input-single');
});*/

btnProcesoFormacion.addEventListener('click', function() {
    if (`${inputProcesoFormacion.value}`.trim() == "") {
        alert("No se puede guardar un proceso de formación vacío.");
    } 
    else {
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

        addProcesoFormacion.classList.add("div-box-input-single-hidden");
        addProcesoFormacion.classList.remove('div-box-input-single');

        let buscador = this.cursoSelect.find(element => element.id_curso == idCurso.value);
        //Si el curso es prejardín, jardín o transición.
        if (buscador.nombre_curso.substr(0,3) == "Pre" || buscador.nombre_curso.substr(0,3) == "Jar" ||
            buscador.nombre_curso.substr(0,3) == "Tra") {
            procesoFormacionPres();
        }
        //Si el curso es de primaria
        else {
            procesoFormacionPrim();
        }
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
        datos.append('metaSemana', document.getElementById('metaSemana').value);
        datos.append('desemp_Comprension', document.getElementById('inputDesempenyosComprension').value);

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
        alert("El nombre del orientador no puede quedar vacío");
    } else if (`${inputPrimerApellidoOrientador.value}`.trim() == "") {
        alert("El primer apellido del orientador no puede quedar vacío");
    } else {
        let nombresOrientador = document.getElementById('inputNombresOrientador').value;
        let primerApellido = document.getElementById('inputPrimerApellidoOrientador').value;
        let segundoApellido = document.getElementById('inputSegundoApellidoOrientador').value;

        let datos = new URLSearchParams();

        datos.append('nombres', nombresOrientador);
        datos.append('primerApellido', primerApellido);
        datos.append('segundoApellido', segundoApellido);

        fetch('/Guardar_Orientador',
        {
            method:'post',
            body:datos
        })
        .then(res => res.text())
        .then(data => {
            alert(data);
        });
        
        addOrientador.classList.add("div-box-input-single-hidden");
        addOrientador.classList.remove('div-box-input-single');
       orientadores();
    }
});

btnCurso.addEventListener('click', function() {
    if(`${inputCurso.value}`.trim() == "") {
        alert("No se puede guardar un curso vacío");
    } else {
       let nombre_curso = document.getElementById('inputCurso').value;
        let datos = new URLSearchParams();

       datos.append('dato', nombre_curso);

         fetch('/Guardar_Curso',
        {
            method:'post',
            body:datos
       })
        .then(res => res.text())
        .then(data => {
            alert(data);
        });
        addCurso.classList.add("div-box-input-single-hidden");
        addCurso.classList.remove('div-box-input-single');
        cursos();
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
        addPeriodo.classList.add("div-box-input-single-hidden");
        addPeriodo.classList.remove('div-box-input-single');
        periodos();
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
        addUnidad.classList.add("div-box-input-single-hidden");
        addUnidad.classList.remove('div-box-input-single');
        unidades();
    }
});

btnTopico.addEventListener('click', function() {
    if(`${inputTopico.value}`.trim() == "") {
        alert("No se puede guardar un tópico vacío");
    }
    else {
        let nombreTopico = document.getElementById('inputTopico').value;
        let idUnidad = document.getElementById('idUnidad').value;

        let datos = new URLSearchParams();

        datos.append('nombreTopico', nombreTopico);
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
        addTopico.classList.add("div-box-input-single-hidden");
        addTopico.classList.remove('div-box-input-single');
        topicos();
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
        addSemana.classList.add("div-box-input-single-hidden");
        addSemana.classList.remove('div-box-input-single');
        semanas();
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
        addFaseSecuencia.classList.add("div-box-input-single-hidden");
        addFaseSecuencia.classList.remove('div-box-input-single');
        fasesSecuencia();
    }
});

btnRecurso.addEventListener('click', function() {
    if(`${inputRecurso.value}`.trim() == "") {
        alert("No se puede guardar un recurso vacío");
    } else {
        let recurso = document.getElementById('inputRecurso').value;
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
        addRecurso.classList.add("div-box-input-single-hidden");
        addRecurso.classList.remove('div-box-input-single');
        recursos();
    }
});

/* Editar */

iconoEditProcesoFormacion = document.getElementById("iconoEditProcesoFormacion");

iconoEditProcesoFormacion.addEventListener('click', function() {
    let editProcesoFormacion = document.getElementById('editProcesoFormacion');
    editProcesoFormacion.classList.remove('div-box-input-single-hidden');
    editProcesoFormacion.classList.add('div-box-input-single');
});

/* btnOrientador.addEventListener('click', function() { 
    if (`${inputNombresOrientador.value}`.trim() == "") {
        alert("El dato Nombres no puede quedar vacío");
    }
    else {
        window.location.href = `agregarOrientador/${inputOrientador.value}`
        addOrientador.classList.add("div-box-display-orientador-hidden");
        addOrientador.classList.remove('div-box-display-orientador');
    }       
}); */
/*
btnOrientador.addEventListener('click', function() {
    window.location.href = `agregarOrientador/${inputOrientador.value}`
    divBoxDisplayOrientador.classList.add("div-box-display-orientador-hidden");
    divBoxDisplayOrientador.classList.remove('div-box-display-orientador');
}); */

/* function ocultarProcesoFormacion() {
    addProcesoFormacion.classList.remove("div-box-display-asignatura-hidden");
    addProcesoFormacion.classList.add('div-box-display-asignatura');
}
 */


procesoFormacionPres();
orientadores();
cursos();
periodos();
unidades();
topicos();
semanas();
fasesSecuencia();
recursos();

/* Listar cursos de preescolar */
function procesoFormacionPres() {

    let sintaxisHtml = '';

    fetch("/Listar_Procesos_Pres")
        .then(response => response.json())
        .then(function(data) {
            for (var i = 0; i < data.length; i++) {
                sintaxisHtml += `<option value='${data[i].id_proceso_formacion}'>${data[i].nombre_proceso}</option>`;
            }
            document.getElementById('idProcesoFormacion').innerHTML = sintaxisHtml;
        });
}

/* Listar cursos de Primaria */
function procesoFormacionPrim() {

    let sintaxisHtml = '';

    fetch("/Listar_Procesos_Prim")
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
                sintaxisHtml += `<option value='${data[i].id_orientador}'>${data[i].primer_apellido} ${data[i].segundo_apellido} ${data[i].nombres_orientador}  </option>`;
            }
            document.getElementById('idOrientador').innerHTML = sintaxisHtml;
        });
}
var cursoSelect = [];
function cursos() {
    let sintaxisHtml = '';

    fetch("/Listar_Cursos")
        .then(response => response.json())
        .then(function(data) {
            this.cursoSelect = data;
            for (var i = 0; i < data.length; i++) {
                sintaxisHtml += `<option value='${data[i].id_curso}'>${data[i].nombre_curso} </option>`;
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
            sintaxisHtml += `<option value='${data[i].id_periodo}'>${data[i].nombre_periodo}</option>`;
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
            sintaxisHtml += `<option value='${data[i].id_semana}'>${data[i].nombre_semana}</option>`
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
            sintaxisHtml += `<option value='${data[i].id_fase_secuencia}'>${data[i].nombre_fase}</option>`
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
            sintaxisHtml += `<option value='${data[i].id_recurso}'>${data[i].nombre_recurso}</option>`
        }
        document.getElementById('idRecurso').innerHTML = sintaxisHtml;
    });
}

/* function recursos() {
    let sintaxisHtml = '';

    fetch("/Listar_Recursos")
    .then(response => response.json())
    .then(function(data) {
        for(let i = 0; i < data.length; i++) {
            //sintaxisHtml += `<input type="checkbox" value='${data[i].id_recurso}'>${data[i].nombre_recurso}`
            sintaxisHtml += `<input type="checkbox">${data[i].nombre_recurso}<br>`
        }
        document.getElementById('addRecurso').innerHTML = sintaxisHtml;
    });
} */

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

function limpiarFormulario(idElemento) {
    document.getElementById(idElemento).value = "";
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

/* Detecta cuando se cambia el grado para cambiar las materias */

/* console.log(idCurso.value);
 */

idCurso.addEventListener('change', () => {
    //Obtener el nombre del curso seleccionado
    let buscador = this.cursoSelect.find(element => element.id_curso == idCurso.value);
    //Si el curso es prejardín, jardín o transición.
    if (buscador.nombre_curso.substr(0,3) == "Pre" || buscador.nombre_curso.substr(0,3) == "Jar" ||
        buscador.nombre_curso.substr(0,3) == "Tra") {
        procesoFormacionPres();
    }
    //Si el curso es de primaria
    else {
        procesoFormacionPrim();
    }
});