// const country = prompt("Escribe tu pais");


// if (country === "colombia") {
//      document.write("Esres de colombia");
// } else if (country === "panama") {
//     document.write("Esres de panameño");
// } else if (country === "venezuela") {
//      document.write("Esres de venezolano");
// } else if (country === "peru") {
//         document.write("Esres de peruano");
// } else {
//      document.write("Tu no eres de ningun pais");
// }

// RETO


// const age = prompt("Escribe tu edad");
// const genre = prompt("Escribe tu genero");

// if (age < 18 ) {
//      document.write("NO PUEDES ENTRAR");
// } else if (genre === "mujer") {
//     document.write("ENTRA GRATIS");
// } else if (age > 18) {
//      document.write("Tienes que pagar 30.000 de cover");
// } else {
//     document.write("Ingresaste los datos mal")
// }


const color = prompt("Escribe tu color");
const color2 =color.toLocaleLowerCase();
const talla = prompt("Escribe tu talla");
const talla2 = talla.toLocaleLowerCase();

if (color2 === "azul" && talla2 ==="l" ) {
     document.write("Nos quedan 4 camisas");
} else if (color2 === "azul" && talla2 ==="m") {
    document.write("Nos quedan 10 camisas");
} else if (color2 === "azul" && talla2 ==="s") {
     document.write("Nos quedan 6 camisas");
} else if (color2 === "amarillo" && talla2 ==="m") {
    document.write("Nos quedan 3 camisas")
} else{
    document.write("Se acabaron viejito")
}



