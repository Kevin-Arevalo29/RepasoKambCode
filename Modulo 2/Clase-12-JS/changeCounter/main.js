const counterElemen = document.getElementById ("counter")

let count = 0
const incrementar = () =>{
    count += 1
    counterElemen.innerHTML = count
}
let contador = 0
const decrementar = () =>{
    if (count > 0) {
        count -= 1
        counterElemen.innerHTML = count
    }
}