const project = document.querySelector('#proyectos-link');
const contactHernays = document.querySelector('#contacto-link');

export const proyectos = () => {

         
    const proyecto = `

    <section class="section proyectos">

    <h1>PROYECTOS</h1>

    <div id="cards-content">

        <div class="cards">
             <h4 class="hp">MAS58</h4>
             <img src="assets/img/logo+58.jpg">
             <p> Aplicación Web desarrollada con Angular desde el lado del Frontend
                Nodejs, express y mysql desde el backend, implementación de JWT 
                para inicios de sesión.
               </p>
               <p>
                Gestor Administrativo de manera que el usuario admin controle 
                las funciones de la aplicación como modificar eliminar registrar
                productos y ordenes. 

                <p>
                Registro de usuarios , implementación de pago flow.
            </p>

            <button class="entrarProyectos">ENTRAR</button>
        </div>

        <div class="cards">
            <h4 class="hp" >Scs-GroupSpa</h4>
            <img src="assets/img/scs.png">

            <p> 
                En desarrollo ...
               </p>
               <p>
                //

                <p>
               //
            </p>
         

            <button class="entrarProyectos">PRONTO</button>
       </div>
        
    </div>

  
</section>
    
    `;


    project.innerHTML= proyecto;

    return proyecto;


}



export const contactos = () => {


    const contacto = `
    <section id="formContacto">

            

   
    <h1>Contacto</h1>

    <p>Actualmente estoy buscando nuevas oportunidades. Ya sea que tenga una 
        pregunta o simplemente quiera saludar, ¡haré todo lo posible para responderle!</p>

    <div>

   
       <img src="assets/img/contactM.png"  width="35%" height="400px">

      
        <form id="formulario">

            <label for="nombre">Nombre</label><br>
            <input type="text" id="nombre" placeholder="Luis Gonzalez"/>
            <br>

            <label for="correo">Correo</label><br>
            <input type="email"  id="correo" placeholder="email@gmail.com"/>
            <br>

            <label for="mensaje">Mensaje</label><br>
            <textarea id="mensaje"></textarea>
            <br>

            <input type="submit" value="ENVIAR" />
        </form>
  

    </div>
</section>`;


  contactHernays.innerHTML = contacto;

  return contacto;
}






export const entrar = () => {

    const mas = document.querySelector('#mas');

    if(mas){

    mas.addEventListener('click', () => {

        open('https://appmas58.herokuapp.com/');
       
    });

    }

    

}

