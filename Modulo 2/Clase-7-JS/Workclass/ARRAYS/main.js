// Arrays -> Arreglos
// Los arreglos son listas o estructuras de datos que permiten 
// Almacenar multiples valores del mismo tipo en una variable

// Ejemplo de una variable que tiene una lista de productos

// const shopeeList= ['Leche', 'pan', 'Arroz', 'Manzanas', 'Peras']
// console.log("Mi lista de compras tiene los siguientes productos ", shopeeList)

// const years = [2000, 2001, 2023, 2024]
// console.log("aggreglo tipo numerico :", years)

// const mixedArray = ["Kambcode", 32, true, "Kevin", false, 4]
// console.log("Mi array convinado ", mixedArray)

// const arrayVacio = []

// UTIIDADES DE LOS ARREGLOS O ARRAYS

// 1. Como saber cuantos elementos tiene un arreglo utilizamos la proiedad (Nombre del arrglo y .length)
// const shopeeList2= ['Leche', 'pan', 'Arroz', 'Manzanas', 'Peras']
// console.log("Mi lista de compras: ", shopeeList2)
// console.log("La cantidad de datos de mi array es: ", shopeeList2.length)

// 2. Como agregar elemtos a un arrray utilizamos la propiedad (.push())
// const shopeeList3= ['Leche', 'pan', 'Arroz', 'Manzanas', 'Peras']
// console.log("Mi lista de compras: ", shopeeList3)
// shopeeList3.push('Bananos', 'Papas' )
// console.log("La nueva lista de array es: ", shopeeList3)

// 3. Podemos consultar un elemento en particular del Arreglo
// const todoList = ["Hacer la tarea", "Lavarse los dientes", "Dormir"];
// console.log(todoList)
// console.log("Cantidad de elementos de todoList", todoList.length)
// console.log("El primer elemento del todoList es: ", todoList[0])
// console.log("El segundo elemento del todoList es: ", todoList[1])
// console.log("El tercer elemento del todoList es: ", todoList[2])

// 4. Podemosr reemplazar un elemento de un array
// todoList[1]= "Lavar la losa"
// console.log("La nueva lista de arrays: ", todoList)

// 5. Si queremos saber si el arreglo contiene tun elemento  Utilizamos la propiedad (.includes())
const shopeeList4= ['Leche', 'pan', 'Arroz', 'Manzanas', 'Peras']
if (shopeeList4.includes("azucar")) {
    console.log("Tienes pan en tu lista")  
} else{
    console.log("No tienes azucar")
}