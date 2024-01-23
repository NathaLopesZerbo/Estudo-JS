// ASSERTIONS são quando os tratamentos de valores passados pelo usuário, geram um erro

//Pórem este recurso tem como objetivo nos ajudar no desenvolvimento do programa, ou seja, seria algo para os devs e não para os usuários;


function checkArray(arr){
    if(arr.length === 0 ){
        throw new Error("O array precisa de elementos")
    } else{
        console.log(`O array tem ${arr.length} elementos`)
    }
}

checkArray([1,2,3])