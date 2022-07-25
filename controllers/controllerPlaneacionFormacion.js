const conexion = require('../database/conexion');

const controlador = {}

let prueba = 0;

controlador.cargarIndex = (req, res) => {
    res.render('index');
}

controlador.cargarConsolidado = (req, res) => {
    res.render('consolidadoPlaneacion');
}

controlador.Listar_Procesos_Formacion = (req, res) => {
    const sql = 'SELECT * FROM tb_procesos_formacion ORDER BY nombre_proceso'
    conexion.query(sql, function(err, data) {
        res.json(data);
    });
}

controlador.Listar_Orientadores = (req, res) => {
    const sql = 'SELECT * FROM tb_orientadores ORDER BY primer_apellido'
    conexion.query(sql, function(err, data) {
        res.json(data);
    });
}

controlador.Listar_Tipos_Documento = (req, res) => {
    const sql = 'SELECT * FROM tb_tipos_documento';
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

controlador.Listar_Topicos = (req, res) => {
    let idUnidad = req.body.idUnidad;

    const sql = 'SELECT * FROM tb_topicos';
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

    let {nombres,primerApellido, segundoApellido}=req.body;

   try{

    const sql = `INSERT INTO tb_orientadores (nombres_orientador, primer_apellido, segundo_apellido)
                 VALUES ("${nombres}","${primerApellido}", "${segundoApellido}")`
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
    const sql = `INSERT INTO tb_cursos (nombre_curso) VALUES ("${inputCurso}")`
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
    const sql = `INSERT INTO tb_periodos (nombre_periodo) VALUES ("${inputPeriodo}")`
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

controlador.Guardar_Topico = (req, res) => {
    let nombreTopico = req.body.nombreTopico;
    let idUnidad = req.body.idUnidad;

    const sql = `INSERT INTO tb_topicos (nombre_topico) VALUES ("${nombreTopico}")`
    conexion.query(sql, function(err, result, filed) {
        if(err) {
            res.send('El Tópico no se pudo registrar con éxito. Comuniquese con el administrador del sistema');
        }
        else {
            res.send("Tópico registrado con éxito");
        }
    });
}

controlador.Guardar_Semana = (req, res) => {
    let inputSemana = req.body.dato;
    const sql = `INSERT INTO tb_semanas (nombre_semana) VALUES ("${inputSemana}")`
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
    let idProcesoFormacion = req.body.idProcesoFormacion;
    let idOrientador = req.body.idOrientador;
    let idCurso = req.body.idCurso;
    let idPeriodo = req.body.idPeriodo;
    let idUnidad = req.body.idUnidad;
    let metaSemana = req.body.metaSemana;
    let desemp_comprension = req.body.desemp_Comprension;

    try{
        const sql = `INSERT INTO tb_planeaciones_formacion (proceso_formacion, orientador, curso, 
                    periodo, unidad, meta_comprension_micro, desempenyos_comprension) 
                    VALUES 
                    ('${idProcesoFormacion}', '${idOrientador}', '${idCurso}', '${idPeriodo}', 
                    '${idUnidad}', '${metaSemana}', '${desemp_comprension}')`;
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

controlador.Editar_Proceso_Formacion = (req, res) => {
    let idProcesoFormacion = req.body.idProcesoFormacion;
    let inputProcesoFormacion = req.body.inputProcesoFormacion;

    const sql = `UPDATE tb_procesos_formacion SET nombre_proceso = "${inputProcesoFormacion}" WHERE id_proceso_formacion = "${idProcesoFormacion}"`;
    conexion.query(sql, function(err, result, filed) {
        if (err) {
            res.send('El proceso no se pudo actualizado con éxito. Comuniquese con el administrador del sistema');
        } else {
            res.send('Proceso de formación actualizado con exito!');
        }
    });   
}

module.exports = controlador;