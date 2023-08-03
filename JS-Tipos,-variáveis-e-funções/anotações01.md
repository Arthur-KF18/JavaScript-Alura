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

#### Tipo String

- Tipos `string` são tipos textos, e __utilizamos ela em tudo que não for booleano e número. Podemos guardar caracteres do alfabeto ou qualquer palavra que temos__

```javascript
const stringDuplas = "Texto em aspas duplas"
const stringSimples = 'Texto em aspas simples'
```

- __Utilizamos as strings para guardar dados e valores, como senhas por exemplo. Para o JS, ele precisa da `string` sendo especificada, já que são uma cadeia de caracteres, que podem ser manipulados__
- Uma diferença entre __aspas simples e duplas, é que simples são uma cadeia de caracteres, e duplas, também são, mas podem ser diferenciadas pelo JS__

```javascript
const minhaSenha = "senha123"
console.log(minhaSenha)
// senha123
const fala = 'A fala foi "Horrível" segundo especialistas'
console.log(fala)
// A fala foi "Horrível" segundo especialistas
const falaInversa = "O valor era 'alto demais' segundo ele"
console.log(falaInversa)
// O valor era 'alto demais' segundo ele
```

- Além disto, __a terceira forma de se escrever strings são as `template String`, onde são strings com variáveis: `let diga = ${fala}`__
- Sabemos dos operadores matemáticos, porém em strings podemos __concatenar__. Concatenar é __juntar duas variáveis do tipo string entre si, ou um número com string. Elas irão se juntar uma ao lado da outra:__

```javascript
let seuNome = 'Arthur'
const diga = "Seu nome é: "

// template Strings
console.log(`${diga}${seuNome}`);
// concatenação
console.log(diga + seuNome)
```

#### Para saber mais: Trabalhando com strings

- O JavaScript traz em sua biblioteca-base __vários métodos que usamos para manipular strings de texto: alterar de maiúsculas para minúsculas, contar quantas letras tem uma palavra, retirar espaços, juntar duas strings, etc.__
- Vamos pensar em alguns exemplos práticos para fazer esse tipo de alteração. Por exemplo, para padronizar uma comparação entre strings:

```javascript
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false
```

- Quando nós vemos esta comparação, __é perceptível que estamos falando da mesma cidade, porém, para o JS, ambos os dados são apenas sequências de caracteres, e a comparação vai falhar, pois como já vimos, o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.__
- Uma das formas de tratar isso é __padronizando todos os inputs para o formato de texto que será comparado antes mesmo de fazer a comparação. Nesse caso, transformando todos os caracteres em letras minúsculas:__

```javascript
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true
```

- Acima, vemos um dos métodos de string nativos do JavaScript em ação, o `toLowerCase()` que __converte todos os caracteres da string informada (no caso, input) para letras minúsculas (se forem algarismos, nada é convertido)__
- qualquer inserção de texto que exija uma quantidade mínima de caracteres, como uma senha ou um nome. __A propriedade `length` pode ser utilizada para sabermos quantos caracteres uma string contém__:

```javascript
const senha = "minhasenha123"
console.log(senha.length) // 13 caracteres
```

- Lembrando que `lenght` __é uma propriedade da nossa variável__

#### Tipo Boolean

- O tipo `boolean` ou "booleano", __que conhecemos como `true` ou `false`. Ele é um tipo único para comparação, como em estruturas condicionais(`if, else, for, while`) que são amplamente utilizadas__
- Podemos verificar __isto com `==` ou `===`. Quando utilizamos apenas um `=`, significa atribuição de valor a uma variável. Quando comparamos, elas retornam `true` e `false`:__

```javascript
const num1 = 3;
const num2 = 4;

console.log(num1 == num2)
// false
console.log(num1 === num2)
// false

const num3 = 2
const num4 = 2

console.log(num3 === num4)
// true
```

- __Implementamos o booleano pois comparamos eles entre pedaços de código, como por exemplo, verificar se o usuário está logado ou não e trazer uma página exibindo isto. Esta comparação é aplicada em um sistema de senha por exemplo.__
  - __Se a senha digitada for exatamente igual à cadastrada no sistema, o usuário pode acessar sua conta.__
- Levamos em conta, que __`const` é uma variável constante, imutável. Já `let` permite a reatribuição de valores, como um sistema de contas ou input de dados__

#### Padrões de nomes em JS

- Existem várias convenções para nomes e cada linguagem de programação tem o seu. Seguem alguns deles:
  - `camelCase`: Inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula. Por exemplo: minhaVar ou senhaDoUsuario. Esta é a convenção utilizada pelo JavaScript para variáveis e funções.
  - `snake_case`: Os espaços são substituídos pelo caractere _ (underline), com todas as palavras em letra minúscula. Por exemplo: minha_variavel ou senha_do_usuario.
  - `kebab-case`: Similar ao anterior, porém com os espaços substituídos por hífens. Por exemplo: minha-var ou senha-do-usuario. Esta convenção não pode ser utilizada no JavaScript para variáveis e funções.
  - `PascalCase`: Similar ao CamelCase, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: MinhaVar ou SenhaDoCliente.
- __Importante: Nunca utilize espaço nem caracteres especiais, nem inicie os nomes das variáveis com números.__

#### Para saber mais: Tipos null e undefined

- Existem mais dois tipos além dos ditos anteriormente. O `null` e o `undefined`.
- O `null` __é um tipo especial que pode ser traduzido como `ausência de valor` e pode ser atribuído como valor de uma variável:__

```javascript
let input = null

if (input === null) {
    console.log('Não há informações')
} else {
    console.log(input)
}
```

- No código acima, __há uma comparação `se` ou `if`, onde, se o valor do `input` for `null` retorna uma mensagem. Caso não, ele retorna o valor do input. O `null` verifica de fato se está vazio nosso valor, seja ele vindo de um objeto ou função, podemos usar a descontrução em js para verificarmos nossos valores__
- Um outro importante vem do seguinte código:

```javascript
let input;

console.log(input)
```

- __Por não existir um valor ou variável atribuída, ele retorna `undefined` ou indefinido. Ela também é uma ausência de valor, porém a diferença é de que `null` é um valor atribuído a uma variável que existe e foi iniciada, enquanto `undefined` é o contrário, não inicializada__
- `undefined` também __é o valor retornado por uma função que não tem cláusula return__
- É importante notar que, __embora os dois tipos sejam utilizados para sinalizar ausência de valor, os operadores de comparação do JavaScript podem ou não diferenciá-los:__

```javascript
console.log(null == undefined); // true
console.log(null === undefined); // false
```

- __No cotidiano é comum considerar `undefined` como uma ausência de valor “inesperada” (causada por um bug ou erro no código) e `null` como um tipo de dado que também significa ausência de valor, mas não de maneira inesperada.__
- Por exemplo, um campo em uma tabela de um banco de dados que esteja sem dados ou uma informação solicitada que não seja obrigatória e não tenha sido preenchida pelo usuário pode ter valor `null`.

#### Var,, let e const

- O js tem uma particularidade de __possuir 3 formas de declarar variável, `var`, `let` e `const`__
  - `var`: Primeira que surgiu e que __executa em qualquer parte do código. Porém, isso faz com que ela não seja alterada, e como podemos declarar uma variável depois de ser executada, chamamos isto de "hoisting" ou hasteamento, que é quando a `var` declarada, mas sempre lida no início.. Não é recomendado seu uso, caso necessário por questões lógicas do sistema, deve existir apenas uma__
  - `let`: Surgiu quando __a variável `var` causou bugs devido seu complexo. A `let` é uma variável mutável, onde, quando nós realizamos um cálculo, novos valores podem ser atribuídos:__
  - No exemplo abaixo, __`i` é uma variável do tipo `let` que muda conforme o código executa, sendo reatribuídos novos valores__ 

 ```javascript
 for (let i = 0; i < 10; i++) {
    console.log(i)    
}
// impressão no console será os números de 0 a 9
 ```

- `const`: Variável amplamente utilizada, __diferente da `let`, ela é uma variável constante, não alterável. Ela geralmente é utilizada quando os valores não são alteráveis, pois basta se perguntar se nosso valor é ou não alterável:__

```javascript
const forma = 'retangulo'
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'retangulo') {
    area = (altura * comprimento)
} else {
    area = (altura * comprimento) / 2
}

console.log(area)
```

#### Truthy e Falsy

- Além do tipo booleano, `true` e `false`, temos __alguns outros valores de variáveis que não são nem `true`, nem `false`, mas que para o js, eles equivalem a ser tipo verdadeiro ou tipo falso. Para isto existem o `truthy` e o `falsy`. Não são exatamente booleanos, mas podem se comportar como se fossem:__

```javascript
0 => false
1 =. true
```

- Um exemplo é 0 e 1. __Em outras linguagens,, eles são usados para indicar verdadeiro ou falso, e no js pode ser aplicado o mesmo conceito, porém como "tipo", por exemplo:__

```javascript
console.log(0 == false)
console.log("" == false)
```

- Lembrando que __`==` compara valor e `===` tipo e valor. Comparamos então o 0, o retorno será `true` pois o js entende que sim, 0 tem valor `false`. Strings vazias o js também entende como `false`__

```javascript
console.log(1 == true)
```

- Para o js, __ele também considera o 1 como tipo verdadeiro.__
- Podemos verificar __o que uma variável está armazenando através do `typeof`, ou, "tipo do":__

```javascript
let numero = 3;
let texto = 'Arthur';

console.log(typeof(numero));
// number
console.log(typeof(texto));
// string
```

- Supondo que verificamos duas variáveis, uma vazia e outra com valor nulo:

```js
let minhaVar;
let nulo = null;

console.log(typeof minhaVar)
// undefined
console.log(typeof nulo)
// object
```

- __Percebemos que, a `minhaVar` é indefinida por não há valor declarado. A `nulo`, retorna como um tipo objeto. O js deveria ter o tipo `null`, porém este bug acarretou neste pequeno porém. Muitos códigos utilizam esta forma de ferramenta, e que não influenciam em nada durante os códigos__

#### Conversão de Tipos

- Temos que ter noção __dos tipos de dados e dos booleanos para entendermos das conversões que o js faz.__
- Temos dois tipos de conversões, __a implícita e a explícita. A conversão implícita permite que conversemos um tipo de dado em outro, ou seja, converter uma string em número e vice versa. Usando o exemplo abaixo:__

```js
const numero = 456;
const numeroString = "456"

console.log(numero === numeroString)
```

- O retorno __será `false`, pois estamos comparando uma string com um texto__
- __Podemos fazer a conversão implicita com `==`, onde ele irá ver apenas o valor inserido dentro da nossa variável, e no caso, ele irá converter um número em string para essa comparação. Essa comparação implicita pode causar bugs no código__
- Se nós __utilizarmos o operador de soma, irá ter a transformação e será uma concatenação__

```javascript
const numero = 456;
const numeroString = "456"

console.log(numero == numeroString)
// true
console.log(numero + numeroString)
// 456456
```

- __O ideal é sempre reforçar, dai a importância de perceber as diferenças entre os tipos,sempre reforçar que a variável guarde a informação no tipo de dado que ela espera__
- Com isto, nós iremos entender a __conversão explícita__
- Para isso, iremos utilizar duas funções do javascript. __A `Number()` e a `String()`. Então, sabemos que se queremos que uma string seja número, basta usarmos a função `Number` e vice-versa.__
- Então, no nosso exemplo anterior:

```js
const numero = 456;
const numeroString = "456"

console.log(numero == numeroString)
console.log(numero + Number(numeroString))
```

- __A resposta do console será `912`, a soma dos valores inseridos, convertidos. Porém, se nós tentarmos somar um texto, ele será convertido porém será `NaN`__

```javascript
let telefone = 12341234;
console.log("O telefone é " + String(telefone));
//O telefone é 12341234
```

- __Teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings. Também temos outra forma de realizar isto utilizando a função como método:__

```javascript
let telefone2 = 12341234;
console.log("O telefone é " + telefone2.toString()); 
```

- __O `toString()`, converte da mesma forma nosso texto, porém ele é um método de nossa variável, que fica mais interessante de se utilizar. Podemos também realizar a string de booleanos:__

```javascript
let usuarioConectado = false;
console.log(usuarioConectado)
// Retorna `false` booleano
console.log(usuarioConectado.toString());
// Retorna `false` como String
usuarioConectado = true;
console.log(usuarioConectado.toString());
// Retorna `True` como String
```

- Agora que entendemos como o `string()` funciona, podemos converter textos e booleanos em números através do `number()`:

```javascript
let largura = "10";
let altura = "5";

console.log(Number(largura) * Number(altura));
// 50
```

- Nós __pegamos os textos inseridos e os transformamos em números, Porém ambém utilizar o operador de soma `+` para isto, ficando `console.log(+ largura * + altura)`. Não podemos também converter textos em números, retornando `NaN`. Para os booleanos, veremos que, ao transformá-los em números, nos é retornado 0 e 1:__

```javascript
let usuario = false;
console.log(Number(usuario));
// 0
usuario = true;
console.log(Number(usuario));
// 1
```

- __Dica de boas práticas: Apesar do JavaScript fazer a maioria das conversões de forma correta, problemas podem aparecer, então é sempre bom fazer as conversões de forma explícita. Não é comum usar o operador de soma para fazer a conversão para números, mas este uso é possível. Conversões de booleanos não costumam ser muito usados, mas são possíveis.__
- __Dica de boas práticas: sempre procure nomear/identificar seu código da forma mais semântica possível, pensando em qual é o dado que está sendo salvo na variável e para que ele será utilizado. Além de evitar palavras reservadas, faz com que o código fique mais compreensível e de leitura mais fluida.__