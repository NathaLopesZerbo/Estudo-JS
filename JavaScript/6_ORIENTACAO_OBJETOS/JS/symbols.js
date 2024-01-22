//Quando utilizamos o recurso Symbol com classe, é possivel criar uma propriedade única e imutavel

//Isso é util quando há algum dado que se repetira em todos os objetos criados a partir da classe

//Symbol () - para utilizarmos
//Para nos mostrar []

class Aviao{
    constructor(marca, turbina){
        this.marca = marca
        this.turbina = turbina
    }
}

const asas = Symbol()
const pilotos = Symbol()
Aviao.prototype[asas] = 2
Aviao.prototype[pilotos] = 3

const boeing = new Aviao("Boeing", 2)
console.log(boeing)
console.log(boeing[asas])
console.log(boeing[pilotos])