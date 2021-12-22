const Swal = require('sweetalert2');


export const scroll = () =>{

        let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    
        if(scroll > 380){
            
          let header=  document.getElementById('header');
    
            header.classList.add('scrollHeader');
    
        }else{
    
                header.classList.remove('scrollHeader');
    
        }
    
}


export const contactoEnviar = () => {

const formulario = document.getElementById('formulario');

    if(formulario){

        formulario.addEventListener('submit', (e) => {
        
            e.preventDefault();
            
            Swal.fire('Cargando.....');

            let name = document.getElementById('nombre');
            let email = document.getElementById('correo');
            let message = document.getElementById('mensaje');
        
            let nombre = name.value;
            let correo = email.value;
            let mensaje = message.value;

            fetch('https://mas58.herokuapp.com/correo/contact', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                method:'POST',
                body: JSON.stringify({nombre,correo,mensaje})
        })
        .then(res =>  {
        
            if(res){
                
                Swal.fire('Mensaje Enviado');
                name.value = '';
                email.value = '';
                message.value = '';
            }
        }
        
        )
        .catch(res => {
            if(res){
                Swal.fire('Ocurrio un error Siga Intentando');
            }
        });
        });
        
        }

}




/* correo */ 
/*
import { mas58 } from '../../index.js';
   
mas58.addEventListener('click', () => {

    open('https://appmas58.herokuapp.com/');
   
});


*/












