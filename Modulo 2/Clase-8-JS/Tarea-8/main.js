// Tarea

// 1. Asumiendo que el IVA para los productos de la canasta familiar es de el 19%, crea una 
// funcion que reciba como parametro el precio de un articulo y retorne el valor de el IVA para 
// ese articulo. Ejemplo si el articulo cuesta $1000 tu función debe retornar $190. 
// Recuerda que la formula que debes usar es la siguiente valorIVA = precioArticulo * 19 / 100

// function iva(precioArticulo){
//     valorIVA = precioArticulo * 19 / 100;
//     console.log("El precio del producto es: $", valorIVA)
// }
// iva(1000);
// iva(2000);
// iva(200);

// 2.Escribir una función que reciba dos parametros, el precio de un articulo y el porcentaje de descuento, 
// tu funcion debe retornar el precio de el articulo con el descuento aplicado, ejemplo si el articulo cuesta 
// 1000 y el descuento es de 20 (porciento), la funcion debe calcular que el descuento es de 200 
// (usndo la siguiente formula valorDescuento = precioArticulo * porcentajeDescuento / 100)
// y retornar el valor inicial de el producto menor el descuento, es decir, debe retornar 800.

// function productoConDescuento(precioArticulo, porcentajeDescuento){
//     console.log("Precio del producto:", precioArticulo)
//     valorDescuento = (precioArticulo * porcentajeDescuento / 100)
//     console.log("El descuento es de:", valorDescuento)
//     const descuento = precioArticulo - valorDescuento;
//     console.log("El valor del producto con descuento te queda en:", descuento)
//     return descuento
// }
// productoConDescuento(1000, 20);
// productoConDescuento(10000, 50);
// productoConDescuento(8000, 40);

// 3.Escribir una función que reciba un array de numeros y retorne la suma de esos numeros. 
// Ejemplo: si mi funcion recibe el array [1, 5, 2] la salida debe ser 8

function numeros(arr){
    let suma = 0; 
    for (let index = 0; index < suma.length; index++) {
        suma+= arr[index]
    }
    console.log("La suma de este array es:", arr)
    return suma
}
numeros([1,5,2])