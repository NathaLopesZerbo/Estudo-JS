//As instancias dos objetos são criadas baseadas nas classes
//Ou seja as propriedades tem os valores definidos no contructor
//Para altera-los podemos utilizar o prototype 

class Humano {
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
}

const natha = new Humano("Nathã", 17)
console.log(natha)

Humano.prototype.idade = "Não definida"

console.log(natha.idade)

console.log(Humano.prototype.idade)
