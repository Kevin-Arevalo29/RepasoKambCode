// TAREA 1

// Dada una variable con la edad de un usuario, escribe un
// programa que muestre por pantalla todos los años que ha cumplido (desde 1 hasta su edad).

// var edad = prompt("Digite su edad");

// for (let index = 1; index <= edad; index++) {
//     document.write(" haz cumplido ", index, " Años", "<br>")
    
// }


// TAREA 2

// Escribir un programa que pregunte al usuario una cantidad a invertir (mensualmente) y el
// número de meses durante los que quiere invertir. El programa debe mostrar por pantalla el 
// capital obtenido en la inversión cada mes hasta el final de la misma. Ejemplo si yo decido invertir $80 
// mensuales por 3 meses el programa me debe mostar lo siguiente:

// Mes 1: $ 80 Mes 2: $ 160 Mes 3: $ 240

// Fin, Total a ahorrar $ 240

// NOTA: no es necesario preguntar al usuario las variables de entrada de tus programas, por favor crea 
// constantes simulando el valor que el usuario ingresó

// var cantidad = Number(prompt("¿Cuanto dese invertir?"))
// var mes = Number(prompt("¿A cunatos meses?"))

// for (let index = 1; index < mes; index++) {
//     const resultado = index * cantidad
//     document.write("El mes ", index , " Ahorras $", resultado, "<br>")    
// }

// Escribir un programa que muestre por pantalla la tabla del 7

const tabla = Number(prompt("¿Que tabla deseas ver?"))

for (let index = 1; index <= 10; index++) {
    const resultado = index * tabla;
    document.write(index,  " * ", tabla, " = ", resultado, "<br>")
}