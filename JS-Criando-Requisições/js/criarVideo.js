const formulario = document.querySelector("[data-formulario]")

function criarVideo(evento) {
    evento.preventDefault();
    
    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() *10).toString();

}

formulario.addEventListener("submit", evento => criarVideo(evento));

