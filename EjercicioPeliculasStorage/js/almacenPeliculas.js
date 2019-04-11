function inicializar(){
    if(localStorage){
        if(localStorage.getItem("color")){
            alert("El color guardado es: "+localStorage)
        }else{
            localStorage.setItem("color","Mi Color")
        }
    }
}