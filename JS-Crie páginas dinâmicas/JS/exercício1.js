// Escreva o código em JavaScript capaz de selecionar o elemento HTML input do tipo telefone:

// document.querySelector('input[type=tel]');

const listaTelefone = document.querySelectorAll('input[type="button"]');
const inputTel = document.querySelector('input[type="tel"]');

for (let indice = 0; indice < listaTelefone.length; indice++) {
    const tecla = listaTelefone[indice];

    tecla.onclick = function () {
        inputTel.value = inputTel.value + tecla.value;
    };
};


// document.querySelector('elemento[atributo]');
// porquê com essa linha, o JavaScript vai acessar o documento HTML (representado por document)
// e procurar pelo elemento input que tenha como atributo [type=tel], os colchetes fazem parte
// da sintaxe para seleção de atributos de um elemento HTML, funciona tanto para o CSS quanto para o Javascript.

// explicação da segunda parte:
/*

Primeiro, você precisa criar uma referência para receber a lista com todas as teclas do AluraFone e uma outra para capturar o `input` Digite seu telefone, que no caso do código foi `const` `listaDeTeclas` e `const inputTel`, respectivamente.

O segundo passo é criar o laço de repetição `for`, que vai percorrer a lista de teclas, por esta razão, a condição do for é `indice &lt; listaDeTeclas.length`, ou seja, enquanto o `indice` for menor que o tamanho de `listaDeTeclas`, executa um comando.

Dentro do `for`, é necessário que se crie uma referência constante `const tecla` para que a cada iteração, receba o valor correspondente da tecla `listaDeTeclas[indice]`.

Após isto, adicione no `onclick` uma função anônima que receberá o valor do campo Digite seu telefone `inputTel.value`, e atribua a ela a soma entre o valor do campo Digite seu telefone e o valor da tecla clicada `tecla.value`, ficando `inputTel.value = inputTel.value + tecla.value`.



*/
