const express = require('express');

const rutaPlaneacionFormacion = express.Router();

const controller_PlaneacionFormacion = require('../controllers/controllerPlaneacionFormacion');

rutaPlaneacionFormacion.get("/", controller_PlaneacionFormacion.cargarIndex);
rutaPlaneacionFormacion.get("/planeacion", controller_PlaneacionFormacion.cargarIndex);
rutaPlaneacionFormacion.get("/consolidado", controller_PlaneacionFormacion.cargarConsolidado);
rutaPlaneacionFormacion.get("/Listar_Procesos", controller_PlaneacionFormacion.Listar_Procesos_Formacion);
rutaPlaneacionFormacion.get("/Listar_Orientadores", controller_PlaneacionFormacion.Listar_Orientadores);
rutaPlaneacionFormacion.get('/Listar_Tipos_Documento', controller_PlaneacionFormacion.Listar_Tipos_Documento);
rutaPlaneacionFormacion.get("/Listar_Cursos", controller_PlaneacionFormacion.Listar_Cursos);
rutaPlaneacionFormacion.get("/Listar_Periodos", controller_PlaneacionFormacion.Listar_Periodos);
rutaPlaneacionFormacion.get("/Listar_Unidades", controller_PlaneacionFormacion.Listar_Unidades);
rutaPlaneacionFormacion.get('/Listar_Topicos', controller_PlaneacionFormacion.Listar_Topicos);
rutaPlaneacionFormacion.get("/Listar_Semanas", controller_PlaneacionFormacion.Listar_Semanas);
rutaPlaneacionFormacion.get("/Listar_Fases_Secuencia", controller_PlaneacionFormacion.Listar_Fases_Secuencia);
rutaPlaneacionFormacion.get("/Listar_Recursos", controller_PlaneacionFormacion.Listar_Recursos);
rutaPlaneacionFormacion.post('/Guardar_Proceso_Formacion', controller_PlaneacionFormacion.Guardar_Proceso_Formacion);
rutaPlaneacionFormacion.post('/Guardar_Orientador', controller_PlaneacionFormacion.Guardar_Orientador);
rutaPlaneacionFormacion.post('/Guardar_Curso', controller_PlaneacionFormacion.Guardar_Curso);
rutaPlaneacionFormacion.post('/Guardar_Periodo', controller_PlaneacionFormacion.Guardar_Periodo);
rutaPlaneacionFormacion.post('/Guardar_Unidad', controller_PlaneacionFormacion.Guardar_Unidad);
rutaPlaneacionFormacion.post('/Guardar_Topico', controller_PlaneacionFormacion.Guardar_Topico);
rutaPlaneacionFormacion.post('/Guardar_Semana', controller_PlaneacionFormacion.Guardar_Semana);
rutaPlaneacionFormacion.post('/Guardar_Fase_Secuencia', controller_PlaneacionFormacion.Guardar_Fase_Secuencia);
rutaPlaneacionFormacion.post('/Guardar_Recurso', controller_PlaneacionFormacion.Guardar_Recurso);
rutaPlaneacionFormacion.post('/Guardar_Planeacion', controller_PlaneacionFormacion.Guardar_Planeacion);
rutaPlaneacionFormacion.post('/Editar_Planeacion', controller_PlaneacionFormacion.Editar_Proceso_Formacion);

module.exports = rutaPlaneacionFormacion;