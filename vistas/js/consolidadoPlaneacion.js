
listarPlaneaciones();


function listarPlaneaciones() {

     let tabla='';
  
            fetch('/Listar_Planeaciones',
            {
                method:'get',
               
            })
            .then(res => res.json())
            .then(data => {
                data.forEach(element => {
                    tabla+=`<tr><td>${element.id_planeacion}<td><td>${element.primer_apellido}<td></td><tr>`
 
    
                });

               document.getElementById('tabla').innerHTML=tabla;
            });
          
       
    
}