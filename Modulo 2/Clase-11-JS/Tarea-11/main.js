//  1. Crearemos un objeto llamado Serie cuyos atributos son:
// const serie ={
//     titulo: "La casa de papel",
//     numeroDeTemporadas: 7,
//     genero: "Suspenso",
//     creador: "No se",
//     añoDeLanzamiento: 2018
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------

// 2. Crearemos un objeto llamado Persona cuyos atributos son:
// calcularImc función que retorne el IMC recuerda que IMC = peso / (altura*altura)
// esMayorDeEdad función que retorna true / false dependiendo de si la edad de la persona es mayor a 18 años o no
// const person ={
//     nombre: "Kevin",
//     edad: 19,
//     peso: 50,
//     altura: 165,
//     mayorEdad: 18,
//     calcularImc: () =>{
//         const calcular = person.peso / (person.altura * person.altura)
//         return calcular
//     },
//     esMayor: (esMayor) => {
//         if (esMayor >= person.mayorEdad) {
//             console.log("Es mayor de edad")
//         }else{
//             console.log("Es menor de edad")
//         }
//     }
// }
// person.esMayor(8)
// person.esMayor(18)
// console.log(person.calcularImc())
// -------------------------------------------------------------------------------------------------------------------------------------------

// 3. Crear un objeto llamado libro, y que tiene las siguientes propiedades
// isAvailableForUser( userAge ) funcion que recibe como argumento la edad de la persona que quiere comprar 
// el libro, y debe retornar true o false dependiendo de si el usuario es mayor de edad y si la categoría es 
// "only_adults"; si la categoria no es "only_adults" entonces cualquier persona puede leer el libro.

const libro ={
    nombre: "Las Aventuras de Juan",
    fechaDePublicacion: 2000,
    precio: 50000,
    autores: ["Juan", "Pedro", "Pablo"],
    numeroDePaginas: 592,
    categoria: "adultos",
    isAvailableForUser: ( userAge ) => {
        if (userAge >= 18 ) {
            console.log("Puedes leer el libro")
        } else{
            console.log("No puedes ver este libro")
        }
    }
    
}
libro.isAvailableForUser(16);
libro.isAvailableForUser(18);
