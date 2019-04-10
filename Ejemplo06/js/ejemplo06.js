

var elementH1 = document.createElement('h1');
var textH1 = document.createTextNode('un titulo');

function auto(){
    var contenidoDelBody = 
        '<ul id="mascotas">'+
            '<li id="perro"> Un perro llamado firulais</li>'+
            '<li id="gato"> Un gato llamado puskas</li>'+
            '<li id="tigre"> Un tigre llamado trigger</li>'+
        '</ul>';
    var body = document.body;
    body.innerHTML = contenidoDelBody;
}   