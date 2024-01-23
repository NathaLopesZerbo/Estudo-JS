// DEBUGGER é uma instrução que nos permite o debug no console do navegador

//Podemos evidenciar os valores das variaveis em tempo real e com o programa executando, o que ajuda bastante

let c = 1;
let d = 2

if(c==1){
    c = d+2
}

debugger;

for(let i=0; i<d; i++){
    c = c+2
}

console.log("executou o loop")

debugger;

if(c>5){
    c = 25
}

