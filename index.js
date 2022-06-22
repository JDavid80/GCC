const express = require('express');
const bodyparser= require('body-parser');
const planeacionFormacion = require('./routes/routePlaneacionFormacion');

const app = express();

//Configuración de PUG
app.set('views', './vistas');
app.set('view engine', 'pug');

// se configura para recibir parametros de formulario
 app.use(bodyparser.json());
 app.use(bodyparser.urlencoded({extended:false}));

//Configuración de archivos estáticos
app.use(express.static('./vistas'));
app.use(express.static('/src'));
app.use(express.static('./css'));
app.use(express.static('./img'));
app.use(express.static('./js'));

app.use(planeacionFormacion);

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

