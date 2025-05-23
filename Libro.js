export class Libro {
    constructor(titulo, autor, paginasTotales, paginasLeidas) {
        if (paginasLeidas === undefined) {
            paginasLeidas = 0;
        }
            this.titulo = titulo;
            this.autor = autor;
            this.paginasTotales = Number(paginasTotales);
            this.paginasLeidas = paginasLeidas;
            this.paginasRestantes = this.paginasTotales - this.paginasLeidas;
        
    }

    leerPaginas(cantidad) {

        let paginasQueRealmenteQuedan = this.paginasTotales - this.paginasLeidas;

        if (cantidad > 0) {
            if (this.estaLeidoCompletamente()) {
                alert("Libro ya leído")
            } else {
                if (cantidad <= paginasQueRealmenteQuedan) {
                    this.paginasLeidas += cantidad;
                    this.paginasRestantes = this.paginasTotales - this.paginasLeidas;

                } else {
                    let paginasALeerEstaVez = Math.min(cantidad, paginasQueRealmenteQuedan);
                    this.paginasLeidas += paginasALeerEstaVez;
                    this.paginasRestantes = this.paginasTotales - this.paginasLeidas;
                }
            }
        } else {
            alert("Por favor, ingrese un número válido")
        }

    }

    estaLeidoCompletamente() {

        if (this.paginasLeidas === this.paginasTotales) {
            return true;
        } else {
            return false;
        }
    }
}

