
/* 
    Alterando o HTML com replaceChild:

    - Já o método replaceChild é utilizado para trocar um elemento

    - Novamente precisamos de elemento pai

    - E também o elemento para ser substituído e o que vai substituir
*/

    
const header = title.parentElement

const h2 = document.createElement('h2')

h2.textContent = "Meu novo Titulo!"

header.replaceChild(h2, title)