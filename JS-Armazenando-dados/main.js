const form = document.querySelector("#novoItem");
const lista = document.querySelector("#lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((elemento) => {
    criaElemento(elemento)
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nomeForm = evento.target.elements['nome'];
    const qntdForm = evento.target.elements['quantidade'];

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    criaElemento(itemAtual);

    nomeForm.value = "";
    qntdForm.value = "";

    itens.push(itemAtual);

    localStorage.setItem("itens", JSON.stringify(itens));

})

function criaElemento(item) {

    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;

    lista.appendChild(novoItem);
}