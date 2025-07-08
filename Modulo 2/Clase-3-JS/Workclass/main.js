// Explicacion  == & ===

// == -> Comparar valores sin tener en cuenta los tipos
// === -> Los valores son iguales pero los tipos son diferetes 

// != -> ==
// !== -> ===

// document.write( 5 == "5");  //True
// document.write( 5 === "5"); //False

// HAZ UN PROGRAMA QUE VERIFIQUE SI UN NUMERO ES PAR O ES IMPAR

// % Este simbolo se llama modulo

// var numero = Number(prompt("Escribe un numero"));

// if (numero % 2 === 0) {
//     document.write("El numero es par ")
// } else{
//     document.write("El numero es impar ")
// }

// var nombre = "Kambcode";
// var peso = 70;
// var altura = 1.74;
// var alturaCm = altura * 100;

// console.log("Su nombre es ", nombre)
// var imc = peso / ( alturaCm * alturaCm)
// console.log("Su IMC es ", imc.toFixed(5))

// OPERADORES LOGICOS
// operador AND (y) -> &&
// Operador OR (ó) -> ||

// Ejemplo con && (Y)
const paisOrigen = prompt("Digite su pais de origen");
const edad = Number(prompt("Digite su edad"));

// if(paisOrigen === 'Colombia' && edad < 18){
//     document.write("Tienes que pagar $8.000")
// } else{
//     document.write("Tienes que pagar $15.000")
// }

// Ejemplo con || (ó)
if (paisOrigen === "Colombia" || edad >= 64 || edad <18) {
    document.write("Tienes que pagar $8.000")
} else{
    document.write("Tienes que pagar $15.000")
}
document.write("Tu eres de ", paisOrigen ," y tienes ", edad , " años")