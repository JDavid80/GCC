listarPlaneaciones();

function listarPlaneaciones() {

     let tabla='';
  
            fetch('/Listar_Planeaciones',
            {
                method:'get' 
            })
            .then(res => res.json())
            .then(data => {
                
                data.forEach(element => {
                    tabla += `<tr>
                                <td>${element.nombre_curso}</td>
                                <td>${element.nombre_proceso}</td>
                                <td>${element.nombres_orientador} ${element.primer_apellido}</td>
                                <td>${element.nombre_periodo}</td>
                                <td>${element.meta_comprension_micro}</td>
                                <td><div class="div-iconos"><i id="pruebaDiv" class='iconos fa-regular fa-file-lines'></i></div></td>
                                <td><div class="div-iconos"><i class='iconos fa-solid fa-print'></i></div></td>
                    </tr>`
                    
                });
                
               document.getElementById('tabla').innerHTML=tabla;
            });
          
    let pruebaDiv = document.getElementById("PruebaDiv");

    pruebaDiv.addEventListener("click", function() {
        alert("Holis");
    });
       
    
}