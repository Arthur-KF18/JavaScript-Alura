const meuNumero = 3;

const num1 = 1;;
const num2 = 2;

const operacaoMatematica = num1 + num2;
console.log(operacaoMatematica)

const numeroPonto = 3.4;
const exponencial = 5e+2

const alura = 'Alura';
console.log(exponencial)

function ganhoHora(salario, horasTrabalhadas) {
    const salarioHora = (salario / horasTrabalhadas);
    const formatado = salarioHora.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

    return formatado;
}

console.log(ganhoHora(1200, 156))