//Rest Operator ou Rest Parameters, é caracterizado pelo símbolo (...)
//Podemos utilizar para receber indefinidos argumentos em uma função

const somaInfinita = (...args) =>{
    let total = 0

    for(let i = 0; i < args.length; i++){
        total += args[i]
    }
    return total;
}

console.log(somaInfinita(1,2,3))
console.log(somaInfinita(1,2,3,3453,34567,456457,67867))