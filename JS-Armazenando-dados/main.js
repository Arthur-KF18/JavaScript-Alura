const form = document.querySelector("#novoItem");
const lista = document.querySelector("#lista");

form.addEventListener("submit", (evento) => {

    const nomeForm = evento.target.elements['nome'];
    const qntdForm = evento.target.elements['quantidade'];

    evento.preventDefault();
    criaElemento(nomeForm.value, qntdForm.value);   

    nomeForm.value = "";
    qntdForm.value = "";
})

function criaElemento(nome, quantidade) {

    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);

    localStorage.setItem("nome", nome);
    localStorage.setItem("quantidade", quantidade);
}