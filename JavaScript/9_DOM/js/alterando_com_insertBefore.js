/* 
    Alterando o HTML com insertBefore

    - O insertBefore cria um elemento antes de um outro elemento

    - É necessário criar um elemento com JS, isso pode ser feito com createElement

    - O elemento de referência pode ser relacionado com alguns dos métodos que vimos antes
*/
const title = document.getElementById("title")
const p = document.createElement("p")

const header = title.parentElement
console.log(header)

header.insertBefore(p, title)
