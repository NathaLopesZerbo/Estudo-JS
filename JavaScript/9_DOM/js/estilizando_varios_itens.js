/*  
    Com o atributo HTMLCollection aparece quando selecionamos vários
    elementos de uma vez;

    Podemos passar por cada um dos elementos com um for of, e estilizar individualmente cada item;

*/

const listItens = document.getElementsByTagName("li")

for(const li of listItens){
    li.style.backgroundColor= "aqua"
}