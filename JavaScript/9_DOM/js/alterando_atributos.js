/* 
    Com essa propriedade podemos desenvolver aplicações alterando dados pelo JS
    Sem alteração dentro do HTML
    Colocando atributos 
*/
const navLinks = document.querySelector("nav ul")

const li = document.createElement('li')

navLinks.appendChild(li)

const firstLink = navLinks.querySelector("a")

console.log(firstLink)

firstLink.setAttribute("href", "https://www.google.com")
console.log(firstLink.getAttribute("href"))
firstLink.setAttribute("target", "_blank")