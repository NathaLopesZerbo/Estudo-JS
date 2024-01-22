// This: Sua tradução'Este', de uma maneira simplificada, para sua compreensão, "Esse objeto vai modificar isso..."

//se refere ao objeto em um determinado contexto ou escopo. Ele pode ser usado para acessar e manipular propriedades e métodos de um objeto.

const pessoa ={

    nome: "Nathã",

    getNome: function(){
        return this.nome;
    },  
    setNome: function(novoNome){
        this.nome = novoNome;
    }
}
    console.log(pessoa.nome)
    console.log(pessoa.getNome())
    pessoa.setNome("Vanessa");
    console.log(pessoa.getNome())