const a = {
    name: "Nathã"
}

const b = a //Quando utilizamos essa sintaxe, copiamos a mesma informação que já tem contido, dentro de um OBJETO, mas qualquer alteração é alterado em AMBOS

console.log(a)
console.log(b)

console.log(a === b);

a.age = 17;

console.log(b)