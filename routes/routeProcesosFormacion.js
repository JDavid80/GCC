const express = require('express');
//import express from 'express';
//import controlador from '../controllers/controllerProcesosFormacion.js';
//import cont_Proceso_Formacion from '../controllers/controllerProcesosFormacion';

const ruta_Procesoformacion = express.Router();
//import controlador from '../controllers/controllerProcesosFormacion';
const cont_Proceso_Formacion = require('../controllers/controllerProcesosFormacion');

//ruta_Procesoformacion.get("/",cont_Proceso_Formacion.Listar_Proceso_Formacion);
//ruta_Procesoformacion.get("/",cont_Proceso_Formacion.Listar_Proceso_Formacion, cont_Proceso_Formacion.Listar_Orientadores);
ruta_Procesoformacion.get("/", cont_Proceso_Formacion.cargarIndex);
ruta_Procesoformacion.get("/Listar_Procesos", cont_Proceso_Formacion.Listar_Proceso_Formacion);
ruta_Procesoformacion.get("/Listar_Orientadores", cont_Proceso_Formacion.Listar_Orientadores);
ruta_Procesoformacion.get('/agregar/:dato', cont_Proceso_Formacion.Guardar_Proceso_Formacion);

module.exports = ruta_Procesoformacion;