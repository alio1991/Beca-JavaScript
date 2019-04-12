
var peliModificar; //Para realizar correctamente la actualización del campo
var peliculas = []; //Almacena los objetos Pelicula creados
var tr; //Auxiliar para saber en que tr acual se están insertando los datos

Pelicula.prototype.setAtributos = function(titulo,director,cod,genero,fecha,valoracion){
    this.titulo=titulo;
    this.director=director;
    this.cod=cod;
    this.genero=genero;
    this.fecha=fecha;
    this.valoracion=valoracion;
}

function comienza(){
    if(document.getElementById("formulario").checkValidity()){
        insertaPeli();
    }else{
        if(!document.getElementById("director").checkValidity()){
            document.getElementById("director").value="ERRONEO";
            //console.log("director")
        }
        if(!document.getElementById("cod").checkValidity()){
            document.getElementById('cod').value="ERRONEO";
            //console.log("cod")
        }
        if(!document.getElementById("genero").checkValidity()){
            document.getElementById('genero').value="ERRONEO";
            //console.log("genero")
        }
        if(!document.getElementById("valoracion").checkValidity()){
            document.getElementById('valoracion').value="ERRONEO";
            //console.log("genero")
        }
        if(!document.getElementById("fecha").checkValidity()){
            document.getElementById('fecha').value="ERRONEO";
            //console.log("fecha")
        }
        if(!document.getElementById("titulo").checkValidity()){
            document.getElementById('titulo').value="ERRONEO";
            //console.log("titulo")
        }
        
    }
    
}
function carga(){
    gestor = new GestorPeliculas(); 
    imprimeTabla();
}

function insertaPeli(){
    var titulo = document.getElementById("titulo");
    var director = document.getElementById("director");
    var cod = document.getElementById("cod");
    var genero = document.getElementById("genero");
    var fecha = document.getElementById("fecha");
    var valoracion = document.getElementById("valoracion");
    var peli = new Pelicula();
    peli.setAtributos(titulo.value,director.value,cod.value,genero.value,fecha.value,valoracion.value);
    //peliculas.push(peli);
    gestor.guardarPelicula(peli);
    //escribirPeli(peli);
    imprimeTabla();
}

function imprimeTabla(){
    let tbody = document.getElementById("seccionTbody");
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    gestor.getPeliculasFromLocalStorage().forEach(function(p) {
        escribirPeli(p);
    });
}

function escribirPeli(peli){
    let tbody = document.getElementById("seccionTbody");
    tr = document.createElement("tr");
    nuevoTd(peli.titulo);
    nuevoTd(peli.director);
    nuevoTd(peli.cod);
    nuevoTd(peli.genero);
    nuevoTd(peli.fecha);
    //console.log(peli.fecha)
    nuevoTd(peli.valoracion);
    let td = document.createElement("td");
    let botonE = document.createElement("input");
    botonE.type="button";
    botonE.value="  Eliminar   ";
    botonE.setAttribute("class","botonE");
    botonE.setAttribute("data-id",peli.cod);
    botonE.onclick = function() { eliminaPeli(this.getAttribute("data-id")) };
    let botonM = document.createElement("input");
    botonM.setAttribute("class","botonM");
    botonM.setAttribute("data-id",peli.cod);
    botonM.type="button";
    botonM.value="  Modificar  ";
    botonM.onclick = function() { modificaPeli(this.getAttribute("data-id")) };
    td.appendChild(botonE);
    td.appendChild(botonM);
    tr.appendChild(td);
    tbody.appendChild(tr);
}

function nuevoTd(cont){
    let td = document.createElement("td");
    td.appendChild(document.createTextNode(cont));
    tr.appendChild(td);
}

function eliminaPeli(a){
    gestor.borrarPelicula(a);
    imprimeTabla();
}

function modificaPeli(a){
    let gest = gestor.getPeliculasFromLocalStorage();
    for(let i=0; i<gest.length; i++){
        if(gest[i].cod === a){
            document.getElementById('titulo').value=gest[i].titulo;
            document.getElementById('director').value=gest[i].director;
            document.getElementById('cod').value=gest[i].cod;
            document.getElementById('genero').value=gest[i].genero;
            document.getElementById('fecha').value=gest[i].fecha;
            //console.log(gest[i].fecha)
            document.getElementById('valoracion').value=gest[i].valoracion;
            peliModificar = gest[i];
        }
    }
    //Cambiar boton enviar por modificar
    alternaBoton("mod");
}

function alternaBoton(a){
    var boton = document.getElementById("botonFormulario");
    if(a=="mod"){
        boton.textContent="Modificar";
        boton.onclick = function() { cambiaPeli() };
    }else{
        boton.textContent="Enviar"
        boton.onclick = function() { comienza() };
    }
}

function cambiaPeli(){
    gestor.borrarPelicula(peliModificar.cod);
    insertaPeli();
    imprimeTabla();
    alternaBoton();
}