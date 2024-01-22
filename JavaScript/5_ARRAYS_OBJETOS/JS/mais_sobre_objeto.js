const obj = {
    a: "teste",
    b: true,
}

console.log(obj instanceof Object);

const obj2 = {
    c:[]
}

//Podemos copiar todas as propriedades de um objeto para o outro com o método .Object.ASSING(obj_final, obj_copiado)

Object.assign(obj2,obj)

console.log(obj2)
