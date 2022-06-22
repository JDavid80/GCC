
listarConsolidados();


function listarConsolidados() {

     let tabla='';
  
            fetch('/Listar_Orientadores',
            {
                method:'get',
               
            })
            .then(res => res.json())
            .then(data => {
                data.forEach(element => {
                    tabla+=`<tr><td>${element.nombres}<td><td>${element.primer_apellido}<td></td><tr>`
 
    
                });

               document.getElementById('tabla').innerHTML=tabla;
            });
          
       
    
}