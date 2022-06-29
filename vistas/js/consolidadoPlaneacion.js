/* 
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
                    tabla+=`<tr><td>${element.nombres}</td><td>${element.nombre}</td></tr>`
 
    
                });
                

               document.getElementById('tabla').innerHTML=tabla;
            });
          
       
    
} */