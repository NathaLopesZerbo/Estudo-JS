// Uma promise pode conter um erro, ou dependendo de como o código é executado podemos receber um erro
// Utilizamos a função CATCH para isso, podemos pegar o erro e exibir

Promise.resolve(4 * 'asd')
.then((n) => {
    if(Number.isNan(n)){
        throw new Error ("Valores Inválidos")
    }
})
.catch((err) => console.log(`Um erro ocorreu ${err}`))