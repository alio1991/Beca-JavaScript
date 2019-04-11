function iniciarPrograma(){
    gestor = new GestorPeliculas(); 
    gestor.guardarPelicula({id:"AAA-11111-AA",titulo:"El señor de los arillos 1",director:"Directorcillo",genero:"Algo 1",fecha:new Date(),valoracion:5})
    gestor.guardarPelicula({id:"AAA-11111-AB",titulo:"El señor de los arillos 2",director:"Directorcillo",genero:"Algo 2",fecha:new Date(),valoracion:6})
    gestor.guardarPelicula({id:"AAA-11111-AC",titulo:"El señor de los arillos 3",director:"Directorcillo",genero:"Algo 3",fecha:new Date(),valoracion:7})
    gestor.guardarPelicula({id:"AAA-11111-AD",titulo:"El señor de los arillos 4",director:"Directorcillo",genero:"Algo 4",fecha:new Date(),valoracion:8})
    mostrarPeliculasEnTabla();
    document.addEventListener("keydown", (e) => {
        var codigo = document.getElementById("codId");
        
        if(e.key == "Escape" && codigo.disabled ){
            var formulario = document.getElementsByTagName("form")[0];
            codigo.disabled = false;
            formulario.reset();
        }
    });
}
function actualizarPelicula(row){
    var id = row.cells[0].innerText;
    cargarPeliculaEnFormulario(gestor.mostrarPelicula(id));
}
function cargarPeliculaEnFormulario(peli){
    var codigo = document.getElementById("codId");
    codigo.value = peli.id;
    document.getElementById("titulo").value = peli.titulo;
    document.getElementById("director").value = peli.director;
    document.getElementById("genero").value = peli.genero;
    document.getElementById("fecha").valueAsDate = peli.fecha;
    document.getElementById("valoracion").value = peli.valoracion;
    codigo.disabled = true;
}
function mostrarPeliculasEnTabla(){
    var listaPeliculas = gestor.mostrarPeliculas();
    var tBody = document.getElementById("vistaTablaPeliculas");
    tBody.innerHTML = ""; // Elimino el contenido
    for(let i = 0;i < listaPeliculas.length; i++){
        tBody.appendChild(generarTrPelicula(listaPeliculas[i]))
    }
}
function guardarPeliculaButton(){
    peli = new Pelicula();
    var formulario = document.getElementsByTagName("form")[0];
    if(!formulario.checkValidity()){
        return;
    }
    var codigo = document.getElementById("codId");
    peli.id = codigo.value;
    peli.titulo = document.getElementById("titulo").value;
    peli.director = document.getElementById("director").value;
    peli.genero = document.getElementById("genero").value;
    peli.fecha = document.getElementById("fecha").valueAsDate;
    peli.valoracion = document.getElementById("valoracion").value;
    
    if(codigo.disabled){
        gestor.actualizarPelicula(peli);
        codigo.disabled = false;
    }else{
        gestor.guardarPelicula(peli);
    }
    formulario.reset()
    mostrarPeliculasEnTabla();
}
function borrarPeliculaButton(id){
    gestor.borrarPelicula(id);
    mostrarPeliculasEnTabla();
}
function generarTrPelicula(pelicula){
    var tr = document.createElement("tr");
    var tdId = document.createElement("td");
    tdId.innerText = pelicula.id;
    var tdTitulo = document.createElement("td");
    tdTitulo.innerText = pelicula.titulo;
    var tdDirector = document.createElement("td");
    tdDirector.innerText = pelicula.director;
    var tdGenero = document.createElement("td");
    tdGenero.innerText = pelicula.genero
    var tdFecha = document.createElement("td");
    tdFecha.innerText = pelicula.fecha;
    var tdValoracion = document.createElement("td");
    var tdEliminar = document.createElement("td");
    var buttonEliminar = document.createElement("button");
    tdEliminar.appendChild(buttonEliminar);
    buttonEliminar.innerHTML = "Eliminar"
    // <button onclick="borrarPeliculaButton("AAA-31243-12")>Eliminar</button>
    buttonEliminar.onclick = function(){borrarPeliculaButton(pelicula.id)};
    tdValoracion.innerText = pelicula.valoracion;

    tr.appendChild(tdId);
    tr.appendChild(tdTitulo);
    tr.appendChild(tdDirector);
    tr.appendChild(tdGenero);
    tr.appendChild(tdFecha);
    tr.appendChild(tdValoracion);
    tr.appendChild(tdEliminar);
    tr.ondblclick = function () {actualizarPelicula(this)};
    return tr;
}