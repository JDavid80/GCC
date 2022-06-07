const mysql = require('mysql');
//import mysql from 'mysql';

/* Conexión */
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdgcc'
});

conexion.connect(err => {
    if(err) {
        throw err
    }
    else {
        console.log('conectado!');
    }
});

module.exports=conexion;