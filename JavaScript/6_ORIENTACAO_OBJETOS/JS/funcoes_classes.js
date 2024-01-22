function criarCachorro (nome,raca){
    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro;
} 

const bob = criarCachorro("bob","Vira Lata")
console.log(bob)


const jack = criarCachorro("jack","Pastor Alemão")
console.log(jack)

console.log(Object.getPrototypeOf(jack))