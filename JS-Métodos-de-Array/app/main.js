let livros = [];
const endpointDaAPI = `https://guilhermeonrails.github.io/casadocodigo/livros.json`

async function getBuscaLivrosDaAPI() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();

    console.table(livros);
}

getBuscaLivrosDaAPI();

