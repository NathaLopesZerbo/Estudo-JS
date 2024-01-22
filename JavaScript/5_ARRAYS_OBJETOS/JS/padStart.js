//padStart insere um texo no começo da String


const testePadStart = "1"

const newNumber = testePadStart.padStart(4, "0")

console.log(testePadStart)
console.log(newNumber)

const testePadEnd = newNumber.padEnd(10,"0")
console.log(testePadEnd)    