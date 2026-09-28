
/* ==================================================
   CARRUSEL DE PERSONAJES - HOME
   ================================================== */

const carrusel = document.querySelector("#carrusel-personajes");
const botonAnterior = document.querySelector("#carrusel-anterior");
const botonSiguiente = document.querySelector("#carrusel-siguiente");

let posicion = 0;

const personajesVisibles = 5;


/* ==================================================
   ESTADO INICIAL
   ================================================== */

/* Al principio ocultamos la flecha izquierda */

botonAnterior.style.display = "none";


/* ==================================================
   MOVER CARRUSEL
   ================================================== */

function moverCarrusel() {

    const anchoVentana =
        document.querySelector(".carrusel-ventana").offsetWidth;

    const anchoPersonaje =
        anchoVentana / personajesVisibles;

    carrusel.style.transform =
        `translateX(-${posicion * anchoPersonaje}px)`;
}


/* ==================================================
   FLECHA DERECHA
   ================================================== */

botonSiguiente.addEventListener("click", function () {

    /* Después del primer clic aparece la flecha izquierda */
    botonAnterior.style.display = "flex";

    const tarjetas = carrusel.querySelectorAll("article");

    const posicionMaxima =
        tarjetas.length - personajesVisibles;

    if (posicion < posicionMaxima) {
        posicion++;
    } else {
        posicion = 0;
    }

    moverCarrusel();

});


/* ==================================================
   FLECHA IZQUIERDA
   ================================================== */

botonAnterior.addEventListener("click", function () {

    const tarjetas = carrusel.querySelectorAll("article");

    const posicionMaxima =
        tarjetas.length - personajesVisibles;

    if (posicion > 0) {
        posicion--;
    } else {
        posicion = posicionMaxima;
    }

    moverCarrusel();

});


/* ==================================================
   AJUSTAR SI CAMBIA EL TAMAÑO DE LA PANTALLA
   ================================================== */

window.addEventListener("resize", moverCarrusel);