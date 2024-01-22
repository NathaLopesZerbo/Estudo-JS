const testArrow = () =>{
    console.log("Está é uma ArrowFunction");
};

testArrow();

const parOuImpar = (n) =>{
    if(n % 2 === 0 ){
        console.log("Par")
        return
    }
    console.log("IMPAR")
}

parOuImpar(5);
parOuImpar(10);


// mais sobre arrow function

const raziQuadrada = (x) => {
    return x*x
}
console.log(raziQuadrada(4));

const raziQuadrada2 = (x) => x*x 

console.log(raziQuadrada2(5));

console.log(raziQuadrada2(12));