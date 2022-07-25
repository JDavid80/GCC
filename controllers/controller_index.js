
const conexion = require('../database/conexion');

const controlador={}

controlador.cargarIndex = (req, res) => {
    res.render('index');
}