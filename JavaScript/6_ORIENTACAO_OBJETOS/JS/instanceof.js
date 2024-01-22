//Assim como typeof que verifica o tipo, temos o operador instanceof
//Que verifica se um objeto é pai de outro, para ter certeza da ancestralidade
//Isso é verficado com objeto => classe, e não através das classes


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


console.log(wolf instanceof Lobo)
console.log(Lobo instanceof Mamifero)

console.log(new Lobo(4,"Teste") instanceof Mamifero)