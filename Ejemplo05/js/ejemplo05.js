

var elementH1 = document.createElement('h1');
var textH1 = document.createTextNode('un titulo');

function auto(){
    var parrafo1 = document.getElementById('parrafo1');
    console.log(parrafo1);
    var parrafo2 = document.querySelector("body,p");
    console.log(parrafo2);
    var titulos = document.getElementsByClassName("titulo");
    console.log(titulos);
    var listItems = document.getElementsByTagName("li");
    console.log(listItems);
    var inputs = document.getElementsByName("input");
    console.log(inputs);
    var parrafos = document.querySelectorAll("body p");
    console.log("Primero: "+parrafos.item(0)+" y Segundo: "+parrafos.item(1));
    for(let i=0; i<parrafos.length; i++){
        console.log(parrafos[i].firstChild.textContent)
    }
}