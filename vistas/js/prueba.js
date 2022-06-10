//const { Listar_Orientadores } = require("../../controllers/controllerProcesosFormacion");

alert("Holis");

procesoFormacion();
orientadores();

function procesoFormacion() {

    let html = '';

    fetch("/Listar_Procesos")
        .then(response => response.json())
        .then(function(data) {
            for (var i = 0; i < data.length; i++) {
                html += `<option value='${data[i].id_numero_proceso}'>${data[i].nombre_proceso}</option>`;
            }
            document.getElementById('idProcesoFormacion').innerHTML = html;
        });
}

function orientadores() {
    let html = '';

    fetch("/Listar_Orientadores")
        .then(response => response.json())
        .then(function(data) {
            for (var i = 0; i < data.length; i++) {
                html += `<option value='${data[i].id_orientador}'>${data[i].nombres}</option>`;
            }
            document.getElementById('idOrientador').innerHTML = html;
        });
}