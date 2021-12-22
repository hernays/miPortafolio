
const animado = document.querySelector('#proyectos-link');

export const scrollCajas = () => {

    
    let scroll = document.documentElement.scrollTop;
    let alturaCaja = animado.offsetTop;

    if(alturaCaja - 300 < scroll){
        animado.style.opacity = 1;
        animado.classList.add('animado');
    }


}
