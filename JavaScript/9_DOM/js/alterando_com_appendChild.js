/* 
    Alterando o HTML com appendChild

    - Com o appendChild é possível adicionar um elemento dentro de outro

    - Este elemento adicionado será o último elemento do elemento pai

*/

const navLinks = document.querySelector("nav ul")

const li = document.createElement('li')

navLinks.appendChild(li)