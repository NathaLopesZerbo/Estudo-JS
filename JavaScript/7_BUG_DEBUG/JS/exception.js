//EXCEPTIONS são erros que nós geramos no programa
//Este recurso faz ele ser estagnado, ou seja ele não continua sua execução
//Utilizamos a expressão throw new Error, com a mensagem de erro como argumento
//throw new Error()


let x = 10

if(x != 11){
    throw new Error("O valor de X não pode ser diferente de 11")
}