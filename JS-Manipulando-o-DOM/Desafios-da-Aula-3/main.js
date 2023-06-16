const lista = document.querySelector(".lista");
const botao = document.querySelector("[botao]");


botao.addEventListener("click", () => {
    lista.setAttribute("data-lista", "mostrar");
})

botao.addEventListener("click", () => {
    lista.setAttribute("data-lista", "esconder");
})

console.log(lista);
console.log(botao);



