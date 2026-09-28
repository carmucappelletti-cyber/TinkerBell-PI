/* ==================================================
   FAVORITOS - PERSONAJES
   ================================================== */

const botonesFavoritos =
    document.querySelectorAll(".boton-favorito");

const botonVerFavoritos =
    document.querySelector("#ver-favoritos");

const modalFavoritos =
    document.querySelector("#modal-favoritos");

const botonCerrarFavoritos =
    document.querySelector("#cerrar-favoritos");

const listaFavoritos =
    document.querySelector("#lista-favoritos");

const mensajeSinFavoritos =
    document.querySelector("#sin-favoritos");


/* ==================================================
   ACTIVAR / DESACTIVAR FAVORITOS
   ================================================== */

botonesFavoritos.forEach(function (boton) {

    boton.addEventListener("click", function () {


        /* ------------------------------
           COMPROBAR SESIÓN
           ------------------------------ */

        if (!usuarioTieneSesion()) {

            pedirLoginParaFavoritos();

            return;

        }


        /* ------------------------------
           DATOS DEL PERSONAJE
           ------------------------------ */

        const tarjeta =
            boton.closest(".personaje-card");

        const nombrePersonaje =
            tarjeta
                .querySelector(".personaje-identidad h3")
                .textContent
                .trim();

        const esFavorito =
            boton.classList.contains("favorito-activo");


        /* ------------------------------
           QUITAR DE FAVORITOS
           ------------------------------ */

        if (esFavorito) {

            boton.classList.remove("favorito-activo");

            boton.textContent = "♡";

            boton.setAttribute(
                "aria-label",
                "Agregar " + nombrePersonaje + " a favoritos"
            );

            mostrarMensajeExito(
                nombrePersonaje + " se quitó de tus favoritos."
            );

        }


        /* ------------------------------
           AGREGAR A FAVORITOS
           ------------------------------ */

        else {

            boton.classList.add("favorito-activo");

            boton.textContent = "♥";

            boton.setAttribute(
                "aria-label",
                "Quitar " + nombrePersonaje + " de favoritos"
            );

            mostrarMensajeExito(
                "¡" + nombrePersonaje + " se agregó a tus favoritos! ♥"
            );

        }


        /* SI EL MODAL ESTÁ ABIERTO, ACTUALIZARLO */

        if (
            modalFavoritos &&
            modalFavoritos.classList.contains("activo")
        ) {

            actualizarFavoritos();

        }

    });

});


/* ==================================================
   ABRIR MIS FAVORITOS
   ================================================== */

if (botonVerFavoritos) {

    botonVerFavoritos.addEventListener(
        "click",
        function () {


            /* SI NO HAY SESIÓN */

            if (!usuarioTieneSesion()) {

                pedirLoginParaFavoritos();

                return;

            }


            /* ACTUALIZAR PERSONAJES */

            actualizarFavoritos();


            /* ABRIR MODAL */

            modalFavoritos.classList.add("activo");

        }
    );

}


/* ==================================================
   ACTUALIZAR CONTENIDO DEL MODAL
   ================================================== */

function actualizarFavoritos() {

    if (!listaFavoritos || !mensajeSinFavoritos) {
        return;
    }


    /* LIMPIAR CONTENIDO ANTERIOR */

    listaFavoritos.innerHTML = "";


    /* BUSCAR CORAZONES ACTIVOS */

    const favoritosActivos =
        document.querySelectorAll(
            ".boton-favorito.favorito-activo"
        );


    /* ------------------------------
       NO HAY FAVORITOS
       ------------------------------ */

    if (favoritosActivos.length === 0) {

        mensajeSinFavoritos.style.display = "block";

        return;

    }


    /* ------------------------------
       HAY FAVORITOS
       ------------------------------ */

    mensajeSinFavoritos.style.display = "none";


    favoritosActivos.forEach(function (boton) {

        const tarjetaOriginal =
            boton.closest(".personaje-card");


        /* OBTENER DATOS */

        const imagenOriginal =
            tarjetaOriginal.querySelector(
                ".personaje-frente img"
            );

        const nombreOriginal =
            tarjetaOriginal.querySelector(
                ".personaje-identidad h3"
            );

        const tipoOriginal =
            tarjetaOriginal.querySelector(
                ".personaje-identidad p"
            );


        /* CREAR TARJETA */

        const tarjetaFavorito =
            document.createElement("article");

        tarjetaFavorito.classList.add(
            "favorito-modal-card"
        );


        /* IMAGEN */

        const imagen =
            document.createElement("img");

        imagen.src =
            imagenOriginal.src;

        imagen.alt =
            imagenOriginal.alt;


        /* NOMBRE */

        const nombre =
            document.createElement("h3");

        nombre.textContent =
            nombreOriginal.textContent;


        /* TIPO */

        const tipo =
            document.createElement("p");

        tipo.textContent =
            tipoOriginal.textContent;


        /* CORAZÓN */

        const corazon =
            document.createElement("button");

        corazon.type = "button";

        corazon.classList.add(
            "quitar-favorito-modal"
        );

        corazon.textContent = "♥";

        corazon.setAttribute(
            "aria-label",
            "Quitar " +
            nombreOriginal.textContent.trim() +
            " de favoritos"
        );


        /* ------------------------------
           QUITAR DESDE EL MODAL
           ------------------------------ */

        corazon.addEventListener(
            "click",
            function () {

                boton.classList.remove(
                    "favorito-activo"
                );

                boton.textContent = "♡";

                boton.setAttribute(
                    "aria-label",
                    "Agregar " +
                    nombreOriginal.textContent.trim() +
                    " a favoritos"
                );


                mostrarMensajeExito(
                    nombreOriginal.textContent.trim() +
                    " se quitó de tus favoritos."
                );


                actualizarFavoritos();

            }
        );


        /* ARMAR TARJETA */

        tarjetaFavorito.appendChild(imagen);

        tarjetaFavorito.appendChild(nombre);

        tarjetaFavorito.appendChild(tipo);

        tarjetaFavorito.appendChild(corazon);


        /* AGREGAR AL MODAL */

        listaFavoritos.appendChild(
            tarjetaFavorito
        );

    });

}


/* ==================================================
   CERRAR FAVORITOS CON LA X
   ================================================== */

if (botonCerrarFavoritos) {

    botonCerrarFavoritos.addEventListener(
        "click",
        cerrarModalFavoritos
    );

}


/* ==================================================
   CERRAR TOCANDO FUERA
   ================================================== */

if (modalFavoritos) {

    modalFavoritos.addEventListener(
        "click",
        function (evento) {

            if (evento.target === modalFavoritos) {

                cerrarModalFavoritos();

            }

        }
    );

}


/* ==================================================
   CERRAR MODAL DE FAVORITOS
   ================================================== */

function cerrarModalFavoritos() {

    if (!modalFavoritos) {
        return;
    }

    modalFavoritos.classList.remove("activo");

}