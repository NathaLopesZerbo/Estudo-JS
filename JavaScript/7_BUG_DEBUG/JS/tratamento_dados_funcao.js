//Nunca podemos confiar no dado que é passado pelo usuário  
//Sempre devemos criar validações e tratamento para os mesmos

function checkNumber(n){

    const result = Number(n)

    if(Number.isNaN(result)){
        console.log("Valor incorreto");
        return;
    }
    console.log("Valor correto");
    return result;
}

checkNumber(5);
checkNumber("20");
checkNumber(3.3);
checkNumber({});
