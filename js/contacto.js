/* ==================================================
   FORMULARIO DE CONTACTO
   ================================================== */


/* -------------------- ELEMENTOS -------------------- */

const formContacto = document.querySelector("#form-contacto");

const nombreContacto = document.querySelector("#contacto-nombre");
const emailContacto = document.querySelector("#contacto-email");
const asuntoContacto = document.querySelector("#contacto-asunto");
const mensajeContacto = document.querySelector("#contacto-mensaje");

const errorNombre = document.querySelector("#error-nombre");
const errorEmail = document.querySelector("#error-email");
const errorAsunto = document.querySelector("#error-asunto");
const errorMensaje = document.querySelector("#error-mensaje");

const exitoContacto = document.querySelector("#exito-contacto");


/* -------------------- VALIDAR EMAIL -------------------- */

function emailValido(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}


/* -------------------- LIMPIAR ERRORES -------------------- */

function limpiarErroresContacto() {

    errorNombre.textContent = "";
    errorEmail.textContent = "";
    errorAsunto.textContent = "";
    errorMensaje.textContent = "";

    exitoContacto.textContent = "";

}


/* -------------------- VALIDAR FORMULARIO -------------------- */

function validarFormularioContacto() {

    limpiarErroresContacto();

    let formularioValido = true;


    /* NOMBRE */

    if (nombreContacto.value.trim() === "") {

        errorNombre.textContent = "Ingresá tu nombre.";

        formularioValido = false;

    }


    /* EMAIL */

    const email = emailContacto.value.trim();

    if (email === "") {

        errorEmail.textContent = "Ingresá tu email.";

        formularioValido = false;

    } else if (!emailValido(email)) {

        errorEmail.textContent = "Ingresá un email válido.";

        formularioValido = false;

    }


    /* ASUNTO */

    if (asuntoContacto.value.trim() === "") {

        errorAsunto.textContent = "Ingresá un asunto.";

        formularioValido = false;

    }


    /* MENSAJE */

    if (mensajeContacto.value.trim() === "") {

        errorMensaje.textContent = "Escribí tu mensaje.";

        formularioValido = false;

    }


    return formularioValido;

}


/* -------------------- MENSAJE DE ÉXITO -------------------- */

function mostrarExitoContacto() {

    exitoContacto.textContent = "¡Mensaje enviado correctamente!";


    setTimeout(function () {

        exitoContacto.textContent = "";

    }, 3000);

}


/* -------------------- ENVÍO DEL FORMULARIO -------------------- */

formContacto.addEventListener("submit", function (evento) {

    evento.preventDefault();


    if (!validarFormularioContacto()) {

        return;

    }


    mostrarExitoContacto();

    formContacto.reset();

});