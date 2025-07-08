// Tipos de datos

// 1. String= "Kambcode" || 'Kambcode'
// 2. Numerico = 100
// 3. Boleanos = true or false
// 4. Funciones = function sayHello(parametro){condicion}

// function sayHello(name) {
//     console.log("Hola", name)
// }
// sayHello("Kevin");
// sayHello("Carlos");
// sayHello("Julieth");

// Arrow function = FUNCIONES FLECHA

// const sayHell = (name) => {
//     console.log("Hello", name)
// }
// sayHell("Paulina");
// sayHell("Jonas");
// sayHell("Majo");

// OTRO EJEMPLO

// const isAdult = (age) => {
//     const result = age > 18
//     console.log("Es adulto", age)
//     return result
// }
// isAdult(10)

// RETO 
// Crear una funcion que calcule el valor de un producto
// valorProducto + envio

// const calcular = (valorProducto, envio) => {
//     const valorTota = valorProducto + envio
//     console.log("El valor del producto mas el envio es de: ", valorTota)
//     return valorTota
// }

// const valorProducto1 = calcular(80000, 90000);

// Con un if me diga si el producto es costoso o no, cuando vvale mas de 100.0000

    // if (valorProducto1 > 100000) {
    //     console.log("El producto esta caro")
    // }else{
    //     console.log("El producto esta barato")
    // }

    // OBJECT

    const dog1 = {
        name: "Firulais",
        age: 5,
        color:["Negro", "Azul", "Gris"],
        raza: "Labrador",
        precio: 200000,
        estaDisponible: true,
        cantidad: 20,
        saludar: ()=>{
            console.log("Mi pero saluda")
        }
    }
dog1.saludar();
console.log("¿Cual es el color del perro?", dog1.color[0])