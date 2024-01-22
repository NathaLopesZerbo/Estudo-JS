// NEW: O new é utilizado para instancias novos objetos,em JS

//Podem partir de funções


function Cachorro(nome,raca){
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("Ozzy","Husky")
console.log(husky)
console.log(Object.getPrototypeOf(husky))

