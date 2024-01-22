// É como uma estrurua for ou while pórem é um método;
const nums = [1,2,3,4,5]

nums.forEach((numero)=>
console.log(`O Número é: ${numero}`)
)

const posts = [
    {title: "Primeiro Post",category: "PHP"},
    {title: "Segundo Post",category: "Python"},
    {title: "Terceiro Post",category: "JS"}
]

posts.forEach((post)=>
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category} `)
)