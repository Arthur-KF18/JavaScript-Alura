botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    let livrosFiltrados = livros.filter(livro => livro.categoria == `front-end`)
    console.table(livrosFiltrados)
}