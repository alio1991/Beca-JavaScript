
//console.log("lo que sea")
var elementos = [];
function insertaPeli(){
    var titulo = document.getElementById("titulo");
    var director = document.getElementById("director");
    var cod = document.getElementById("cod");
    var genero = document.getElementById("genero");
    var fecha = document.getElementById("fecha");
    var valoracion = document.getElementById("valoracion");

    creaFila(titulo,director,cod,genero,fecha,valoracion)
}

function creaFila(a,b,c,d,e,f){

    let tbody = document.getElementById("seccionTbody");
    let tr = document.createElement("tr");
    for(let i=0;i<6; i++){
        let td = document.createElement("td");
        td.appendChild(document.createTextNode(arguments[i].value));
        tr.appendChild(td);
        tbody.appendChild(tr);

    }
}