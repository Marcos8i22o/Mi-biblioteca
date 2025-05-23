
import { Libro } from "./Libro.js"

const miBiblioteca = [];


export function agregarLibro(titulo, autor, paginasTotales, paginasLeidas) {
    const nuevoLibro = new Libro(titulo, autor, paginasTotales, paginasLeidas);
    miBiblioteca.push(nuevoLibro);

    return nuevoLibro;
}


export function obtenerLibros() {
    return miBiblioteca.slice();
}


export function leerPaginasDeLibro(indiceLibro, cantidad) {
    if (miBiblioteca[indiceLibro]) {
        miBiblioteca[indiceLibro].leerPaginas(cantidad);
        return miBiblioteca[indiceLibro];
    }
    throw new Error("El libro no exíste");
}

export function eliminarLibro(indiceLibro) {
    if (miBiblioteca[indiceLibro]) {
        miBiblioteca.splice(indiceLibro, 1);
        return true;
    }
    return false;

}

export function cargarBiblioteca() {
    const librosGuardados = localStorage.getItem("misLibrosDeLaBiblioteca")

    Object.values(JSON.parse(librosGuardados)).forEach((libro) => {
        agregarLibro(libro.titulo, libro.autor, libro.paginasTotales, libro.paginasLeidas)
        
    })

}


export function guardarBiblioteca() {
    localStorage.setItem("misLibrosDeLaBiblioteca", JSON.stringify(miBiblioteca))
}


