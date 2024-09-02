window.addEventListener("load",  ()=> {
    console.log("página carregou!");
});

window.addEventListener("beforeunload", (e) =>{
    e.preventDefault();
    e.returnValue = "Teste";
})