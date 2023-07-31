#### Fundamentos do JS: Tipos variáveis e funções

- Veremos exatamente como a programação funciona, e o curso irá se focar apenas no Back-end do JavaScript. Aprendendo bastante sobre variáveis, tipos de dados e utilizar o Node.js para executar o JavaScript fora do navegador

#### Tipo Number

- Primeiro iremos verificar e entender, __os tipos de dados que cada lingagem consegue trabalhar.__
- Dentro do js temos __os tipos primitivos, que são 3: Números, Strings e Booleanos__
- Primeiro veremos o tipo `Number`
- Criaremos um arquivo novo chamado `Number.js`, onde iremos criar as lógicas que serão vistas.
- Criamos uma variável chamada `meuNumero`, e este nome __é um espaço na memória que utilizamos para guardar um dado específico, e o dado é do tipo número__
- Como nós já guardamos estas informações, __nós podemos realizar operações com estes números, por exemplo:__

```javascript
const num1 = 1;;
const num2 = 2;

const operacaoMatematica = num1 + num2;
```

- __Só podemos realizar estas operações por serem dados do tipo número, assim o js pode realizar as operações. Para imprimir é apenas utilizar o `console.log`__
- Podemos utilizar também, __números decimais, que no JS são entendidos como Ponto Flutuante, como `const numeroPonto = 3.4` ou  até mesmo utilizar `.5`, já que o JS entende se apenas adicionarmos o ponto e o número__
- Porém, quando __realizamos uma operação com ponto flutuante, o resto podem ser números extensos, para isto, utilizamos ferramentas próprias do js que funcionam para realizá-las__
- __Geralmente, quando tentamos multiplicar um valor por uma string, temos um `NaN`, ou `Not a Number`, e com isto, iremos verificar qual de nossas constantes está com um valor errado ou com atribuiçào diferente da esperada__
- Os tipos de valores que podem ser representados e manipulados em uma linguagem de programação são conhecidos como __tipos, e uma das características mais fundamentais de uma linguagem de programação é o conjunto de tipos que ela suporta.__
- Quando um programa precisa reter um valor para uso futuro, __ele atribui o valor a (ou “armazena” o dado em) uma variável__. As variáveis têm nomes e permitem o uso desses nomes em nossos programas para __se referir a valores. A maneira como as variáveis funcionam é outra característica fundamental de qualquer linguagem de programação__.
  - Os tipos de JavaScript podem ser divididos em duas categorias:__tipos primitivos e tipos de objetos. Os tipos primitivos do JavaScript incluem números, palavras ou texto (conhecidas como strings) e valores booleanos (conhecidos como booleanos)__
  - Podemos também utilizar __`let pi = 3.14` ou `Math.PI()`__
  - O ponto flutuante pode ter um ponto decimal; eles usam a sintaxe tradicional para números reais. Um valor real é representado como a parte integral do número, seguido por um ponto decimal e a parte fracionária do número.
- Pontos flutuantes também podem ser representados usando notação exponencial: um número real __seguido pela letra `e (ou E)`, seguido por um sinal opcional de mais (+) ou menos (-), e por um expoente inteiro. Essa notação representa o número real multiplicado por 10 à potência do expoente, que ficará `const exponencial = 5e+2`__
- Divisão por zero __não é um erro em JavaScript: ele simplesmente retorna “Infinity”. No entanto, há uma exceção: zero dividido por zero não tem um valor bem definido e o resultado dessa operação é o valor especial não numérico `NaN`.__
- Caso estivermos lidando com valores, __podemos utilizar um método chamado `toLocaleString()` que converte um número para string já tratando a questão do arredondamento e convertendo para a moeda do país que queremos, no nosso caso, o real, tornando a tarefa do programador muito mais simples.__
- O método toLocaleString() recebe alguns argumentos - um objeto literal com as propriedades:
  - `style` : Que é o estilo do formato a ser utilizado, aqui é permitido usar:
  - `decimal` para representar números simples.
  - `currency` que diz respeito ao formato monetário e que vai indicar a moeda que vai ser utilizada.
  - `percent` para formato percentual.
  - `currency`: A moeda para usar na formatação monetária

```javascript
function ganhoHora(salario, horasTrabalhadas) {
    const salarioHora = (salario / horasTrabalhadas);
    const formatado = salarioHora.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

    return formatado;
}

console.log(ganhoHora(1200, 156))
// R$ 7,69
```