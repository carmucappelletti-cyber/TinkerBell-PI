/* ==================================================
   ESTACIONES DE PIXIE HOLLOW
   ================================================== */


/* -------------------- DATOS DE LAS ESTACIONES -------------------- */

const estaciones = [

    {
        nombre: "PRIMAVERA",
        arbol: "img/arbol primavera.png",
        fondo: "img/fondo primavera.png",
        color: "#b25669",
        descripcion:
            "Las hadas despiertan la naturaleza, haciendo florecer las plantas y llenando Pixie Hollow de nuevos colores."
    },

    {
        nombre: "VERANO",
        arbol: "img/arbol verano.png",
        fondo: "img/fondo verano.png",
        color: "#e8b646",
        descripcion:
            "Las hadas llenan los días de luz y ayudan a mantener la naturaleza fresca, colorida y llena de vida."
    },

    {
        nombre: "OTOÑO",
        arbol: "img/arbol otoño.png",
        fondo: "img/fondo otoño.png",
        color: "#9f5f2d",
        descripcion:
            "Las hadas transforman los colores de las hojas y preparan la naturaleza para la llegada de los días más fríos."
    },

    {
        nombre: "INVIERNO",
        arbol: "img/arbol invierno.png",
        fondo: "img/fondo invierno.png",
        color: "#545454",
        descripcion:
            "Las hadas cubren la naturaleza de escarcha y nieve, transformando Pixie Hollow con la magia del invierno."
    }

];


/* -------------------- ESTACIÓN ACTUAL -------------------- */

let estacionActual = 0;


/* -------------------- ELEMENTOS DE LA PÁGINA -------------------- */

const pagina = document.querySelector(".pagina-estaciones");

const fondo = document.querySelector(".fondo-estaciones");

const arbol = document.querySelector("#arbol-estacion");

const nombre = document.querySelector("#nombre-estacion");

const descripcion = document.querySelector("#descripcion-estacion");

const titulo = document.querySelector(".titulo-estaciones h1");

const flechaIzquierda = document.querySelector(
    ".flecha-estacion-izquierda"
);

const flechaDerecha = document.querySelector(
    ".flecha-estacion-derecha"
);


/* ==================================================
   MOSTRAR ESTACIÓN
   ================================================== */

function mostrarEstacion() {

    const estacion = estaciones[estacionActual];


    /* CAMBIAR ÁRBOL */

    arbol.src = estacion.arbol;

    arbol.alt =
        "Árbol de " + estacion.nombre.toLowerCase();


    /* CAMBIAR FONDO */

    fondo.style.backgroundImage =
        `url("${estacion.fondo}")`;


    /* CAMBIAR NOMBRE */

    nombre.textContent = estacion.nombre;


    /* CAMBIAR DESCRIPCIÓN */

    descripcion.textContent = estacion.descripcion;


    /* CAMBIAR COLORES */

    titulo.style.color = estacion.color;

    nombre.style.color = estacion.color;


    /* CAMBIAR CLASE DE LA ESTACIÓN */

    pagina.classList.remove(
        "estacion-primavera",
        "estacion-verano",
        "estacion-otono",
        "estacion-invierno"
    );


    pagina.classList.add(
        "estacion-" +
        estacion.nombre
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
    );

}


/* ==================================================
   CAMBIAR DE ESTACIÓN CON TRANSICIÓN
   ================================================== */

function cambiarEstacion(direccion) {

    /* EMPIEZA A DESAPARECER */

    pagina.classList.add("cambiando-estacion");


    /* ESPERAMOS A QUE TERMINE EL DESVANECIMIENTO */

    setTimeout(function () {


        /* CAMBIAR POSICIÓN */

        estacionActual += direccion;


        /* SI LLEGA AL FINAL, VUELVE A PRIMAVERA */

        if (estacionActual >= estaciones.length) {
            estacionActual = 0;
        }


        /* SI VA HACIA ATRÁS DESDE PRIMAVERA,
           PASA A INVIERNO */

        if (estacionActual < 0) {
            estacionActual = estaciones.length - 1;
        }


        /* MOSTRAR LA NUEVA ESTACIÓN */

        mostrarEstacion();


        /* HACER APARECER NUEVAMENTE EL CONTENIDO */

        pagina.classList.remove("cambiando-estacion");


    }, 200);

}


/* ==================================================
   FLECHA DERECHA
   ================================================== */

flechaDerecha.addEventListener("click", function () {

    cambiarEstacion(1);

});


/* ==================================================
   FLECHA IZQUIERDA
   ================================================== */

flechaIzquierda.addEventListener("click", function () {

    cambiarEstacion(-1);

});