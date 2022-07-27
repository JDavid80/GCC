
const conexion = require('../database/conexion');
const controlador={}




controlador.Listar_Planeaciones = (req, res) => {
    /* const sql = `SELECT nombre_proceso, nombres_orientador, primer_apellido, nombre 
    FROM tb_planeaciones_formacion
    INNER JOIN tb_procesos_formacion ON id_proceso_formacion = proceso_formacion 
    INNER JOIN tb_orientadores ON id_orientador = orientador 
    INNER JOIN tb_periodos ON id_periodo = periodo;` */
    const sql = `SELECT nombre_curso, nombre_proceso, nombres_orientador, primer_apellido,
                 nombre_periodo, meta_comprension_micro FROM tb_planeaciones_formacion
                INNER JOIN tb_cursos ON id_curso = curso
                INNER JOIN tb_procesos_formacion ON id_proceso_formacion = proceso_formacion
                INNER JOIN tb_orientadores ON id_orientador = orientador
                INNER JOIN tb_periodos ON id_periodo = periodo ORDER BY curso`;
    conexion.query(sql, (err, data)=> {
        console.log(data);
        res.json(data);
    });
}

module.exports=controlador;