//JSON, JavaScript Object Notation, é um dado em formato de texto;
//Utilizamos para comunicação entre API e fron-end;
//Formataçaõ rigorosa, se for malfeita não conseguimos comunicação;
//Regras: apenas aspas duplas e não aceita comentários;

const myJson = '{"name": "Nathã", "age": 17, "skills": ["PHP", "JavaScript","Python"]}'

console.log(myJson)
console.log(typeof myJson)


// Na maioria das vezes vamos precisar converter objetos para JSON;
// ou um JSON para um objeto JavaScript válido;
// Utilizamos o objeto JSON e os métodos 
// STRINGFY = transforma o objeto em JSON (JSON.parse())
// PARSE: tranSforma JSON em Objeto (JSON.stringfy())
//JSON para objeto e objeto para JSON


const myObject = JSON.parse(myJson)
console.log(myObject)

//JSON INVÁLIDO

const badJson = '{"name": Natha, "age": 17}'

// const myBadObject = JSON.parse(badJson)

 myObject.isOpenToWork = true;

 console.log(myObject)

 const myNewJson = JSON.stringify(myObject)

 console.log(myNewJson)

 console.log(typeof myNewJson)



