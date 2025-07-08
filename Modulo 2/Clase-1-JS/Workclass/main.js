// Tipos de Datos

// - Cadenas de texto o String
// Cuando son textos van con comillas
// "KambCode"
// 'KambCode'

// - Numerico
// cuando con numeros van sin comillas y si son decimales van con punto (.)
// 32
// 35
// 100
// 200000
// 0.00002

// Boleeanos
// Estos van sin comillas
// True -> Verdadero 
// False -> Falso

// VARIABLES: Almacenar, Modificar

var precio = 25.99;

document.write("El precio del producto es: ",  precio);

var costoDeEnvio = 10;

document.write("<br> El costodel envio  del producto es: ", costoDeEnvio);

// OPERADOR DATOS Y OPERADOR VARIABLES

// SUMA +
// RESTA -
// MULTIPLICACION *
// DIVICION /

var preciFinal= costoDeEnvio+precio;
document.write("<br> El prodcuto con el envio incluido te queda en: ", preciFinal);

var costoTotalX2 = preciFinal * 2;
document.write("<br> El costo total del producto por 2 es igual a: ", costoTotalX2)

// ACTIVIDAD
// Crear una variable llamada costo total 

var precio = 20
var costoEnvio = 10
var precioFinal= precio - costoEnvio
document.write("<br> El precio final es: ", precioFinal)

// ESTO ES UNA ALERTA
// alert("Esto es una alerta")

//  ESTO ES UN PROMPT
var nombre = prompt("Esto es una alerta, por favor escriba su nombre")
document.write("<br> Hola ", nombre, " como estas")