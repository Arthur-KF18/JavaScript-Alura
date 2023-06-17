const form = document.querySelector("#novoItem");
// const nomeForm = evento.target.elements['nome'].value
// const qntdForm = evento.target.elements['quantidade'].value

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value);
})

function criaElemento (nome, quantidade) {
    console.log(nome);
    console.log(quantidade);

    document.createElement('li');
}