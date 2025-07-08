// TAREA 1
// document.write("<h1>Tarea 1 <br>")

// var correctPassword = "Kambcode"
// var contraseña = prompt("Escribe la contraseña")
// if (contraseña === correctPassword) {
//     document.write("Inicio de sesion exitoso")
// } else{
//     document.write("La contraseña esta mal")
// }

// TAREA 2
// document.write("<h1>Tarea 2 <br>")


// var number = Number(prompt("Escribe un numero"));
// var divisor = Number(prompt("por cuanto lo quieres dividir"));
// if (divisor === 0) {
//     document.write("no puedes dividir por 0")
// } else{
//     document.write("La divicion es ", number / divisor)
// }

// TAREA 3

var age = Number(prompt("Cual es tu edad"));
if( age < 4){
    document.write("Puedes entrar gratis")
} else {
    if (age < 18) {
        document.write("Tienes que pagar 5.000")
    } else{
        if (age >= 18) {
            document.write("Tienes que pagar 10.000")
        }
    } 
} 