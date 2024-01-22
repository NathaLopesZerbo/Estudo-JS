//Não podemos adicionar propriedade diretamente as classes
//Isso precisa ser feito atraves do prototype
//Métodos da classe tambem podem utilizar THIS
//Os métodos não precisam da palavra function

class Caminhao{
    constructor(eixos,cor){
        this.eixos = eixos
        this.cor = cor
    }
    descreverCaminhao(){
        console.log(`Esse caminhão tem ${this.eixos} eixos e sua cor é: ${this.cor}`)
    }
}

const scania = new Caminhao(6,"Laranja")
console.log(scania)
scania.descreverCaminhao()

Caminhao.motor = 4

const c2 = new Caminhao(4,"Preto")
console.log(c2)
console.log(c2.motor)

Caminhao.prototype.motor = 4

const c3 = new Caminhao(6,"Azul")
console.log(c3.motor)
