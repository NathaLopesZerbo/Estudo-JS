const obj = {
    a: "teste",
    b: true,
}
console.log(obj instanceof Object);

const obj2 = {
    c:[]
}

Object.assign(obj2,obj) // Faz uma junção de um objeto com o outro
console.log(Object.keys(obj))
console.log(Object.keys(obj2))

console.log(Object.entries(obj2))