//Nas versões mais atuais de JS abandonaram as FUNCTIONS, e utilizamos as CLASSES.
//Recursos comuns de outras linguagens = CONSTRUCTOR
//Instancia: new


class Cachorro {
    constructor(nome,raca){
        this.nome = nome
        this.raca = raca
    }
}

const jeff = new Cachorro("Jeff", "Labrador")
console.log(jeff)
console.log(Object.getPrototypeOf(jeff))