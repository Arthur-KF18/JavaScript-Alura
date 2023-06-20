function verificaChute(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        console.log('Valor inválido');
    }

    if (numeroForMaiorOuMenor(numero)) {
        console.log(`valor inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor}`)
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}