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

function insiraNumero(numero) {
    const verificaNumero = typeof numero === 'number' ? imprime(numero) : imprime('Aceitamos apenas números')

    return verificaNumero;
}

insereTexto('Arthur')
insiraNumero(2738);

numero = 10;
const verificar = numero >= 5 ? 'Número Certo' : 'Errou!';
imprime(verificar);

function pessoa(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

imprime(pessoa('Arthur', 20));


// Expressões de funções

const multiplica = function (n1, n2) { return n1 * n2 };
imprime(multiplica(2, 3));

// Arrow Functions

const multiplicar = (n1, n2) => n1 * n2;
imprime(multiplicar(6, 10))

const apresentar = nome => `meu nome é ${nome}`;
imprime(apresentar('Arthur'));

const pagamento = (tipo) => {
    switch (tipo) {
        case 1:
            console.log('Débito')
            break;
        case 2:
            console.log('Crédito')
            break;
        case 3:
            console.log('Dinheiro')
            break;

        default:
            console.log('Selecione a forma de pagamento')
            break;
    }
}

pagamento(2);

const calculaMedia = (n1, n2, n3) => {
    if (n1 <= 10 && n2 <= 10 && n3 <= 10) {
        imprime((n1 + n2 + n3)/ calculaMedia.length)
    } else {
        imprime('Insira valores de 0 a 10!')
    }
}

calculaMedia(10, 10, 10);