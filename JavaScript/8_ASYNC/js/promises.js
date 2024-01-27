//As promises (promessas) são execuções assíncronas
//É literalmente uma promessa de um valor que pode chegar em um ponto futuro
//Utilizamos o objeto PROMISES e alguns métodos para nos auxiliar

const promessa = Promise.resolve(5 + 5)
console.log("Algum Código")

promessa.then(value => {
    console.log(`A soma é ${value}`)
    return value;
})
.then((value) => value - 1)
.then((value) => console.log(`Agora é ${value}`))

console.log("Outro Código")