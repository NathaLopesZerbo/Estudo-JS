const btn = document.querySelector("#btn");
const otherBtn = document.querySelector("#other-btn")


function imprimirMenssagem(){
    console.log('teste')
}

btn.addEventListener('click', imprimirMenssagem);

otherBtn.addEventListener("click", () =>{
    console.log("Evento removido")
    btn.removeEventListener("click", imprimirMenssagem);
})