const containerBtn = document.querySelector('#btn-container');
const btnDiv = document.querySelector('#div-btn');


containerBtn.addEventListener('click', () =>{
    console.log('Evento 1')
})

btnDiv.addEventListener('click', (e) =>{
    e.stopPropagation();
    console.log('Evento 2')
})