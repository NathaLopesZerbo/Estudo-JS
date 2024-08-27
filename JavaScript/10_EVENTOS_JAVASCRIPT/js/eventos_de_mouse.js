const mouse = document.querySelector('#mouse')

mouse.addEventListener('mousedown', () =>{
    console.log("Pressionou o Botão")
})

mouse.addEventListener('mouseup', () =>{
    console.log("Soltou o Botão")
})

mouse.addEventListener('dblclick', () =>{
    console.log("Clique Duplo")
})