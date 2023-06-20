function verificaChute(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return;
    }

    if (numeroForMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `
        <div>valor inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor} 
        </div>`
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2 class = "acertou">Você Acertou! Parabéns</h2>
            <h3 class = "acertou__numero">O número secreto era: ${numeroSecreto}</h3>
            <footer>
		        <p class="agradecimento">Feito com 💙</p>
	        </footer>
        `
    }else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}