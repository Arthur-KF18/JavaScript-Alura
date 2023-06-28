let livros = [];
const endpointDaAPI = `https://guilhermeonrails.github.io/casadocodigo/livros.json`;

getBuscaLivrosDaAPI();

async function getBuscaLivrosDaAPI() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    let livroDesconto = aplicaDesconto(livros)
    exibeLivro(livroDesconto);
}




