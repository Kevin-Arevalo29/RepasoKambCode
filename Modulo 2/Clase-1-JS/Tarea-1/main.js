var nombreUsuario = prompt ("Escribe tu Nombre Completo");
var altura = prompt ("Escribe tu altura en centimetros");
var peso = prompt ("Escribe tu peso");
// var conversor = altura / 100;
var IMC = peso/ (altura * altura);
document.write("Hola ", nombreUsuario, "Tu IMC es: ", IMC.toFixed(2)) 