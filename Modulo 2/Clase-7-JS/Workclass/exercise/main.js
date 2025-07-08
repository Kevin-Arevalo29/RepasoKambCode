// let shopeeList =[];
// const elemet = prompt ("Agrega algo a la lista de compras")
// console.log(elemet)

let shoppe = [];
for (let index = 0; index <= 3; index++) {
    const elemet = prompt ("Agrega algo a la lista de compras")
    shoppe.push(elemet);
}
console.log('Lista de productos ', shoppe)

const cantidad = shoppe.length
for (let element2 = 0; element2 < cantidad; element2++) {
    document.write("<li>", shoppe[element2])  
}


