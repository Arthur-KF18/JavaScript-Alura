const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100);
}

console.log('Número Secreto:', numeroSecreto);