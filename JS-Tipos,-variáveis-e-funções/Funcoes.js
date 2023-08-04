function imprime(texto) {
    console.log(texto)
}

function calculaValor(x, y) {
    calculo = x + y;
    return calculo
}

imprime(calculaValor(5, 10) * calculaValor(10, 4));


function insereTexto(texto) {
    const verificaTexto = typeof texto === 'string' ? imprime(texto) : imprime('Digite apenas um texto');

    return verificaTexto;
}

insereTexto('Arthur')

function insiraNumero(numero) {
    const verificaNumero = typeof numero === 'number' ? imprime(numero) : imprime('Aceitamos apenas números')

    return verificaNumero;
}

insiraNumero(2738);
insiraNumero('Arthur');


numero = 10;
const verificar = numero >= 5 ? 'Número Certo' : 'Errou!'

console.log(verificar)

function pessoa(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

imprime(pessoa('Arthur', 20));
