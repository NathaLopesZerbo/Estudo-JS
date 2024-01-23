// FINALLY uma instrução que vai depois do bloco try catch;
//Ela é executada independente de haver algum erro ou não em try; 

function checkNumber(n){

    const result = Number(n)

    if(Number.isNaN(result)){
        console.log("Valor incorreto");
        return;
    }
    console.log("Valor correto");
    return result;
}

try{
    const value = checkNumber("1")

    if(!value){
        throw new Error("Valores Inválido")
    }
}catch(error){
    console.log(`Opa, aconteceu um problema: ${error}`)
}finally{
    console.log("O código foi executado")
}