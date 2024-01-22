//Os prototypes são originados de um classe

//JS já possui suas classes, pórem podemos criar as nossas

//Isso é essencial par OOP

const cachorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro)
pastorAlemao.raca = "Pastor Alemão"
console.log(pastorAlemao)
console.log(pastorAlemao.patas)

const viraLata = Object.create(cachorro)
viraLata.raca = "Vira Lata"

console.log(viraLata)
