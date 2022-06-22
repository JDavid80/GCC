const conexion = require('../database/conexion');

const controlador = {}

controlador.cargarIndex = (req, res) => {
    res.render('index');
}

controlador.cargarConsolidado = (req, res) => {
    res.render('consolidado');
}


controlador.Listar_Procesos_Formacion = (req, res) => {
    const sql = 'SELECT * FROM tb_procesos_formacion'
    conexion.query(sql, function(err, data) {
        res.json(data);
    });
}

controlador.Listar_Orientadores = (req, res) => {
    const sql = 'SELECT * FROM tb_orientadores'
    conexion.query(sql, function(err, data) {
        res.json(data);
    });
}

controlador.Listar_Cursos = (req, res) => {
    const sql = 'SELECT * FROM tb_cursos'
    conexion.query(sql, function(err, data) {
        res.json(data);
    });
}

controlador.Listar_Periodos = (req, res) => {
    const sql = 'SELECT * FROM tb_periodos';
    conexion.query(sql, function(err, data) {
        res.json(data);
    });
}

controlador.Listar_Unidades = (req, res) => {
    const sql = 'SELECT * FROM tb_unidades';
    conexion.query(sql, function(err, data) {
        res.json(data);
    });
}

controlador.Listar_Semanas = (req, res) => {
    const sql = 'SELECT * FROM tb_semanas';
    conexion.query(sql, function(err, data) {
        res.json(data);
    });
}

controlador.Listar_Fases_Secuencia = (req, res) => {
    const sql = 'SELECT * FROM tb_fases_secuencia';
    conexion.query(sql, function(err, data) {
        res.json(data);
    });
}

controlador.Listar_Recursos = (req, res) => {
    const sql = 'SELECT * FROM tb_recursos';
    conexion.query(sql, function(err, data) {
        res.json(data);
    });
}

controlador.Listar_Planeaciones = (req, res) => {
    const sql = 'SELECT * FROM tb_planeaciones_formacion'
    conexion.query(sql, function(err, data) {
        res.json(data);
    });
}

controlador.Guardar_Proceso_Formacion = (req, res) => {
    let inputProcesoFormacion = req.body.dato;
    const sql = `INSERT INTO tb_procesos_formacion (nombre_proceso) VALUES ("${inputProcesoFormacion}")`
    conexion.query(sql, function(err, result, filed) {
        if (err) {
            res.send('El proceso no se pudo registrar con éxito. Comuniquese con el administrador del sistema');
        } else {
            res.send('Proceso de formación registrado con exito!');
        }
    });   
}

controlador.Guardar_Orientador = (req, res) => {

    let {nombres,primerApellido}=req.body;


   try{

    const sql = `INSERT INTO tb_orientadores (nombres, primer_apellido) VALUES ("${nombres}","${primerApellido}"  )`
    console.log(sql);
    conexion.query(sql, function(err, result, filed) {
     if(!err ){
        res.send('El orientador se registró con éxito.');
     } else {
         console.log(err);
     }
           
    });
   } catch(error) {
       console.log(error);
   }

    
}

controlador.Guardar_Curso = (req, res) => {
    let inputCurso = req.body.dato;
    const sql = `INSERT INTO tb_cursos (nombre) VALUES ("${inputCurso}")`
    conexion.query(sql, function(err, result, filed) {
        if(err) {
            res.send('El curso no se pudo registrar con éxito. Comuniquese con el administrador del sistema');
        }
        else {
            res.send("Curso registrado con éxito");
        }
    });
}

controlador.Guardar_Periodo = (req, res) => {
    let inputPeriodo = req.body.dato;
    const sql = `INSERT INTO tb_periodos (nombre) VALUES ("${inputPeriodo}")`
    conexion.query(sql, function(err, result, filed) {
        if(err) {
            res.send('El periodo no se pudo registrar con éxito. Comuniquese con el administrador del sistema');
        }
        else {
            res.send("Periodo registrado con éxito");
        }
    });
}

controlador.Guardar_Unidad = (req, res) => {
    let inputUnidad = req.body.dato;
    const sql = `INSERT INTO tb_unidades (nombre) VALUES ("${inputUnidad}")`
    conexion.query(sql, function(err, result, filed) {
        if(err) {
        res.send('La unidad no se pudo registrar con éxito. Comuniquese con el administrador del sistema');
        }
        else {
            res.send("Unidad registrada con éxito");
        }
    });
}

controlador.Guardar_Semana = (req, res) => {
    let inputSemana = req.body.dato;
    const sql = `INSERT INTO tb_semanas (nombre) VALUES ("${inputSemana}")`
    conexion.query(sql, function(err, result, filed) {
        if(err) {
            res.send('La semana no se pudo registrar con éxito. Comuniquese con el administrador del sistema');
        }
        else {
            res.send("Semana registrada con éxito");
        }
    });
}

controlador.Guardar_Fase_Secuencia = (req, res) => {
    let inputFaseSecuencia = req.body.dato;
    const sql = `INSERT INTO tb_fases_secuencia (nombre) VALUES ("${inputFaseSecuencia}")`
    conexion.query(sql, function(err, data, filed) {
        if(err) {
            res.send('La fase no se pudo registrar con éxito. Comuniquese con el administrador del sistema');
        }
        else {
            res.send("Fase registrada con éxito");
        }
    });
}

controlador.Guardar_Recurso = (req, res) => {
    let inputRecurso = req.body.dato;
    const sql = `INSERT INTO tb_recursos (nombre) VALUES ("${inputRecurso}")`;
    conexion.query(sql, function(err, data, filed) {
        if(err) {
            res.send('El recurso no se pudo registrar con éxito. Comuniquese con el administrador del sistema');
        }
        else {
            res.send("Recurso registrado con éxito");
        }
    });
}

controlador.Guardar_Planeacion = (req, res) => {
    let {orientador, desempenyos_comprension} = req.body;

    console.log(orientador);
    try{
        /* const sql = `INSERT INTO tb_planeaciones_formacion (orientador, desempenyos_comprension) VALUES ("${orientador}", "${desempenyos_comprension}")`; */
        const sql = `INSERT INTO tb_planeaciones_formacion (orientador) VALUES ("${orientador}")`;
        conexion.query(sql, function(err, result, filed) {
            if(!err) {
                res.send("La planeación se registró con éxito");
            }
            else {
                console.log(err);
            }
        });
    }
    catch(err) {
        console.log(err);
    }
}

module.exports = controlador;