import * as bibliotecaManager from "./bibliotecaManager.js";
import * as uiManager from "./uiManager.js";


bibliotecaManager.cargarBiblioteca();
actualizarUI()

const $botonAgregarLibro = document.querySelector("#btn-agregar-libro");
const $botonBorrarBiblioteca = document.querySelector("#btn-borrar-biblioteca");


$botonAgregarLibro.addEventListener("click", function (e) {
    e.preventDefault();

    const titulo = document.querySelector("#inputTitulo").value;
    const autor = document.querySelector("#inputAutor").value;
    const paginasTotales = document.querySelector("#inputPaginasTotales").value;


    if (!titulo || !autor || !paginasTotales || Number(paginasTotales) <= 0) {
        alert("Por favor, rellena todos los campos y asegúrate que las páginas sean un número positivo");
        return;
    }

    bibliotecaManager.agregarLibro(titulo, autor, paginasTotales);

    bibliotecaManager.guardarBiblioteca();

    uiManager.limpiarInputs();
    actualizarUI();

})

function handleLeerPaginas(indiceLibro, cantidad) {
    bibliotecaManager.leerPaginasDeLibro(indiceLibro, cantidad);
    bibliotecaManager.guardarBiblioteca()

    actualizarUI();
}

function handleEliminarLibro(indiceLibro) {
    bibliotecaManager.eliminarLibro(indiceLibro);
    bibliotecaManager.guardarBiblioteca();

    actualizarUI();
}


function actualizarUI() {

    const librosActuales = bibliotecaManager.obtenerLibros();
    uiManager.renderizarLibros(librosActuales, handleLeerPaginas, handleEliminarLibro);
}

$botonBorrarBiblioteca.addEventListener("click", function(){
    bibliotecaManager.borrarBiblioteca();

    actualizarUI();
})

















