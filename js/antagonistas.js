/* ==================================================
   CARRUSEL DE ANTAGONISTAS
   ================================================== */

const tarjetasAntagonistas =
    document.querySelectorAll(".antagonista-card");

const flechaAnterior =
    document.querySelector(".flecha-antagonistas-izquierda");

const flechaSiguiente =
    document.querySelector(".flecha-antagonistas-derecha");


/* -------------------- GRUPO ACTUAL -------------------- */

let grupoActual = 0;

const cantidadPorGrupo = 3;


/* ==================================================
   MOSTRAR GRUPO
   ================================================== */

function mostrarGrupo() {

    tarjetasAntagonistas.forEach(function (tarjeta, indice) {

        const inicio = grupoActual * cantidadPorGrupo;
        const final = inicio + cantidadPorGrupo;

        if (indice >= inicio && indice < final) {

            tarjeta.classList.remove("oculto");

        } else {

            tarjeta.classList.add("oculto");

        }

    });

}


/* ==================================================
   FLECHA DERECHA
   ================================================== */

flechaSiguiente.addEventListener("click", function () {

    grupoActual++;

    if (grupoActual > 1) {
        grupoActual = 0;
    }

    mostrarGrupo();

});


/* ==================================================
   FLECHA IZQUIERDA
   ================================================== */

flechaAnterior.addEventListener("click", function () {

    grupoActual--;

    if (grupoActual < 0) {
        grupoActual = 1;
    }

    mostrarGrupo();

});


/* ==================================================
   MOSTRAR PRIMER GRUPO AL CARGAR
   ================================================== */

mostrarGrupo();