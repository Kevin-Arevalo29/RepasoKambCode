// ESTO ES IF and ELSE
// Podemos comparar variables 
// - Igualdad == (Igualdad entre valores)
// - Igualdad === (Exactamente igual)
// - Mayor >
// - Menor <
// - Mayor o igual >=
// - Menor o ingal <=
// - Diferencia !=

// El usuario debe tener mas de 18 años 
// var age = Number(prompt("Digita la edad"));
// if (age >= 18) {
//     document.write("<h1>Usted puede entrar a la pagina</h1>")
// } else{
//     document.write("Vete de aqui mocoso")
// };


// var añoDeNacimiento = Number(prompt("Digitaa un tu fecha de nacimiento"));
// if (añoDeNacimiento === 2000) {
//     document.write("<h1>Usted puede entrar a la pagina</h1>")
// } else{
//     document.write("<h1>Vete de aqui mocoso</h1>")
// };

var pais = prompt("Digitaa un tu pais");
if (pais === "colombia") {
    document.write("Su pais es ", pais)
} else{
    document.write("Usted puede ser de venezuela o argentina")
};