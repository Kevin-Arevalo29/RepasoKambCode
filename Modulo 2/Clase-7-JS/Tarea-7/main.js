// 1. Genera un arreglo (lista) que tenga los numeros del 0 al 1000
// for (let index = 0; index <= 1000; index++) {
//     console. log("Numero" ,index)
// }

// 2. Crea un array myArray de 50 elementos (números), que contendrá 50 numeros números 
// aleatorios entre 1 y 10. Ejemplo [ 3, 2 , 6, 8, 1, 3, 5, 2 .....] (50 elementos)

// const numeros = [];

// for (let i = 1; i <= 50; i++) {
//     const aleatorio = Math.random() * 10;
//     numeros.push(Math.round(aleatorio))
// }
// console.log("Numeros aleatorios", numeros)

// 3. Usando el array que creaste en el punto 2, vamos a crear un nuevo arreglo llamado newArray 
// que contenga solo los numeros que son menores a 4. Ejemplo si en punto 2 generaste un arreglo 
// myArray como este [7,2,5,2,9,3,1,4,8], tu nuevo arreglo newArray debera ser [2,2,3,1]. Tip Utiliza 
// un for para recorrer el primer myArray arreglo e ir llenando el segundo (newArray.push) pero solo si el valor es menor a 4.

// const newArray = [];

// OPCION 1

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] < 4) {
//         newArray.push(numeros[i])
//     }
// }

// OPCION 2

// for (let i = 0; i < numeros.length; i++) {
//     const num = numeros[i]
//     if (num < 4) {
//         newArray.push(num)
//     }
// }
// console.log("Numeros menores a 4: ", newArray)

// 4. Dado un array 5 elementos de strings eg. const myArray = ["hola", "mundo", "como", "estas", "hoy"]. Copia los elementos 
// del arreglo en un nuevo arreglo pero en orden inverso, y muéstralo por la pantalla. Tip puedes hacer un for que inicie 
// en myArray.length y que en cada iteracion en ves de sumar reste una posicion así podras leer tu arreglo en sentido contrario

const myArray = ["hola", "mundo", "como", "estas", "hoy"]
const newArray=[]

for (let i = myArray.length -1; i >= 0; i--){
    newArray.push(myArray[i])
}
console.log("Array al reves: ", newArray)
