
function imprimeTabla(){
    var ajax = new XMLHttpRequest();
    ajax.open("GET","http://192.168.1.63:8080/peliculas");
    ajax.onreadystatechange = function (){

        if(ajax.status == 200 && ajax.readyState == 4){
            let tbody = document.getElementById("seccionTbody");
            while (tbody.firstChild) {
                tbody.removeChild(tbody.firstChild);
            }
            let datos = JSON.parse(ajax.response)
            for(let i=0; i<datos.length;i++){
                var p = datos[i];
                let peli = new Pelicula();
                peli.setAtributos(p.titulo, p.director,p.codId,p.genero,parseFecha(p.fecha),p.valoracion);
                escribirPeli(peli);
            }
        }

    }
    
    ajax.send();
}

function parseFecha(date){
    var d = new Date(date);
    month = ''+(d.getMonth()+1);
    day = '' +d.getDate();
    year = d.getFullYear();
    if(month.length <2){
        month = '0'+month;
    }
    if(day.length <2){
        day = '0'+day;
    }
    return[year,month,day].join('-');
}


function guardarPelicula(p){
    var ajax = new XMLHttpRequest();
    ajax.open("POST","http://192.168.1.63:8080/peliculas",true);
    ajax.setRequestHeader(
        'Content-Type','application/json; charset=utf-8')
    ajax.onreadystatechange = function (){

        if(ajax.status == 200 && ajax.readyState == 4){
            var datos = JSON.parse(ajax.response)
            imprimeTabla();
        }
    }
    ajax.send(
        JSON.stringify({codId: p.codId,
        director: p.director,
        fecha: new Date(p.fecha),
        genero: p.genero,
        titulo: p.titulo,
        valoracion: 3}));

}



function borrarPelicula(c){
    var ajax = new XMLHttpRequest();
    ajax.open("DELETE","http://192.168.1.63:8080/peliculas/"+c);
    ajax.onreadystatechange = function (){

        if(ajax.status == 200 && ajax.readyState == 4){
            imprimeTabla();
        }
    }
    
    ajax.send();
    return 1;
}

function actualizaPeli(p){
    var ajax = new XMLHttpRequest();
    //console.log("Modificando Elemento: "+p)
    ajax.open("PUT","http://192.168.1.63:8080/peliculas/"+p.codId, true);
    ajax.setRequestHeader('Content-type','application/json; charset=utf-8')
    ajax.onreadystatechange = function (){

        if(ajax.status == 200 && ajax.readyState == 4){
            imprimeTabla();
        }
    }

    ajax.send(JSON.stringify({
        titulo: p.titulo,
        director: p.director,
        codId: p.codId,
        genero: p.genero,
        fecha: new Date(p.fecha),
        valoracion: p.valoracion }));
}


function dameUno(c){
    var ajax = new XMLHttpRequest();
    ajax.open("GET","http://192.168.1.63:8080/peliculas/"+c);

    //ajax.onreadystatechange = funcionQueHaceLoqueYoQuiera;
    ajax.onreadystatechange = function (){
        if(ajax.status == 200 && ajax.readyState == 4){
            dato = JSON.parse(ajax.response)
            
            modificaPeliForm(dato);
        }
    }

    ajax.send();
    //console.log("Dato: "+dato)
}