### JavaScript: Arrays

- Pasta referente aos estudos de arrays no curso __JavaScript: Arrays__ da empresa __Alura__

#### Introdução a Arrays

- Teremos como desafio calcular a média de um aluno que possui as seguintes notas: 10, 6.5, 8 e 7.5.
- Primeiro iremos criar um arquivo chamado `media.js` e nele iremos inserir nossa lógica. __Vale lembrar que estaremos utilizando outros métodos, poré trabalharemos com listas.__
- No modo mais simples, faríamos da seguinte forma:

```javascript
const grade1 = 10;
const grade2 = 6.5;
const grade3 = 8;
const grade4 = 7.5;

const average = (grade1 + grade2 + grade3 + grade4) / 4;
console.log(average)
```

- Onde temos as 4 notas, __e a média, o `average`, é calculado pela soma de todas e dividida pela quantidade de notas. Claro que é perceptivel que está muito longo o código, temos que saber exatamente a quantidade de notas existentes e está muito repetitivo__
- Como podemos melhorar isto? __Utilizaremos os arrays. Em determinados contexto, quando lidamos com uma ampla quantidade de notas por exemplo, precisamos de uma estrutura de dados, uma forma mais fácil de armazená-las, que são as listas ou arrays__
- Para criar um Array, faremos da seguinte forma:

```javascript
const grades = [10, 6.5, 8, 7.5];
```

- E para podermos selecionar um dos itens do nosso array, __utilizamos o `grades[0]`, que irá selecionar o primeiro item da lista. Porém, esta é uma maneira muito específica e que pode gerar bugs no código__

```javascript
const average = (grades[0] + grades[1] + grades[2] + grades[3]) / grades.length;
console.log(average)
```

- Este código, nos traz o resultado da média. __Utilizaremos uma propriedade chamada `length`. Esta propriedade se aplica unicamente aos arrays em js. Estamos dizendo que ele irá pegar cada item do array e será dividido pela quantidade de itens presentes nele__

#### Como funcionam os Arrays

- __Todo array precisa de um identificador, o nome da variável que armazena-o, e cada um destes valores, está guardado em uma pequena caixa, está que o computador armazenou apenas para guardar os valores. Além disto, o array tem praticamente o tamanho que quisermos.__
- __Cada item do array, é identificado através de um índice, ou, posição, sendo a posição de cada item do array, e nós tinhamos feito um array da seguinte forma:__

```javascript
const nomeVar = [item];
```

- __Vale lembrar que as listas no js, não se restringem a um único tipo de dado. Podemos ter strings, booleanos e os inteiros. É uma boa prática trabalhar com o mesmo tipo de dado em um array__

#### Adicionando e deletando elementos

- Agora que realizamos a media de notas, e se nós quisermos adicionar uma nova nota e realizar novamente a média? Podemos fazer isto da seguinte forma:

```javascript
const grades = [10, 6, 8];
grades.push(7);
//  [10, 6, 8, 7 ]
```

- __Utilizaremos os métodos, ou seja, funções que irão fazer parte do array. Utilizando o método `push` iremos "empurrar" ou adicionar uma nova nota à nossa lista de itens. É importante dizer que utilizamos a variável `const`, e mesmo desta forma, o array pode adicionar itens, já que são métodos próprios. A única coisa que o `const` não aceita, é uma nova atribuição.__
- Agora que já realizamos estas alterações, e se quisermos apagar um dos elementos da nossa lista? Podemos utilizar o método abaixo:

```javascript
const grades = [10, 6, 8];
grades.push(7);
// [10, 6, 8, 7 ]
grades.push(6);
// [10, 6, 8, 7, 6 ]
grades.pop()
// [10, 6, 8, 7 ]
```

- O método `pop()`, quando __inicializado, irá apagar o último item do array, alterando o array original__

#### Métodos de Array

- __Um método é uma função que serve como uma propriedade do array ou de um objeto. Ele pode realizar tarefas pré-definidas usando os dados do array e dos parâmetros que passamos para eles, como adicionar, remover ou até encontrar elementos.__
- Existem muitos métodos diferentes, então iremos ver alguns importantes:
  - `concat()`: __Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. É a concatenação de arrays. Não altera o array no qual foi chamado então precisamos salvar esse resultado em um novo array__
  - `filter()`: __Retorna uma lista contanto todos os elementos que passaram em um teste ou seja, uma função escrita por nós. Também precisamos salvar o resultado em um novo array__
  - `find()`: Funciona de forma parecida com o `filter()`, __porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.__
  - `findIndex()`: __Funcionar igual ao `find()`, mas retorna o indíce em vez do elemento, possibilitando usá-lo em outras partes do código__
  - `lastIndexOf()`: Igual ao anterior, porém, __começa do último elemento__
  - `forEach()`: __Executa uma função em cada elemento do array de forma individual. Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.__
  - `shift()`: __Retira o primeiro elemento do array, alterando o array original  trocando o índice de todos os elementos para um a menos do que eram__
  - `unshift()`: __Igual ao `push()` porém adiciona na primeira posição, alterando o array original__
  - `reduce()`: __Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.__
  - `reduceRight()`: __funciona igual ao anterior, porém começa do final do array e segue até o início__
  - `reverse()`: __Inverte a ordem dos elementos do array__
  - `slice()`: __Copia uma parte do array para outro array__
  - `sort()`: __Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.__
  - `splice()`: __Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.__

#### Arrays vazios

- De forma simplificada, podemos declarar um array vazio assim: `const arrayVazio = [];`. __Quando nós verificamos no console, ele retorna `[]` ou `0` se vermos seu `length`. Mesmo que sua largura seja 0, os valores não foram definidos, então `console.log(arrayVazio[1])` retorna `undefined`. Podemos utilizar a `,` para adicionar posições, mas sem um valor, sempre sera indefinido. É interessante dizer que, mesmo utilizando `const arrayVazio = [, , ,]`, indicando 3 posições, e adicionarmos um novo valor, como `arrarVazio.psuh(20)`, irá ser adicionado ao fim do array.__
- O resultado disto é `[<3 empty items>, 20]`, ou seja, __3 valores vazios e indica 4 de largura em nosso array. Chamamos isto de array esparso.__

#### Dividindo com slice()

- Sabendo de um dos métodos do javascript, __como `push` e `pop`, vamos utilizar agora o método `slice()` em uma lista de alunos e que devemos dividí-los em quantidades iguais__
- Quando utilizamos o método, __devemos prestar atenção, pois, dentro dele iremos inserir o intervalo de items, de qual começa e qual termina, ficando `metodo.slice(indexPrimário, indexFinal)`. Quando aplicamos isto, temos que saber que, se o intervalo for de 0 a 10, estaremos pegando apenas 9 items da lista, já que o índice não será incluído no novo array__

```javascript
const students = [
    'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'
];

students.slice(0, 10);
```

- No console, irá __exibiro array original, já que o `slice` não altera o array original. Para podermos ter acesso ao novo array que foi feito, utilizamos uma const, `const room1 = students.slice(0, 10)`, e quando a imprimimos, teremos um novo array, imprimindo dos 10 primeiros nomes. Para fazermos isto ao restante basta utilizar `students.slice(10)`, pois o método `slice` já entende que sem o 2 parâmetro, queremos todos os itens até o final.__
- Porém, estamos informando de forma __estática nossos items. Precisamos de uma forma mais dinâmica__

```js
const room1 = students.slice(0, (students.length / 2));
const room2 = students.slice(students.length/2);

console.log(room1);
// [
//   'João',      'Juliana',
//   'Ana',       'Caio',
//   'Lara',      'Marjorie',
//   'Guilherme', 'Aline',
//   'Fabiana',   'Andre'
// ]
console.log(room2);
// [
//   'Carlos',  'Paulo',
//   'Bia',     'Vivian',
//   'Isabela', 'Vinícius',
//   'Renan',   'Renata',
//   'Daisy',   'Camilo'
// ]
```

- Desta forma, __acessamos os valores, de forma dinâmica e que não resultará em problemas no futuro, já que no código `students.length` é o comprimento da nossa lista, e se quisermos até metade, utilizamos `students.length/2`__

#### Alterando com splice

- 