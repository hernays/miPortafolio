

import './css/styles.css';
import './css/responsive.css';

import { proyectos , contactos , entrar} from './assets/js/components';
import { scroll , contactoEnviar } from './assets/js/binamon';
import { scrollCajas } from './assets/js/scrollCajas';


const logo = document.querySelector('#logo');

window.onscroll = () => {

    scrollCajas();
    scroll();
}

proyectos();
entrar();

contactos();
contactoEnviar();



logo.innerText = '<>';


