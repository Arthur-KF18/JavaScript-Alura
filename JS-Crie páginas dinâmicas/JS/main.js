// alert('testando o javascript!');
// document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play()
}

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[0].onclick = tocaSomPom;