const producto ={
    name: "Celular",
    color: ["Negro", "Blanco", "Gris", "Morado"],
    marca: "Iphone",
    cantidadStock: 100,
    precion: 500000,
    decuento: 10, //10%
    disponibleEntregainmediata: true
}

// Operaciones con los objetos
//  1. Puedo sobreescribir una propiedad
producto.marca = "Samsung"
producto.color[1]= ["Azul"]

// 2. Puedo agregar una propiedad
producto.sePuedeFinanciar = false

// 3. Puedo quitar una propiedad
delete producto.decuento;

console.log("Este es el objeto", producto)