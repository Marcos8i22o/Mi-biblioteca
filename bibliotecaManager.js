
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



/**
 * 1. ¿Qué se pide? 
 *  que los datos permanezcan en una base de datos incluso 
 *  habiendo cerrado el programa.
 * 
 * 
 * 2. ¿Qué sabemos?
 * -JSON.stringify() -> convierte objeto/array a cadena de texto
 * -JSON.parse() -> viceversa
 * 
 * -localStorage.setItem(key,value) -> guarda datos;
 * -localStorage.getItem(key) -> obtener datos;
 * -localStorage.removeItem(key) -> eliminar datos;
 * 
 * Al recuperar los datos con JSON.parse se obtiene un objeto plano, es decir que
 * las funciones de la clase Libro, no estarán disponibles.
 * 
 * 
 * 3. Plan a ejecutar 
 * - guardar el libro en el localStorage después de agregar, leer y 
 *   eliminar un libro
 * - mostrarlos en la tabla
 * 
 * 
 * 4. Ejecución
 * - guardarBiblioteca
 *  a. se convierten los datos del array en texto plano
 *  b. se guarda el texto en el localStorage
 * - cargarBiblioteca
 *  a. se convierte el texto plano en objeto
 *  b. se guarda en el array miBiblioteca
 *  c. se muestra
 */
/************************************************************************ */
/**
 * 1. ¿Qué se pide?
 * mostrar una barra de progreso visual que represente el porcentaje de 
 * páginas leídas
 * 
 * 2. ¿Qué sabemos?
 * que se puede usar un <div> que se llena de color, por ejemplo
 */