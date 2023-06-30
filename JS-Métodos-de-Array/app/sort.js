let btnOrdenaPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdenaPreco.addEventListener('click', ordenaPreco)

function ordenaPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibeLivro(livrosOrdenados)
}