const form = document.querySelector("#novoItem");
const lista = document.querySelector("#lista");
// const nomeForm = evento.target.elements['nome'].value
// const qntdForm = evento.target.elements['quantidade'].value

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value);
})

function criaElemento(nome, quantidade) {

    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;
    
    lista.appendChild(novoItem);

}