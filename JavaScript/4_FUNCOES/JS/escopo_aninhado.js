let m = 10

function escopoAninhado(){
    let m = 20;

    if(true){
        let m = 30;

    if(true){
        let m = 40;

        console.log(m)
        }   
        console.log(m)
    }
    console.log(m)
}

escopoAninhado();

console.log(m)