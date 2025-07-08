// Funcion: Una funcion en Java Script es un bloquee de codigo 
// reutilizable que realiza una tarea especifica

const persona1 = "Kevin";
const persona1Age = 20;

// funcion name (argumentos o parametros){Lo que queremos hacer}
function calcularFechaNacimiento(age ) {
    const birthday = 2025 - age
    console.log(" Hola esta es mi funcion", persona1, " naciste en ", birthday)
}
calcularFechaNacimiento(34)

const persona2 = "Juan";
const persona2Age = 29;
calcularFechaNacimiento(persona2Age)

const persona3 = "Majo";
const persona3Age = 10;
calcularFechaNacimiento(persona2Age)

const persona4 = "Danuiel";
const persona4Age = 28;
calcularFechaNacimiento(persona2Age)
