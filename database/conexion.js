const mysql = require('mysql');

/* Conexión a la BD*/
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdgcc'
});

/* Prueba de Conexión */
conexion.connect(err => {
    if(err) {
        throw err
    }
    else {
        console.log('conectado!');
    }
});

module.exports=conexion;