listarPlaneaciones();

function listarPlaneaciones() {

     let tabla='';
  
            fetch('/Listar_Planeaciones',
            {
                method:'get' 
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                data.forEach(element => {
                    /* tabla+=`<tr><td>${element.nombre_proceso}</td>
                    <td>${element.nombres_orientador} ${element.primer_apellido}</td>
                    </tr>` */
                    tabla += `<tr>
                                <td>${element.nombre_curso}</td>
                                <td>${element.nombre_proceso}</td>
                                <td>${element.nombres_orientador} ${element.primer_apellido}</td>
                                <td>${element.nombre_periodo}</td>
                                <td>${element.meta_comprension_micro}</td>
                    </tr>`
                });
                
               document.getElementById('tabla').innerHTML=tabla;
            });
          
       
    
}