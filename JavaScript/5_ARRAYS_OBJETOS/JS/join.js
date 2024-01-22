//JOIN une um array em uma String

const frase = "O rato roeu a roupa do Rei de Roma"

const arrayDaFrase = frase.split(" ")

console.log(arrayDaFrase)

const fraseDenovo = arrayDaFrase.join(" ")
console.log(fraseDenovo)


const itensParaComprar = ["Mouse", "Teclado", "Monitor"]

const fraseDeCompra = `Precisamo comprar: ${itensParaComprar.join("; ")}.`

console.log(fraseDeCompra)

