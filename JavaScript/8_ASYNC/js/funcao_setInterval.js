//setInterval - é semelhante a setTimeout, ela é executada após um tempo
//Porém ela não para de ser executada, temos a sua chamada definida pelo tempo de espera na execução
//Como um loop infinito com execução de tempo controlada
// Ele continua sua execução de tempos em tempos que determinamos

console.log("Ainda não começou")

setInterval(function(){
    console.log("intervalo Assíncrono")
},3000)

console.log("Ainda não começou 2")