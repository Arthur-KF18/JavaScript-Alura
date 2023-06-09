// Função anônima referente a constante
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
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

    tecla.onkeydown = function (pressionada) {

        if (pressionada.code === "Enter" || pressionada.code === "Space") {
            listaDeTeclas[contador].classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
