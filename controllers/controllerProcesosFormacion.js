//import conexionBD from '../database/conexion.js';
//import { append } from 'express/lib/response';
//import conexionBD from '../database/conexion';
const { request } = require('express');
const conexion=require('../database/conexion');

/* app.use(conexion); */

const controlador={}

controlador.Listar_Proceso_Formacion=(req,res)=>{
    const sql = 'SELECT * FROM tb_proceso_formacion'
    conexion.query(sql, function(err, result, field) {
        res.render('index',{contactos:result});
    });
}

controlador.Listar_Orientadores = (req, res) => {
    const sql = 'SELECT * FROM tb_orientador'
    conexion.query(sql, function(err, result, field) {
        res.render('index', {orientadores:result});
    });
}

controlador.Guardar_Proceso_Formacion = (req, res) => {
     let inputProcesoFormacion = req.params.dato;
 
    const sql = `INSERT INTO tb_proceso_formacion (nombre_proceso) VALUES ("${inputProcesoFormacion}")`
   
   
     conexion.query(sql, function(err, result, filed) {
        if(err) {
            throw err
        }
        else {
            res.redirect('/');
        }
    }); 
}

module.exports=controlador;