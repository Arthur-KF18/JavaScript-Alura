// Função anônima referente a constante
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play()
}

// Lista as teclas existentes
const listaDeTeclas = document.querySelectorAll('.tecla');

// Definindo variável para um novo valor
let contador = 0;

// Criando um loop para repetir a execução dos sons
while (contador < listaDeTeclas.length) {

    // Definindouma referência constante
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //  Inserindo template string
    const idAudio = `#som_${instrumento}`;

    // Função de dar play ao audio
    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    contador = contador + 1;

}