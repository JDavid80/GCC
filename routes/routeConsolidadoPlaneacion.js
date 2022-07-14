const express = require('express');

const rutaConsolidadoPlaneacion = express.Router();

const controller_ConsolidadoPlaneacionFormacion = require('../controllers/controllerConsolidadoPlaneacionFormacion');

rutaConsolidadoPlaneacion.get('/Listar_Planeaciones', controller_ConsolidadoPlaneacionFormacion.Listar_Planeaciones);

module.exports = rutaConsolidadoPlaneacion;