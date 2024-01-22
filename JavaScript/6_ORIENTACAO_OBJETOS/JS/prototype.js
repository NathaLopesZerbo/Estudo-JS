//PROTOTYPE - Entender da onde vem (Ancestral),
// Fallback
const text = "asd"
console.log(Object.getPrototypeOf(text))

const bool = true
console.log(Object.getPrototypeOf(bool))

const number = 1
console.log(Object.getPrototypeOf(number))

const arr = [] // Array
console.log(Object.getPrototypeOf(arr))

const obj = {} // Objeto
console.log(Object.getPrototypeOf(obj))


const myObject = {
    a: "b"
}

console.log(Object.getPrototypeOf(myObject))


// Cadeia de Prototipos - JS faz isso por baixo dos panos.
const mySecondObject = Object.create(myObject)

console.log(mySecondObject)
console.log(mySecondObject.a)

console.log(Object.getPrototypeOf(mySecondObject) === myObject)
