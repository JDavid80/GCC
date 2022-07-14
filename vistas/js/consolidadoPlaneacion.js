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
                    tabla+=`<tr><td>${element.nombre_proceso}</td><td>${element.nombres_orientador}</td></tr>`
                });
                
               document.getElementById('tabla').innerHTML=tabla;
            });
          
       
    
}