//Com o método ALL podemos executar várias promises

const p1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(10)
    }, 3000)
})

const p2 = Promise.resolve(10 + 10)

const p3 = new Promise((resolve, reject) => {
    if(30>10){
        resolve(30)
    }else{
        reject("Erro!")
    }
})

Promise.all([p1,p2,p3]).then((values) => console.log(values))