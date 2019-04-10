
function auto(){
    var lista = document.getElementById("lista");
    var listItem2 = document.createElement("li");
    var listItem4 = document.createElement("li");
    
    var textListItem2 = document.createTextNode(2);
    listItem2.appendChild(textListItem2);
    lista.insertBefore(listItem2,lista.children[1]);

    var textListItem4 = document.createTextNode(4);
    listItem4.appendChild(textListItem4);
    lista.insertBefore(listItem4,lista.children[3]);
}   