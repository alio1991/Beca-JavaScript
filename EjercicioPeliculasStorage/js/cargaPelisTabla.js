var indiceModificar;
var peliculas = [];

function Peli(){
}
Peli.prototype.titulo="";
Peli.prototype.director="";
Peli.prototype.cod="";
Peli.prototype.genero="";
Peli.prototype.fecha="";
Peli.prototype.valoracion="";


Peli.prototype.setAtributos = function(titulo,director,cod,genero,fecha,valoracion){
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

    var peli = new Peli();
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
    let tr = document.createElement("tr");
    tr.className="regenerar";
    let td1 = document.createElement("td");
    td1.appendChild(document.createTextNode(peli.titulo));
    tr.appendChild(td1);
    
    let td2 = document.createElement("td");
    td2.appendChild(document.createTextNode(peli.director));
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.appendChild(document.createTextNode(peli.cod));
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.appendChild(document.createTextNode(peli.genero));
    tr.appendChild(td4);

    let td5 = document.createElement("td");
    td5.appendChild(document.createTextNode(peli.fecha));
    tr.appendChild(td5);

    let td6 = document.createElement("td");
    td6.appendChild(document.createTextNode(peli.valoracion));
    tr.appendChild(td6);
 
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


function eliminaPeli(a){
    for(let i=0; i<peliculas.length; i++){
        if(peliculas[i].cod === a){
            peliculas.splice(i,1);
        }
    }
    
    imprimeTabla();
}

function modificaPeli(a){
    //Rellenar los campos con los datos
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