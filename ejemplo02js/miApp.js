//console.log("Hola Mundo")
variablesGlobales = "variable global";
var loquesea = "Otra variable global";


function miFuncionConVar(){
    var otraVariable = "Variable Local"
    for(var i=0; i<10; i++){
        console.log(i)
    }
}

function miFuncionConVar(){
    var otraVariable = "Variable Local"
    for(var i=0; i<10; i++){
        console.log(i)
    }
}

console.log("---------------------------------------------")
var fechaDeEstreno = new Date();
console.log(fechaDeEstreno)
console.log("tipo: "+typeof fechaDeEstreno)
fechaDeEstreno = fechaDeEstreno.getFullYear();
console.log(fechaDeEstreno)
console.log("tipo: "+typeof fechaDeEstreno)
console.log("---------------------------------------------")



function farray(){

    let array = new Array();
    array[0]=7;
    array[1]="otra cosa";
    array[3]=true;
    console.log(array)
}



function MiClase(c1,c2){
    this.Clave1 = c1;
    this.Clave2 = c2;
    //this.concatena = function(){
    //    return this.Clave1 + this.Clave2;
    //}
}

MiClase.prototype.concatena = function(){
    return this.Clave1 + this.Clave2;
}

var miObjeto = new MiClase("Primero", "Segundo");
console.log(miObjeto.concatena())

Array.prototype.modificacion = function(){
    console.log("Soy un metodo nuevo de la clase Array")
}


let ArrayEj = [];
ArrayEj.modificacion()

let estructura = [
{
    uno:1,
    dos:2,
    tres:3
},
{
    cuatro:4,
    cinco:5,
    seis:6
}
]
console.log(estructura)
