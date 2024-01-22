function Cachorro(nome,raca){
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("Ozzy","Husky")
console.log(husky)
console.log(Object.getPrototypeOf(husky))


//Adiconamos métodos com a expressão prototype

Cachorro.prototype.uivar = function(){
    console.log("auuu!")
}
console.log(Cachorro.prototype)
husky.uivar();