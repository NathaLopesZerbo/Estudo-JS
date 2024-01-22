function someFunction(){
    let txt = "Alguma coisa"

    function display(){
        console.log(txt)
    }
    display();
}
someFunction();


const multiplicationClosure = (n) => {
    return (m) =>{
        return n*m;
    }
}

const c1 = multiplicationClosure(5);

const c2 = multiplicationClosure(10);

console.log(c1)
console.log(c2)

console.log(c1(5))
console.log(c2(10))