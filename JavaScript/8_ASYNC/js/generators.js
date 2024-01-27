// Generators funcionam de forma semelhante as promises
//Ações podem ser pausdas e continuadas depois
//Temos novos operadores, como: function* e yield

function* generator(){
    yield 1
    yield 2
    yield 3
}

const gen = generator()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)