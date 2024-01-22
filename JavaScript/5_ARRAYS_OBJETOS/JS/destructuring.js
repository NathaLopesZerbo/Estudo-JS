// DESTRUCTURING em objetos é uma funcionalidade que nos permite desestruturar algum dado const {} - assim que utilizamos essa sintaxe

const userDetails = {
    firstName: "Nathã",
    lastName: "Zerbo",
    job: "Programador"
}

const {firstName, lastName, job} = userDetails
console.log(firstName,lastName,job)

//renomear variaveis

const {firstName: primeiroNome} = userDetails
console.log(firstName)


// DESTRUCTURING em arrays é uma funcionalidade que nos permite desestruturar 
// const [] - assim que utilizamos essa sintaxe em arrays

const myList = ["Avião", "Submarino", "Carro"]

const[veiculoA, veiculoB, veiculoC] = myList

console.log(veiculoA, veiculoB, veiculoC)