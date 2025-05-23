const $lista = document.querySelector("#lista");
const $tabla = document.querySelector("table");

export function limpiarInputs() {

    document.querySelector("#inputTitulo").value = "";
    document.querySelector("#inputAutor").value = "";
    document.querySelector("#inputPaginasTotales").value = "";

}

export function mostrarTabla() {
    $tabla.classList.remove("oculto");
}

export function ocultarTabla() {
    $tabla.classList.add("oculto");
}

export function renderizarLibros(libros, onLeerPaginasCallback, onEliminarLibroCallback) {
    $lista.innerHTML = "";

    if (libros.length === 0) {
        ocultarTabla();
        return;
    } else {
        mostrarTabla();

    }

    libros.forEach((libro, indice) => {
        const $fila = document.createElement("tr");
        $fila.id = `fila-${indice + 1}`;

        const $encabezadoDeFila = document.createElement("th");
        $encabezadoDeFila.setAttribute("scope", "row");
        $encabezadoDeFila.textContent = indice + 1

        const titulo = document.createElement("td");
        const autor = document.createElement("td");
        const paginasTotales = document.createElement("td");
        const paginasLeidas = document.createElement("td");
        const paginasRestantes = document.createElement("td");
        const acciones = document.createElement("td");

        titulo.textContent = libro.titulo;
        autor.textContent = libro.autor;
        paginasTotales.textContent = Number(libro.paginasTotales);
        paginasLeidas.textContent = Number(libro.paginasLeidas);
        paginasRestantes.textContent = Number(libro.paginasRestantes);

        const inputPaginasLeidas = document.createElement("input");
        inputPaginasLeidas.type = "number";
        inputPaginasLeidas.classList.add("inputPaginasLeidas");
        inputPaginasLeidas.min = 1;
        inputPaginasLeidas.placeholder = "Páginas";

        const $botonLeerPaginas = document.createElement("button");
        $botonLeerPaginas.type = "button";
        $botonLeerPaginas.textContent = "Leer páginas";
        $botonLeerPaginas.classList.add("btn", "btn-secondary", "btn-leer");

        $botonLeerPaginas.addEventListener("click", () => {
            const cantidadALeer = Number(inputPaginasLeidas.value);
            onLeerPaginasCallback(indice, cantidadALeer);

            inputPaginasLeidas.value = "";
        })

        const $botonEliminarLibro = document.createElement("button");
        $botonEliminarLibro.type = "button";

        $botonEliminarLibro.textContent = "Eliminar";
        $botonEliminarLibro.classList.add("btn", "btn-danger", "btn-eliminar");

        $botonEliminarLibro.addEventListener("click", () => {
            onEliminarLibroCallback(indice);
        })

        
        const $barraDeProgreso = document.createElement("div");
        $barraDeProgreso.id = "barra-progreso";

        const $miProgreso = document.createElement("div");
        $miProgreso.id = "mi-progreso";
        const resultado = (libro.paginasLeidas * 100)/libro.paginasTotales
        $miProgreso.textContent = `${Math.trunc(resultado)}%`;
        $miProgreso.style.width = $miProgreso.textContent;
        
        $barraDeProgreso.appendChild($miProgreso);

        acciones.appendChild(inputPaginasLeidas);
        acciones.appendChild($botonLeerPaginas);
        acciones.appendChild($botonEliminarLibro);
        acciones.appendChild($barraDeProgreso)

        $fila.appendChild($encabezadoDeFila);
        $fila.appendChild(titulo);
        $fila.appendChild(autor);
        $fila.appendChild(paginasTotales);
        $fila.appendChild(paginasLeidas);
        $fila.appendChild(paginasRestantes);
        $fila.appendChild(acciones);

        $lista.appendChild($fila);
        
    })
}



