// alert('testando o javascript!');
// document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// Definindo variável para um novo valor
let contador = 0;

// Criando um loop para repetir a execução dos sons
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSom;
    contador = contador + 1;

    console.log(contador);
}