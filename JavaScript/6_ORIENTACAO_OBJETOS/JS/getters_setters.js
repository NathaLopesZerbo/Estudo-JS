//Get é um método utilizado para exibir o valor de alguma propriedade
//Set é utilizado para alterar o valor

class Post {
    constructor(titulo,descricao, tags){
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo(){
        return `Voce está lendo ${this.titulo}`
    }

    set adicionarTags(tags){
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }
}

const myPost = new Post("Algum post","É um post sobre Programação")
console.log(myPost)

console.log(myPost.exibirTitulo)

myPost.adicionarTags = "Programacao, JavaScript, JS"

console.log(myPost)