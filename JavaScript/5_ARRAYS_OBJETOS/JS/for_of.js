// for...of é uma estrutura de repetição semelhante ao for, porem mais simples.

const somaInfinita = (...args) =>{

    let total = 0

    for(num of args){
        total += num
    }
    return total;
}

console.log(somaInfinita(2,3,4,5))
console.log(somaInfinita(46,65,779))