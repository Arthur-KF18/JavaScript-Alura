const form = document.querySelector("#novoItem");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    console.log("funcionou")

    console.log(evento.target.elements['nome'].value);
    console.log(evento.target.elements['quantidade'].value);
    console.log(evento);
})