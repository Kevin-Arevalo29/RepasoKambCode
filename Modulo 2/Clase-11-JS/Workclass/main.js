const producto ={
    name: "Celular",
    color: ["Negro", "Blanco", "Gris", "Morado"],
    marca: "Iphone",
    cantidadStock: 100,
    precio: 500000,
    decuento: 10, //10%
    disponibleEntregainmediata: true,
    disponibilidad: (entrega) =>{
        if (entrega === true) {
            
        }
    }
}
// console.log("¿Cual es la marca del producto?", producto.marca)

// Reto, si el producto esta disponible para entrega inmediata,
// Vamos a imprimir en nuestra consola "Lo recibiras hoy", por lo contrario 
// Vamos a imprimir "lo recibiras en unos dias"

// if(producto.disponibleEntregainmediata === true){
//     console.log("Tu dispositivo lo recibiras hoy")
// } else{
//     console.log("Tu dispositivo lo recibiras en unos dias")
// }

const producto2 ={
    name: "Celular",
    id: 1234,
    color: ["Negro", "Verde", "Gris", "Blanco"],
    marca: "Iphone",
    cantidadStock: 150,
    precio: 500000,
    decuento: 100000, //10%
    disponibleEntregainmediata: true,
    obtenerPrecioTota: ()=>{
        const precioTotal = producto2.precio - producto2.decuento
        return precioTotal;
    },
    isColorAvailable: (colorSolicitado) =>{
        const colorDisponible = producto2.color.includes(colorSolicitado)
        return colorDisponible
    }
}

// const total = producto2.obtenerPrecioTota(); // Esta forma es para almacenar el resutado en una constante
// console.log("1El precio total del producto es: ", total)
// console.log("2El precio total del producto es: ", producto2.obtenerPrecioTota()) //Esta es la segunda forma sin almacenarlo en una constante

const colorVerde = producto2.isColorAvailable("Verde");
console.log("¿Esta el color Verde?", colorVerde)

console.log("¿Esta el color Morado?", producto2.isColorAvailable("Morado"))

// Retoooo

// 1.Crear un objeto que se llame Pelicula
// 2.Que tenga las siguientes propiedades
// -nombre
// -año lanzamiento
// -edad minima = 15
// -Hacer una la funcion que se llame disponibleParaUsuarios(edadUsuario) =>
    // Esta debe retornar si puedo ver la pelicula o no (False || True)

const pelicula = {
    nombre: "Camino hacia el terro",
    añoDeLanzamiento: 2005,
    edadMinima: 15,
    disponibleParaUsuarios: (edadUsuario) =>{
        if (edadUsuario > pelicula.edadMinima) {
            console.log("Puedes ver la pelicula")
        }else{
            console.log("No puedes ver la pelicula")
        }
        return
    }
}

pelicula.disponibleParaUsuarios(8)
pelicula.disponibleParaUsuarios(18)

