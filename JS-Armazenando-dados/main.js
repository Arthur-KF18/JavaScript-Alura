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

    const existe = itens.find(elemento => elemento.nome === nome.value);

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if (existe) {
        itemAtual.id = existe.id;
        atualizaElemento(itemAtual);
        itens[existe.id] = itemAtual;
    } else {
        itemAtual.id = itens.length
        criaElemento(itemAtual);
        itens.push(itemAtual);
    }

    localStorage.setItem("itens", JSON.stringify(itens));

    nomeForm.value = "";
    qntdForm.value = "";

})

function criaElemento(item) {

    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    const numeroItem = document.createElement("strong");
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;

    novoItem.appendChild(botaoDeleta());    
    
    lista.appendChild(novoItem);
}

function atualizaElemento(item) {
    document.querySelector("[data-id='" + item.id + "']").innerHTML = item.quantidade;
}

function botaoDeleta() {
    const elementoBotao = document.createElement("button");
    elementoBotao.innerHTML = "x";

    elementoBotao.addEventListener("click", function() {
        deletaElemento(this.parentNode);
    })

    return elementoBotao;
}

function deletaElemento(tag) {
    tag.remove();
}