import mysql from 'mysql';

let todos
let orientadores
/* Conexión */
const conector = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdgcc'
});

const conectar = () => {
    conector.connect(err => {
        if(err) {
            throw err
        }
        else {
            console.log('conectado!');
        }
    });
}

const agregarProcesoFormacion = (inputProcesoFormacion) => {
    const sql = `INSERT INTO tb_proceso_formacion (nombre_proceso) VALUES ("${inputProcesoFormacion}")`
    conector.query(sql, function(err, result, filed) {
        if(err) {
            throw err
        }
        else {
            console.log(result);
        }
    });
}

const agregarOrientador = (inputOrientador) => {
    const sql = `INSERT INTO tb_orientador (nombres) VALUES ("${inputOrientador}")`
    conector.query(sql, function(err, result, filed) {
        if(err) {
            throw err
        }
        else {
            console.log(result);
        }
    });
}
const obtenerProcesosFormacion = () => {
    const sql = 'SELECT * FROM tb_proceso_formacion'
    conector.query(sql, function(err, result, field) {
        todos = result;
    });
    return todos;
}
const obtenerOrientadores = () => {
    const sql = 'SELECT * FROM tb_orientador'
    conector.query(sql, function(err, result, field) {
        orientadores = result;
    });
    return orientadores;
}

export { conectar, agregarProcesoFormacion, agregarOrientador, obtenerProcesosFormacion, obtenerOrientadores}