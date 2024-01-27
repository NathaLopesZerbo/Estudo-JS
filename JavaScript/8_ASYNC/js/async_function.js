// As async funtions são funções que retornam Promises
//Consequentemente há possibilidades de receber o resultado delas depois, além da utilização dos métodos de Promise

async function somarComDelay(a, b){
    return a + b
}

somarComDelay(2, 4).then((value) => {
    console.log(`O valor da soma é ${value}`)
})

console.log("Teste async")