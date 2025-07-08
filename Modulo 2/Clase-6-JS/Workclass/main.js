// Vamos hacer las tablas de multiplicar del 1 al 10

for (let tabla = 1; tabla <= 10; tabla++) {
    document.write("Tabla de multiplicar del " , tabla, "<br>")
    for (let operacion = 1; operacion <= 10; operacion++) {
        const resultado = operacion * tabla
        document.write(tabla, " * ", operacion, " = ",resultado, "<br>")
    }    
}