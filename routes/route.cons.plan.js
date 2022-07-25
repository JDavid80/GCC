const express = require('express');

const rutaConsolidadoPlaneacion = express.Router();

const cont_cons_plan_form = require('../controllers/controller.cons.Plan');

rutaConsolidadoPlaneacion.get('/Listar_Planeaciones', cont_cons_plan_form.Listar_Planeaciones);

module.exports = rutaConsolidadoPlaneacion;