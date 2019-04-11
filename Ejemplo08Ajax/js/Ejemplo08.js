
function inicializar(){
    var ajax = new XMLHttpRequest;
    ajax.open("GET", "data.json");
    ajax.onreadystatechange = function(){
        if(ajax.status == 200 && ajax.readyState == 4){
            var datos = JSON.parse(ajax.responseText);
            console.log(deatos);
        }

    }
    ajax.send();
}