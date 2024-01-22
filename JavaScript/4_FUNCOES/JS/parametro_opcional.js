const multiplication = function (m, n){
    if(n === undefined){
        return m*2
    } else{
        return m*n
    }
}

console.log(multiplication(5));

console.log(multiplication(2,4));


const greeting = (name) =>{

    if(!name){
        console.log("Olá")
        return
    }
    console.log(`Olá ${name}`)
};

greeting();

greeting("Mathues");