/* 
    Criando Nós de Texto

    - Os textos podem ser manipulados com métodos também

    - Temos o createTextNode, que cria um nó de texto

    - E este nó pode ser inserido em um elemento
*/
const mainContainer = document.querySelector('#main-container')
console.log(mainContainer)

const myText = document.createTextNode("Agora vamos colocar mais um Título")
console.log(myText)

const h3 = document.createElement("h3")
h3.appendChild(myText)
console.log(h3)

mainContainer.appendChild(h3)