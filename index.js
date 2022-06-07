//import express from 'express';
//import ruta_Procesoformacion from './routes/routeProcesosFormacion';
const express = require('express');
//import ruta_Procesoformacion from './routes/routeProcesosFormacion.js';
const procesosFormacion = require('./routes/routeProcesosFormacion');
//import { conectar, agregarProcesoFormacion, agregarOrientador, obtenerProcesosFormacion, obtenerOrientadores } from './src/mysql_conector.js';
//const procesosFormacion = require('./routes/routeProcesoformacion');

let todos;
let orientadores;
const app = express();



//Configuración de PUG
app.set('views', './vistas');
app.set('view engine', 'pug');

//Configuración de archivos estáticos
app.use(express.static('./vistas'));
app.use(express.static('/src'));
app.use(express.static('./css'));
app.use(express.static('./img'));
app.use(express.static('./js'));

/* app.get('/', function(req, res) {
    res.send('Aplicación iniciada');
}); */



app.use(procesosFormacion);





app.listen('8000', function() {
    console.log('Aplicación iniciada en el puerto 8000');
});
/*
app.get('/', function(req, res) {
    todos = obtenerProcesosFormacion();
    //orientadores = obtenerOrientadores();
    console.log(todos);
    res.render('index', {contactos:todos});
    
    res.render('index', {contactos:todos, docentes:orientadores}); 
});
*/
//app.get('/', function(req, res) {
    /* json = async() => {
        try {
            //let response = await fetch('/');
            let data = await obtenerOrientadores();
            console.log(data);
        }
        catch(error) {

        }
    }
    console.log(data); */
    //conectar();
    
    /* orientadores = obtenerOrientadores();*/
    //console.log(todos);
    //res.render('index');
    /* setTimeout(() => { */
        /* res.render('index', {contactos:todos()}); */
        
  /*   }, 2000); */
    
    //res.render('index');
//});
/* console.log(respuesta.stack.length); */
/*
app.get('/agregar/:inputProcesoFormacion', function(req, res) {
    let inputProcesoFormacion = req.params.inputProcesoFormacion;
    agregarProcesoFormacion(inputProcesoFormacion);
    res.redirect('/');
});
app.get('/agregarOrientador/:inputOrientador', function(req, res) {
    let inputOrientador = req.params.inputOrientador;
    agregarOrientador(inputOrientador);
    res.redirect('/');
});
*/
/* app.get('/leer/:idProcesoFormacion', function(req, res) {
    leerProcesoFormacion(idProcesoFormacion);
    res.redirect('/');  
}); */
/* app.get('/leerOrientadores/:idOrientador', function(req, res) {
    leerOrientadores(idOrientador);
    res.redirect('/');
    console.log(idOrientador);
}); */

