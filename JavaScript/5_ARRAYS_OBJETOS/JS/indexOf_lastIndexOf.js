//indexOf nos permite encontrar o indice de um elemento, que passamos como argumento para o método

//lastindexOf é utilizado quando há repetições de elementos e precisamos do índice da última ocorrencia 


const myElements = ["Morango", "Maçã", "Uva", "Pera", "Maçã"]
console.log(myElements)
console.log(myElements.indexOf("Maçã"))
console.log(myElements.lastIndexOf("Maçã"))
console.log(myElements[myElements.indexOf("Maçã")])