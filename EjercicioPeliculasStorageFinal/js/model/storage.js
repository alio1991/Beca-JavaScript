class GestorPeliculas {
    
    
    constructor(){
        if(localStorage.getItem("peliculas") == null){
            localStorage.setItem("peliculas",JSON.stringify([]))
        }
    }
    getPeliculasFromLocalStorage(){
         return JSON.parse(localStorage.getItem("peliculas"))
    }
    setPeliculasToLocalStorage(peliculas){
        localStorage.setItem("peliculas",JSON.stringify(peliculas))
    }
    guardarPelicula(pelicula){
        if(typeof this.mostrarPelicula(pelicula.id) === "undefined"){
            var peliculas = this.getPeliculasFromLocalStorage();
            pelicula.fecha = pelicula.fecha;//.toJSON();
            peliculas.push(pelicula);
            this.setPeliculasToLocalStorage(peliculas);
        }
    }

    mostrarPeliculas(){
        return this.getPeliculasFromLocalStorage()
    }
    mostrarPelicula(cod){
        var listaPeliculas = this.getPeliculasFromLocalStorage();
        for(let i = 0;i < listaPeliculas.length;i++){
            let peliculaActual = listaPeliculas[i];
            if(peliculaActual.cod == cod){
                peliculaActual.fecha = peliculaActual.fecha;
                return peliculaActual;
            }
        }
    }
    actualizarPelicula(pelicula){
        var listaPeliculas = this.getPeliculasFromLocalStorage();
        for(let i = 0;i < listaPeliculas.length;i++){
            let peliculaActual = listaPeliculas[i];
            if(peliculaActual.id == pelicula.id){
                pelicula.fecha = pelicula.fecha;//.toJSON();
                listaPeliculas[i] = pelicula;
                this.setPeliculasToLocalStorage(listaPeliculas);
                return true;
            }
        }
        return false;
    }
    borrarPelicula(cod){
        var listaPeliculas = this.getPeliculasFromLocalStorage();
        for(let i = 0;i < listaPeliculas.length;i++){
            let peliculaActual = listaPeliculas[i];
            if(peliculaActual.cod == cod){
                var pelicula = listaPeliculas.splice(i,1);
                this.setPeliculasToLocalStorage(listaPeliculas);
                return pelicula;
            }
        }
    }
}