const myTitle = document.querySelector('#my-title');

myTitle.addEventListener("click", (event) =>{
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
})