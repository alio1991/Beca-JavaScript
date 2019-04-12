
var peliModificar; //Para realizar correctamente la actualización del campo
var peliculas = []; //Almacena los objetos Pelicula creados
var tr; //Auxiliar para saber en que tr acual se están insertando los datos



Pelicula.prototype.setAtributos = function(titulo,director,codId,genero,fecha,valoracion){
    this.titulo=titulo;
    this.director=director;
    this.codId=codId;
    this.genero=genero;
    this.fecha=fecha;
    this.valoracion=valoracion;
}

function comienza(){
    insertaPeli();
}

function carga(){
    //dameDataJson();
    imprimeTabla();
}

function insertaPeli(){
    var titulo = document.getElementById("titulo");
    var director = document.getElementById("director");
    var codId = document.getElementById("codId");
    var genero = document.getElementById("genero");
    var fecha = document.getElementById("fecha");
    var valoracion = document.getElementById("valoracion");
    var peli = new Pelicula();
    
    peli.setAtributos(titulo.value,director.value,codId.value,genero.value,fecha.value,valoracion.value);
    //console.log("La peli: "+peli.director);
    guardarPelicula(peli);
}


function escribirPeli(peli){
    let tbody = document.getElementById("seccionTbody");
    tr = document.createElement("tr");
    nuevoTd(peli.titulo);
    nuevoTd(peli.director);
    nuevoTd(peli.codId);
    nuevoTd(peli.genero);
    nuevoTd(peli.fecha);
    nuevoTd(peli.valoracion);
    let td = document.createElement("td");
    let botonE = document.createElement("input");
    botonE.type="button";
    botonE.value="  Eliminar   ";
    botonE.setAttribute("class","botonE");
    botonE.setAttribute("data-id",peli.codId);
    botonE.onclick = function() { eliminaPeli(this.getAttribute("data-id")) };
    let botonM = document.createElement("input");
    botonM.setAttribute("class","botonM");
    botonM.setAttribute("data-id",peli.codId);
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
    popUpEliminar()
    borrarPelicula(a);


    imprimeTabla();
}

function modificaPeli(a){
    let elemento = dameUno(a); 
}

function modificaPeliForm(a){
    //console.log("elemento: "+elemento)
    document.getElementById('titulo').value=a.titulo;
    document.getElementById('director').value=a.director;
    document.getElementById('codId').value=a.codId;
    document.getElementById('genero').value=a.genero;
    document.getElementById('fecha').value = parseFecha(a.fecha);
    document.getElementById('valoracion').value=a.valoracion;
    peliModificar = a;
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
    actualizaPeli(creaObjetoPeliDeFormulario());
    ;
    alternaBoton();
}

function creaObjetoPeliDeFormulario(){
    var titulo = document.getElementById("titulo");
    var director = document.getElementById("director");
    var codId = document.getElementById("codId");
    var genero = document.getElementById("genero");
    var fecha = document.getElementById("fecha");
    var valoracion = document.getElementById("valoracion");
    var peli = new Pelicula();
    peli.setAtributos(titulo.value,director.value,codId.value,genero.value,fecha.value,valoracion.value);
    
    return peli;
}
function popUpEliminar(){
    var popup = document.getElementById("titulo");//"¿Seguro que quieres Borrar?";//document.getElementById("myPopup");
    console.log(popup)
    popup.classList.toggle("show");
}
