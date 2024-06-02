/* 
    Com o método (getClientBoundingRect) podemos pegar várias informações do elemento;
    Como por exemplo sua altura, largura, eixo x, eixo y, e tantas outras informações;
*/

const products = document.getElementsByClassName('product')

const product1 = products[0]

console.log(product1.getBoundingClientRect())