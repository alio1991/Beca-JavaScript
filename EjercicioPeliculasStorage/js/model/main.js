
var indiceModificar; //Para realizar correctamente la actualización del campo
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


function insertaPeli(){
    var titulo = document.getElementById("titulo");
    var director = document.getElementById("director");
    var cod = document.getElementById("cod");
    var genero = document.getElementById("genero");
    var fecha = document.getElementById("fecha");
    var valoracion = document.getElementById("valoracion");

    var peli = new Pelicula();
    peli.setAtributos(titulo.value,director.value,cod.value,genero.value,fecha.value,valoracion.value);
    peliculas.push(peli);
    escribirPeli(peli);
}

function imprimeTabla(){
    let tbody = document.getElementById("seccionTbody");
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    peliculas.forEach(function(p) {
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
    nuevoTd(peli.valoracion);

    let td = document.createElement("td");

    let botonE = document.createElement("input");
    botonE.type="button";
    botonE.value="Eliminar";
    botonE.setAttribute("data-id",peli.cod);
    botonE.onclick = function() { eliminaPeli(this.getAttribute("data-id")) };

    let botonM = document.createElement("input");
    botonM.type="button";
    botonM.setAttribute("data-id",peli.cod);
    botonM.value="Modificar";
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
    for(let i=0; i<peliculas.length; i++){
        if(peliculas[i].cod === a){
            peliculas.splice(i,1);
        }
    }
    //console.log(peliculas)
    imprimeTabla();
}

function modificaPeli(a){

    for(let i=0; i<peliculas.length; i++){
        if(peliculas[i].cod === a){
            document.getElementById('titulo').value=peliculas[i].titulo;
            document.getElementById('director').value=peliculas[i].director;
            document.getElementById('cod').value=peliculas[i].cod;
            document.getElementById('genero').value=peliculas[i].genero;
            document.getElementById('fecha').value=peliculas[i].fecha;
            document.getElementById('valoracion').value=peliculas[i].valoracion;
            indiceModificar = i;
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
        boton.onclick = function() { insertaPeli() };
    }
}

function cambiaPeli(){
    peliculas.splice(indiceModificar,1);
    insertaPeli();
    imprimeTabla();
    alternaBoton();
}