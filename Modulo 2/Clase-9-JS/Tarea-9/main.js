// IF- ELSE IF- ELSE

// 1. Escribe un programa que determine si un número es positivo, negativo o cero.

// const numero = -12;
// if (numero >= 0){
//     console.log("El numero es positivo")
// } else{
//     console.log("El numero es negativo")}

// 2. Escribe un programa que compare dos números y muestre el mayor de ellos. 
// Crea un prompt para que el usuario digite estos numeros, por ejemplo: 
// let num1 = Number(prompt("Digita un numero") y let num2 = Number(prompt("Digita otro numero"), 
// el programa debera mostrar el numero mayor.

// const num1= 15;
// const num2= 15;

// if (num1 > num2) {
//     console.log("El nuemro mayor es", num1)
// } else if (num2 > num1) {
//     console.log("El nuemro mayor es", num2)
// } else {
//     console.log("Los numeros son iguales")
// }

// FOR OR WHILE

// 1. Utilice el ciclo For para imprimir en la consola los números del 100 al 1 en orden descendente. Como por ejemplo: "100, 99, 98, 97,...3, 2, 1"

// for (let numeros = 0; numeros <= 10; numeros++) {
//     console.log(numeros)
//     for (let  index = numeros; index >= 0; index--) {
//         console.log(index)
//     }
// }

// 2. Utilice el ciclo For para sumar todos los números pares del 1 al 20 e imprimir el resultado. Como por ejemplo: 
// los números pares del 1 al 20 son: 2, 4,..., 18, 20 y su suma es igual a "110", mostrar unicamente en consola el resultado 
// de la suma, es decir "110"
console.log("Hello world")
let suma = 0
for (let numero = 2; numero <= 20; numero += 2 ) {
    suma = suma + numero
}
 console.log("la suma es ",suma);

// ARRAY

// 1. Teniendo un array let myArray = [1, 2, 3, 4, 5], escribe un programa que invierta el orden de los elementos en un 
// nuevo array let invertido = [], utiliza un ciclo for para recorrer el array let myArray.

// let myArray = [1, 2, 3, 4, 5]
// let newArray = []

// for (let index = myArray.length -1; index >= 0; index--) {
//     newArray.push(myArray[index])
// }
// console.log(newArray)