let y = 10;

function testandoEscopo(){
    let y = 20
    console.log(`A variavel dentro da função é ${y}`)
}
    console.log(`Y fora da função é ${y}`);

testandoEscopo();



