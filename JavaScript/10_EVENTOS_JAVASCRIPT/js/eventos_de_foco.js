const input = document.querySelector('#my-input')


// Entra no Foco
input.addEventListener('focus', (e) =>{

    console.log("Entrou no Input")
})

// Sai do Focus

input.addEventListener('blur', (e) =>{

    console.log("Saiu no Input")
})