/* ==================================================
   GALERÍA DE PIXIE HOLLOW
   ================================================== */


/* ==================================================
   LISTA DE FOTOGRAFÍAS
   ================================================== */

const fotosGaleria = [

    "img/foto vertical 1.JPG",
    "img/foto horizontal 1.JPG",

    "img/foto vertical 2.JPG",
    "img/foto horizontal 2.JPG",

    "img/foto vertical 3.JPG",
    "img/foto horizontal 3.JPG",

    "img/foto vertical 4.JPG",
    "img/foto horizontal 4.JPG",

    "img/foto vertical 5.JPG",
    "img/foto horizontal 5.JPG",

    "img/foto vertical 6.JPG",
    "img/foto horizontal 6.JPG"

];


/* ==================================================
   ELEMENTOS
   ================================================== */

const galeriaCollage =
    document.querySelector("#galeria-collage");

const visorGaleria =
    document.querySelector("#visor-galeria");

const imagenVisor =
    document.querySelector("#imagen-visor");

const cerrarVisor =
    document.querySelector("#cerrar-visor");

const visorAnterior =
    document.querySelector("#visor-anterior");

const visorSiguiente =
    document.querySelector("#visor-siguiente");


/* ==================================================
   VARIABLES
   ================================================== */

let indiceVisor = 0;

let cambiandoImagen = false;


/* ==================================================
   CREAR GALERÍA
   ================================================== */

function crearGaleriaPrincipal() {

    fotosGaleria.forEach(function (rutaFoto, indice) {

        const contenedor =
            document.createElement("div");

        contenedor.classList.add("foto-galeria");


        const imagen =
            document.createElement("img");

        imagen.src = rutaFoto;

        imagen.alt =
            "Momento de Pixie Hollow " + (indice + 1);

        imagen.loading = "lazy";


        contenedor.appendChild(imagen);

        galeriaCollage.appendChild(contenedor);


        /* ABRIR FOTO */

        contenedor.addEventListener(
            "click",
            function () {

                abrirVisor(indice);

            }
        );

    });

}


/* ==================================================
   ABRIR VISOR
   ================================================== */

function abrirVisor(indice) {

    indiceVisor = indice;

    imagenVisor.src =
        fotosGaleria[indiceVisor];


    /*
       Reiniciamos la animación para que ocurra
       cada vez que el usuario abre una fotografía.
    */

    imagenVisor.classList.remove(
        "imagen-visor-aparece"
    );

    void imagenVisor.offsetWidth;

    imagenVisor.classList.add(
        "imagen-visor-aparece"
    );


    visorGaleria.classList.add("activo");

    visorGaleria.setAttribute(
        "aria-hidden",
        "false"
    );

}


/* ==================================================
   CERRAR VISOR
   ================================================== */

function cerrarVisorGaleria() {

    visorGaleria.classList.remove("activo");

    visorGaleria.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* ==================================================
   CAMBIAR IMAGEN
   ================================================== */

function cambiarImagen(nuevoIndice) {

    if (cambiandoImagen) {
        return;
    }


    cambiandoImagen = true;


    /*
       Primero la imagen desaparece suavemente.
    */

    imagenVisor.classList.add(
        "imagen-visor-desaparece"
    );


    setTimeout(function () {


        indiceVisor = nuevoIndice;


        /*
           Cambiamos la fotografía cuando
           la anterior ya desapareció.
        */

        imagenVisor.src =
            fotosGaleria[indiceVisor];


        imagenVisor.classList.remove(
            "imagen-visor-desaparece"
        );


        imagenVisor.classList.add(
            "imagen-visor-nueva"
        );


        /*
           Permitimos que el navegador aplique
           el estado inicial.
        */

        requestAnimationFrame(function () {

            requestAnimationFrame(function () {

                imagenVisor.classList.remove(
                    "imagen-visor-nueva"
                );

            });

        });


        setTimeout(function () {

            cambiandoImagen = false;

        }, 300);


    }, 220);

}


/* ==================================================
   FOTO SIGUIENTE
   ================================================== */

function siguienteVisor() {

    let nuevoIndice =
        indiceVisor + 1;


    if (
        nuevoIndice >=
        fotosGaleria.length
    ) {

        nuevoIndice = 0;

    }


    cambiarImagen(nuevoIndice);

}


/* ==================================================
   FOTO ANTERIOR
   ================================================== */

function anteriorVisor() {

    let nuevoIndice =
        indiceVisor - 1;


    if (nuevoIndice < 0) {

        nuevoIndice =
            fotosGaleria.length - 1;

    }


    cambiarImagen(nuevoIndice);

}


/* ==================================================
   BOTONES
   ================================================== */

cerrarVisor.addEventListener(
    "click",
    cerrarVisorGaleria
);


visorSiguiente.addEventListener(
    "click",
    siguienteVisor
);


visorAnterior.addEventListener(
    "click",
    anteriorVisor
);


/* ==================================================
   CERRAR HACIENDO CLIC EN EL FONDO
   ================================================== */

visorGaleria.addEventListener(
    "click",
    function (evento) {

        if (
            evento.target === visorGaleria
        ) {

            cerrarVisorGaleria();

        }

    }
);


/* ==================================================
   TECLADO
   ================================================== */

document.addEventListener(
    "keydown",
    function (evento) {


        if (
            !visorGaleria.classList.contains(
                "activo"
            )
        ) {

            return;

        }


        /* FLECHA DERECHA */

        if (
            evento.key ===
            "ArrowRight"
        ) {

            siguienteVisor();

        }


        /* FLECHA IZQUIERDA */

        if (
            evento.key ===
            "ArrowLeft"
        ) {

            anteriorVisor();

        }


        /* ESCAPE */

        if (
            evento.key ===
            "Escape"
        ) {

            cerrarVisorGaleria();

        }

    }
);


/* ==================================================
   INICIAR GALERÍA
   ================================================== */

crearGaleriaPrincipal();