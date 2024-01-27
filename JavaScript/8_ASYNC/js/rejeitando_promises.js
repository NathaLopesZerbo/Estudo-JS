//A rejeição, diferente do erro, ocorre quando nós decidimos ejetar um promise
//Podemos fazer isso com o método REJECT

function checkNumber(n){
    return new Promise((resolve, reject) => {

        if(n>10){
            resolve(`O número é maior que 10`)
        }else{
            reject(new Error("Número muito baixo"))
        }

    })
}

const a = checkNumber(20)
const b = checkNumber(10)

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Um erro ocorreu: ${err}`))


b.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Um erro ocorreu: ${err}`))