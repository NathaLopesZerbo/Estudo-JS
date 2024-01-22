//Pula a execução de um loop.
for(let s = 1; s < 10; s++){
    //operador resto = %
    if(s % 2 === 0){
        console.log("Número Par");
        continue;
    }
    console.log(s);
}