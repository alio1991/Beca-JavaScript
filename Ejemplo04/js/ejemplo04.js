

var elementH1 = document.createElement('h1');
var textH1 = document.createTextNode('un titulo');
function boton(){
    elementH1.appendChild("lalalala");
    var body  = document.body;
    body.appendChild(elementH1);
}

function auto(){
    elementH1.appendChild(textH1);
    var body  = document.body;
    body.appendChild(elementH1);
}