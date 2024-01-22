//Uma classe pode herdar propriedades de outra por meio de herança

//Utilizamos a palavra chave EXTENDS, para adicionar a classe que vai trazer as propriedades

//E SUPER para enviar os valores para a classe pai


class Mamifero {
    constructor(patas){
        this.patas = patas
    }
}

class Lobo extends Mamifero{
    constructor(patas, nome){
        super(patas, patas)
        this.nome = nome
    }
}

const wolf =  new Lobo(4,"Wolf")
console.log(wolf)

console.log(Object.getPrototypeOf(wolf))