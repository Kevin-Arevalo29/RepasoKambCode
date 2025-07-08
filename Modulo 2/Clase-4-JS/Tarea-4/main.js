const edad = prompt("Escribe tu edad");

if (edad <12) {
    document.write("Eres un NIÑO")
} else if (edad >= 12 && edad <=17){
    document.write("Eres un ADOLECENTE")
} else if (edad >= 18 && edad <=64){
    document.write("Eres un ADULTO")
} else{
    document.write("Eres un ADULTO MAYOR")
}