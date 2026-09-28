/* ==================================================
   MODAL DE USUARIO
   ================================================== */


/* ==================================================
   ELEMENTOS
   ================================================== */

const botonAbrirLogin =
    document.querySelector("#abrir-login");

const modalUsuario =
    document.querySelector("#modal-usuario");

const modalLogin =
    document.querySelector("#modal-login");

const modalRegistro =
    document.querySelector("#modal-registro");

const botonesCerrar =
    document.querySelectorAll(".cerrar-modal");

const botonMostrarRegistro =
    document.querySelector("#mostrar-registro");

const botonMostrarLogin =
    document.querySelector("#mostrar-login");

const formLogin =
    document.querySelector("#form-login");

const formRegistro =
    document.querySelector("#form-registro");

const mensajeLogin =
    document.querySelector("#mensaje-login");

const mensajeRegistro =
    document.querySelector("#mensaje-registro");

const mensajeExito =
    document.querySelector("#mensaje-exito");


/* ==================================================
   ESTADO DE SESIÓN TEMPORAL
   ================================================== */

/*
   Por ahora esto solamente controla visualmente
   si el usuario inició sesión.

   Más adelante PHP + MySQL se van a encargar
   de comprobar la sesión real.
*/

let sesionIniciada = false;


/* ==================================================
   ELEMENTOS DEL HOME
   ================================================== */

const botonLoginIngreso =
    document.querySelector("#abrir-login-ingreso");

const botonRegistroIngreso =
    document.querySelector("#abrir-registro-ingreso");

const ingresoSinSesion =
    document.querySelector("#ingreso-sin-sesion");

const ingresoConSesion =
    document.querySelector("#ingreso-con-sesion");


/* ==================================================
   ABRIR LOGIN
   ================================================== */

function abrirModalLogin(mensaje = "") {

    if (!modalUsuario) {
        return;
    }

    modalUsuario.classList.add("activo");

    mostrarLogin();

    if (mensajeLogin && mensaje !== "") {
        mensajeLogin.textContent = mensaje;
    }

}


/* ==================================================
   ABRIR REGISTRO
   ================================================== */

function abrirModalRegistro() {

    if (!modalUsuario) {
        return;
    }

    modalUsuario.classList.add("activo");

    mostrarRegistro();

}


/* ==================================================
   CERRAR MODAL
   ================================================== */

function cerrarModal() {

    if (!modalUsuario) {
        return;
    }

    modalUsuario.classList.remove("activo");

    limpiarMensajes();

}


/* ==================================================
   TINKER BELL DEL HEADER
   ================================================== */

if (botonAbrirLogin) {

    botonAbrirLogin.addEventListener(
        "click",
        function () {

            abrirModalLogin();

        }
    );

}


/* ==================================================
   BOTÓN INGRESAR DEL HOME
   ================================================== */

if (botonLoginIngreso) {

    botonLoginIngreso.addEventListener(
        "click",
        function () {

            abrirModalLogin();

        }
    );

}


/* ==================================================
   BOTÓN REGISTRATE DEL HOME
   ================================================== */

if (botonRegistroIngreso) {

    botonRegistroIngreso.addEventListener(
        "click",
        abrirModalRegistro
    );

}


/* ==================================================
   CERRAR CON LA X
   ================================================== */

botonesCerrar.forEach(function (boton) {

    boton.addEventListener(
        "click",
        cerrarModal
    );

});


/* ==================================================
   CERRAR TOCANDO FUERA DEL CARTEL
   ================================================== */

if (modalUsuario) {

    modalUsuario.addEventListener(
        "click",
        function (evento) {

            if (evento.target === modalUsuario) {

                cerrarModal();

            }

        }
    );

}


/* ==================================================
   CAMBIAR ENTRE LOGIN Y REGISTRO
   ================================================== */

function mostrarLogin() {

    if (!modalLogin || !modalRegistro) {
        return;
    }

    modalLogin.classList.remove("oculto");

    modalRegistro.classList.add("oculto");

    limpiarMensajes();

}


function mostrarRegistro() {

    if (!modalLogin || !modalRegistro) {
        return;
    }

    modalLogin.classList.add("oculto");

    modalRegistro.classList.remove("oculto");

    limpiarMensajes();

}


if (botonMostrarRegistro) {

    botonMostrarRegistro.addEventListener(
        "click",
        mostrarRegistro
    );

}


if (botonMostrarLogin) {

    botonMostrarLogin.addEventListener(
        "click",
        mostrarLogin
    );

}


/* ==================================================
   VALIDACIONES
   ================================================== */

function correoValido(correo) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

}


function limpiarMensajes() {

    if (mensajeLogin) {

        mensajeLogin.textContent = "";

    }


    if (mensajeRegistro) {

        mensajeRegistro.textContent = "";

    }

}


/* ==================================================
   VALIDAR INICIO DE SESIÓN
   ================================================== */

if (formLogin) {

    formLogin.addEventListener(
        "submit",
        function (evento) {

            evento.preventDefault();

            limpiarMensajes();


            const email =
                document
                    .querySelector("#login-email")
                    .value
                    .trim();


            const password =
                document
                    .querySelector("#login-password")
                    .value;


            /* CAMPOS VACÍOS */

            if (
                email === "" ||
                password === ""
            ) {

                mensajeLogin.textContent =
                    "Completá todos los campos.";

                return;

            }


            /* EMAIL INVÁLIDO */

            if (!correoValido(email)) {

                mensajeLogin.textContent =
                    "Ingresá un email válido.";

                return;

            }


            /*
               POR AHORA NO COMPROBAMOS USUARIOS REALES.

               Más adelante PHP y MySQL van a verificar
               el email y la contraseña.
            */

            iniciarSesionVisualmente(
                "Sesión iniciada correctamente"
            );

        }
    );

}


/* ==================================================
   VALIDAR REGISTRO
   ================================================== */

if (formRegistro) {

    formRegistro.addEventListener(
        "submit",
        function (evento) {

            evento.preventDefault();

            limpiarMensajes();


            const nombre =
                document
                    .querySelector("#registro-nombre")
                    .value
                    .trim();


            const apellido =
                document
                    .querySelector("#registro-apellido")
                    .value
                    .trim();


            const email =
                document
                    .querySelector("#registro-email")
                    .value
                    .trim();


            const password =
                document
                    .querySelector("#registro-password")
                    .value;


            /* CAMPOS VACÍOS */

            if (
                nombre === "" ||
                apellido === "" ||
                email === "" ||
                password === ""
            ) {

                mensajeRegistro.textContent =
                    "Completá todos los campos.";

                return;

            }


            /* EMAIL INVÁLIDO */

            if (!correoValido(email)) {

                mensajeRegistro.textContent =
                    "Ingresá un email válido.";

                return;

            }


            /*
               POR AHORA NO GUARDAMOS EL USUARIO.

               Más adelante PHP y MySQL van a guardar
               la cuenta de forma segura.
            */

            iniciarSesionVisualmente(
                "Cuenta creada correctamente"
            );

        }
    );

}


/* ==================================================
   SESIÓN ACTIVA VISUAL
   ================================================== */

function iniciarSesionVisualmente(texto) {

    /*
       MARCAR QUE HAY UNA SESIÓN ACTIVA
    */

    sesionIniciada = true;


    /* CERRAR MODAL */

    cerrarModal();


    /* MARCAR TINKER BELL COMO USUARIO ACTIVO */

    if (botonAbrirLogin) {

        botonAbrirLogin.classList.add(
            "usuario-activo"
        );

        botonAbrirLogin.setAttribute(
            "aria-label",
            "Sesión activa"
        );

    }


    /* CAMBIAR LA SECCIÓN DEL HOME */

    actualizarSeccionIngreso();


    /* MOSTRAR MENSAJE DE ÉXITO */

    mostrarMensajeExito(texto);


    /* LIMPIAR FORMULARIOS */

    if (formLogin) {

        formLogin.reset();

    }


    if (formRegistro) {

        formRegistro.reset();

    }

}


/* ==================================================
   COMPROBAR SI HAY SESIÓN
   ================================================== */

function usuarioTieneSesion() {

    return sesionIniciada;

}


/* ==================================================
   PEDIR LOGIN PARA FAVORITOS
   ================================================== */

function pedirLoginParaFavoritos() {

    abrirModalLogin(
        "Iniciá sesión para marcar personajes como favoritos y ver tus favoritos."
    );

}


/* ==================================================
   CAMBIAR SECCIÓN DE INGRESO DEL HOME
   ================================================== */

function actualizarSeccionIngreso() {

    if (ingresoSinSesion && ingresoConSesion) {

        /* OCULTAR TODO EL CARTEL DE INGRESO */

        ingresoSinSesion.style.display = "none";


        /* MOSTRAR LA BIENVENIDA */

        ingresoConSesion.hidden = false;

        ingresoConSesion.style.display = "block";

    }

}


/* ==================================================
   MENSAJE DE ÉXITO
   ================================================== */

function mostrarMensajeExito(texto) {

    if (!mensajeExito) {

        return;

    }


    mensajeExito.textContent = texto;

    mensajeExito.classList.add("activo");


    setTimeout(function () {

        mensajeExito.classList.remove(
            "activo"
        );

    }, 2500);

}


/* ==================================================
   ESTADO INICIAL DEL HOME
   ================================================== */

if (ingresoSinSesion && ingresoConSesion) {

    ingresoSinSesion.style.display = "block";

    ingresoConSesion.style.display = "none";

}