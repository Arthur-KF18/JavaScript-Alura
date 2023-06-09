// Função anônima referente a constante
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play()
}

// Lista as teclas existentes
const listaDeTeclas = document.querySelectorAll('.tecla');

// Criando um loop para repetir a execução dos sons
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    // Definindo uma referência constante
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //  Inserindo template string
    const idAudio = `#som_${instrumento}`;

    // Função de dar play ao audio
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function () {
        listaDeTeclas[contador].classList.add('ativa');
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
