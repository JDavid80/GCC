//import conexionBD from '../database/conexion.js';
//import { append } from 'express/lib/response';
//import conexionBD from '../database/conexion';
const { request } = require('express');
const conexion = require('../database/conexion');
let orientadores;

/* app.use(conexion); */

const controlador = {}


controlador.cargarIndex = (req, res) => {
    res.render('index');

}




controlador.Listar_Proceso_Formacion = (req, res) => {
    const sql = 'SELECT * FROM tb_proceso_formacion'
    conexion.query(sql, function(err, data, field) {
        //procesosFormacion = data;
        //  res.render('index', { procesosFormacion: data });
        res.json(data);

    });
}

controlador.Listar_Orientadores = (req, res) => {
    const sql = 'SELECT * FROM tb_orientador'
    conexion.query(sql, function(err, data, field) {
        res.json(data);
        /* res.render('index', {procesosFormacion, orientadores:result}); */
    });
}

controlador.Guardar_Proceso_Formacion = (req, res) => {
    let inputProcesoFormacion = req.params.dato;

    const sql = `INSERT INTO tb_proceso_formacion (nombre_proceso) VALUES ("${inputProcesoFormacion}")`


    conexion.query(sql, function(err, result, filed) {
        if (err) {
            throw err
        } else {
            res.redirect('/');
        }
    });
}

module.exports = controlador;