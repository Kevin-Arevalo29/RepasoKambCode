// Escribe una funcion que reciba un nombre y que salude a la persona

// const persona1 ="Kevin"
// const persona2 ="Juan";
// const persona3 ="Daniel";

// function sayHello(nombre) {
//     console.log("Hola", nombre, "como estas");
// };

// sayHello(persona1);
// sayHello(persona2);
// sayHello(persona3);

// Vamos a calcular el IMC
// imc = peso / (altura * altura)

function calImc(peso, altura) {
    const result= peso / (altura*altura);
    return result
}

const imc = calImc(50, 20);
console.log("IMC", imc);

if(imc <= 10){
    console.log("El imc es menor a 10")
} else{
    console.log("El imc es mayor a 10")
}