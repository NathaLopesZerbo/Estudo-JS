//Podemos criar elementos após o objeto já ter sido executado, basta apenas colocar sua variavel, o que deseja inserir para complementar: car.doors = 4;

const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
}

console.log(car);
car.doors = 4;
console.log(car)

//Podemos deletar um elemento, com a propriedade DELETE inserir a variavel do objeto, e o que deseja excluir do campo, dentro do objeto.
delete car.km
console.log(car)