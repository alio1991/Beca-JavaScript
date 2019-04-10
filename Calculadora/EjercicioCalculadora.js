var total=0;

//console.log("SUMAS");
//console.log("undefined = "+suma(8));
//console.log("4 = "+suma(1,1,1,1));
//console.log("4 = "+suma(2,2));
//console.log("10 = "+suma(1,2,3,4));
//console.log("-------------------------------");
//console.log("RESTAS");
//console.log("undefined = "+resta(10));
//console.log("5 = "+resta(20,10,5));
//console.log("0 = "+resta(20,10,5,5));
//console.log("10 = "+resta(20,2,2,2,2,2));
//console.log("-------------------------------");
//console.log("MULTIPLICACIONES");
//console.log("undefined = "+multiplica(10));
//console.log("120 = "+multiplica(1,2,3,4,5));
//console.log("0 = "+multiplica(0,1,2,5,4,6,7,8,9,5,4,7,8,9,5,2,5));
//console.log("50 = "+multiplica(5,5,2));
//console.log("-------------------------------");
//console.log("DIVISIONES");
///console.log("undefined = "+divide(10));
//console.log("25 = "+divide(100,2,2));
//console.log("37.5 = "+divide(300,2,2,2));
////console.log("12.5 = "+divide(50,2,2));

///console.log("100 = "+suma1(100))
//console.log("60 = "+resta1(40))
//console.log("30 = "+divide1(2))
//console.log("40 = "+suma1(10))
//console.log("400 = "+multiplica1(10))

function Calculadora(){
    this.valorTotal=0;
}

//Calculadora.prototype.valorTotal = 0;
Calculadora.prototype.suma = function(){
    this.valorTotal = this.valorTotal + arguments[0];
    return this.valorTotal
}
Calculadora.prototype.resta = function(){
    this.valorTotal = this.valorTotal - arguments[0];
    return this.valorTotal
}
Calculadora.prototype.multiplica = function(){
    this.valorTotal = this.valorTotal * arguments[0];
    return this.valorTotal
}
Calculadora.prototype.divide = function(){
    this.valorTotal = this.valorTotal / arguments[0];
    return this.valorTotal
}

var calculadora = new Calculadora();
console.log("1 = "+calculadora.suma(1))
console.log("10 = "+calculadora.suma(9))
console.log("100 = "+calculadora.multiplica(10))
console.log("50 = "+calculadora.divide(2))
console.log("30 = "+calculadora.resta(20))



function suma(a,b){
    let suma=arguments[0];
    if(arguments.length>1){
        for(let i=1;i<arguments.length; i++){
            suma = suma+arguments[i];
        }
        return suma;
    }
    
    
}

function resta(a,b){
    let resta=arguments[0];
    if(arguments.length>1){
        for(let i=1;i<arguments.length; i++){
            resta = resta-arguments[i];
        }
        
    }
    return resta;
}

function multiplica(a,b){
    let mul=arguments[0];
    if(arguments.length>1){
        for(let i=1;i<arguments.length; i++){
            mul = mul*arguments[i];
        }
        
    }
    return mul;
}

function divide(a,b){
    let div=arguments[0];
    if(arguments.length>1){
        for(let i=1;i<arguments.length; i++){
            div = div/arguments[i];
        }
        
    }
    return div;
}


function suma1(a){

}

function resta1(a){
    total = total - arguments[0];
    return total
}

function multiplica1(a){
    total = total * arguments[0];
    return total
}

function divide1(a){
     
    total = total / arguments[0];
    return total
}