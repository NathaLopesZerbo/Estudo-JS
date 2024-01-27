// A instrução await serve para aguardar o resultado de uma async function
// Tornando mais simples lidar com este tipo de função, desta maneira não precisamos trabalhar diretamente com Promises

function resolveComDelay(){
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve("Resolveu a Promise")
        },2000)
    })
}

async function chamadaAsync(){
    console.log("Chamando a promise, e esperando o resultado")
    const result = await resolveComDelay()
    console.log(`O resultado chegou ${result}`)
}

chamadaAsync()