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

- Seguindo com o exemplo de alunos, imaginemos que temos uma sala que existam 6 alunos, dos quais, `Ana` e `Caio` saíram:

```javascript
const room3 = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];
```

- Para que possamos retirar __um item da lista, de forma onde seja em qualquer posição, utilizamos o `splice()`:__

```javascript
const room3 = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];
room3.splice(1, 2);

console.log(room3)
// [ 'João', 'Lara', 'Marjorie', 'Leo' ]
```

- __Há uma pequena confusão entre o `slice` e o `splice`. O `slice` cria um intervalo para dividir um array em novas listas e o `splice` é utilizado para retirar items da lista de acordo com um intervalo. Podemos adicionar um 3 parâmetro responsável por adicionar o item que precisamos no lugar: `room3.splice(1, 2, 'Rodrigo');`__
- __Sendo assim, métodos de array que alteram o original não precisam de uma constante para guardar seu valor__

#### Concatenando arrays

- Para nós podermos juntar dois arrays, __basta utilizar o método `concat(array)`, onde dentro do nosso métos, será inserido o array que iremos juntar com outro. Utilizando os exemplos anteriores:__

```javascript
const combinedRooms = students.concat(room1);
console.log(combinedRooms);
// [
//   'João',      'Juliana',  'Ana',
//   'Caio',      'Lara',     'Marjorie',
//   'Guilherme', 'Aline',    'Fabiana',
//   'Andre',     'Carlos',   'Paulo',
//   'Bia',       'Vivian',   'Isabela',
//   'Vinícius',  'Renan',    'Renata',
//   'Daisy',     'Camilo',   'João',
//   'Juliana',   'Ana',      'Caio',
//   'Lara',      'Marjorie', 'Guilherme',
//   'Aline',     'Fabiana',  'Andre'
// ]
```

- Podemos alterar a ordem, __de acordo com a sequência de array selecionados, `room1.concat(students)` traria um array de sequência diferente__

#### Lista com 2 dimensões

- Trabalhando com os exemplos anteriores, iremos ter duas listas. Uma será apenas de alunos e a outra das médias de alunos. __Podemos criar uma única lista que contém o conteúdo de ambas as listas:__

```javascript
const room3 = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];
room3.splice(1, 2, 'Rodrigo');

const grades = [10, 6.5, 8, 7.5, 8];
const studentsTable = [room3, grades];

console.log(studentsTable)
console.log(`O aluno da posicao 2 é ${studentsTable[0][2]} e sua média foi ${studentsTable[1][2]}`);
// O aluno da posicao 2 é Lara e sua média foi 8
```

- __O que ocorreu foi: Guardamos em uma variável duas listas. Vale lembrar que quando inserimos `studentsTable[0]` estamos selecionando o item da nossa lista. Ou seja, selecionamos uma lista, e o próximo `[1]` marca a posição que queremos da lista selecionada. O nome que damos a isto é uma lista de duas dimensões, ou seja, uma lista formada por outras listas. Também podemos chamá-la de matriz__

#### Procurando na lista

- Sabendo de tudo que já foi passado, __agora iremos ter como exemplo uma função que recebe como argumento o nome do aluno. E irá verificar se o aluno está presente e retornando sua média. Caso não esteja, terá uma mensagem de que o aluno não foi encontrado:__

```javascript
function showNameAndScore(student) {
    if (studentsList[0].includes(student)) {
        console.log(`O aluno ${student} está cadastrado`)
    } else {
        console.log('aluno não encontrado')
    }
}

showNameAndScore('João');
```

- O que ocorreu foi: __Criamos uma função que recebe como parâmetro o nome do aluno. Utilizando o método `includes`, estamos verificando se, na primeira lista, existe o aluno com o nome que inserimos. Sendo assim, utilizamos o `if` verificando se existe ou não. O método `includes` faz com que em seu parâmetro receba o valor inserido na função, verificando corretamente, sendo então um retorno booleano, `true` ou `false`__
- Agora, __precisamos adicionar a média do aluno, e para isso precisamos acessar o índice do nosso `student`. Faremos isto com:__

```javascript
const index = studentsList[0].indexOf(student);
```

- O que ocorre é que __como nosso parâmetro da função é o valor inserido, no qual verifica o aluno existente, precisamos acessar a posição dele dentro da lista. Para isso, utilizamos o método `indexOf()`, que como se autodescreve, é a posição do elemento inserido da lista. Com está informação, vamos acessá-la e passar qual é a média do aluno:__

```js
const studentAverage = studentsList[1][index];
```

- __Neste trecho de código, selecionamos a segunda lista e dela nós acessaremos a posição do aluno inserido, dessa forma, conseguindo trazer de fato a nota do aluno e a posição do mesmo__

#### Desestruturando uma lista

- Nosso código está amplamente funcionando, porém, temos muito texto sendo inserido e pode se causar um pouco de confusão ao ler ele. para isso, iremos refatorá-lo e aplicar uma desestruturação:

```javascript
const [students, averages] = studentsList;

const index = students.indexOf(student);
const studentAverage = averages[index];
```

- O __`const [students, averages] = studentsList;` está pegando o valor de cada lista quando requisitada. E por estarmos usando listas, utilizamos o `[]`. O valor da primeira lista esttá armazenado em `students` e o da segunda lista em `averages`. Desta forma__

#### For clássico

- Vamos supor que temos uma lista de números e precisamos imprimi-los um de cada vez. Antigamente, iríamos apenas selecionar um item da lista de cada vez e imprimí-lo, porém, isto não é uma boa prática. Para isso __utilizaremos o laço de repetição `for`. O "para" é uma condição que irá executar repetidas vezes até finalizar os itens da lista. Porém, ela também pode ser utilizada de forma única.__

```javascript
const numbers = [100, 200, 300, 400, 500, 600];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}
```

- Neste trecho de código, temos uma lista chamada `numbers`, que recebe todos os valores. __Após isto, temos nosso `for`, que irá ter 3 variáveis. `let i = 0` será o índice que irá começar o loop. `i < numbers.length` é o tamanho do nosso array, e `i++` é a soma para o próximo item. Ou seja, `i` será a vez, e irá se repetir até cumprir o tamanho de itens dentro do array. Lembrando que `i` é o índice do nosso array__
- `const number = numbers[i]` é  __responsável por selecionar cada item do nosso array de acordo com sua posição, e depois será impresso em `console.log(number)`__

#### Média com For

- Agora que já sabemos do `for`, __se quisermos calcular as médias de um aluno?__

```javascript
const grades = [10, 6.5, 8, 7.5];
let gradesSum = 0;

for (let i = 0; i < grades.length; i++) {
    const grade = grades[i];    
    gradesSum += grade;
}

console.log(gradesSum)
// 32
```

- O que ocorreu foi; __Criamos o laço de repetição, e declaramos a variável `gradesSum`, ou seja, a soma das médias. Precisamos iniciá-la em 0, pois ela irá receber os valores do loop em `grades[i]`. O uso do operador `+=` significa que é um operador de atribuição no qual atribui um valor ao seu operando esquerdo com base no valor do seu operando direito, que é o valor de cada item durante o loop.__
- Desta forma, com a soma de todas as notas, basta calcular a média com:

```javascript
const average = (gradesSum / grades.length);
console.log(`A média do aluno foi de ${average}`);
// A média do aluno foi de 8
```

#### Média com For of

- Agora que vimos o `for`, __utilizaremos uma nova estrutura chamada de `for of`. Escreveremos da seguinte maneira:__

```javascript
const grades2 = [10, 6.5, 8, 7.5];
for (let element of grades2){
    console.log(element);
}
// 10 6.5 8 7.5
```

- O __`for of` é uma estrutura de repetição exatamente igual ao `for` tradicional, sendo composto apenas por uma expressão, sendo assim "para cada elemento de um array, execute o código dentro dos `{}`".__
- O `for of` __é de uso mais indicado ao trabalharmos com listas. Diferente do `for` clássico, onde declaramos de forma manual o controle, a condição e execução, o `for of` realiza elas de forma automatica, sabendo que deve percorrer o array do início ao fim, e que podemos selecionar o valor de cada elemento que fica armazenado na variável `element`__
- Podemos realizar a soma de todas as notas desta maneira:

```javascript
const grades2 = [10, 6.5, 8, 7.5];
let grades2Sum = 0;

for (let element of grades2) {
    grades2Sum += element;
}

console.log(grades2Sum)
// 32
```

- E se quisermos realizar a média das notas:

```javascript
const average2 = (grades2Sum/grades2.length)
console.log(`A média do segundo aluno é: ${average2}`)
// A média do segundo aluno é: 8
```

- Porém, __vale ressaltar que o uso dele depende do contexto. Apesar de ser conciso, ele funciona em arrays que queremos percorrer do início ao fim, e todos os elementos. A diferença do `for` tradicional, é que o tradicional pode ser mais flexível de ser utilizado, em contextos mais complexos. O `for of` não possui toda essa flexibilidade, podendo ser mais utilizado para verificar cada item da lista__
- Uma outra forma de se utilizar o `for`, é __verificar a quantidade de números pares de 0 a 100:__

```javascript
const evenNumbers = [];

for (let i = 0; i <= 100; i += 2) {
  evenNumbers.push(i);
}
console.log(evenNumbers);
// [
//    0,  2,  4,  6,  8, 10,  12, 14, 16, 18, 20,
//   22, 24, 26, 28, 30, 32,  34, 36, 38, 40, 42,
//   44, 46, 48, 50, 52, 54,  56, 58, 60, 62, 64,
//   66, 68, 70, 72, 74, 76,  78, 80, 82, 84, 86,
//   88, 90, 92, 94, 96, 98, 100
// ]
```

- Usando operadores como o `+=`, onde __será adicionado 2 para cada item que será feito no loop__

#### Média com For Each

- Continuando nosso cálculo de média de notas, __iremos utilizar outro método amplamente utilizado no desenvolvimento que é o `for Each`. O "para cada" é um método do objeto array onde passamos uma função anônima que irá realizar uma ação para nosso código:__

```javascript
const grades3 = [10, 6.5, 8, 7.5];
grades3.forEach(() => {
    console.log('Hi')
})
```

- No caso, __ele também é um método de array, que executa uma repetição, um loop. Nós fizemos o loop de que para cada item do array, imprimisse o `console.log`. Podemos utilizar funções anônimas ou funções de seta. Isto ocorreu pois a função anônima foi parâmetro de outra função, a `forEach`, chamamos isso de Callback.__
- O Callback __chama de volta uma função que foi passada como parâmetro, e que está sendo chamada para cada elemento do array__
- Uma das especifidades do `forEach`, __é que utilizamos um parâmetro que receberá os valores do array:__

```js
const grades3 = [8, 10, 6, 7];
let sumGrades3 = 0;

grades3.forEach((grade) => {
    sumGrades3 += grade;
})

const average3 = (sumGrades3 / grades3.length);
console.log(`A nota do terceiro aluno é ${average3}`);
// A nota do terceiro aluno é 7.75
```

- Nós também podemos passar __mais de um parâmentro, como o índice de cada elemento por exemplo:__

```javascript
const grades3 = [8, 10, 6, 7];
let sumGrades3 = 0;

grades3.forEach((grade, index) => {
    sumGrades3 += grade;
    console.log(index)
    // 0 1 2 3
})
```

- Desta forma, __podemos acessar o índice de cada valor presente no nosso array. O único parâmetro obrigatório é a função que recebe o elemento, pois como essa função tem o nome de callback, ela vai ser executada para cada elemento do array, sendo que pode receber de 1 a 3 argumentos; o elemento, o índice e o array atual, respectivamente__

#### Revisando Callbacks

- A função callback __é uma função que passamos como parâmetro de outra. Sabemos que, além de utilizar a função anônima `function (){}`, nós podemos utilizar funções de seta, ou arrow functions `() => {}`:__

```javascript
const names = ['Arthur', 'Evaldo', 'Felipe'];

names.forEach((name) => {
    console.log(name)
})
// Arthur Evaldo Felipe
```

- Porém, __essa não é a única forma de trabalharmos com funções callback. Como estamos lidando com funções dentro de funções, podemos utilizar uma função declarada:__

```javascript
const names = ['Arthur', 'Evaldo', 'Felipe'];

function showName(name) {
    console.log(name)
}

names.forEach(showName);
```

- Com isto, __para cada valor inserido, será impresso. Sem a necessidade de utilizar as arrow functions diretamente. Como queremos referênciar uma função, só a chamamos sem utilizar `()`__

#### Método map()

- Agora que já vimos o `forEach`, __iremos ver mais um método das listas chamado de `map()`. O `map()` ou "mapeamento", é um método que invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.__
- Para entendermos melhor seu funcionamento, iremos utilizar um exemplo de pontuação extra as notas em uma determinada lista:

```js
grades.map((grade) => {
  return grade + 1
})

console.log(grade)
// 40.5 (soma de todos os elementos)
```

- O que ocorre é que, __`map()` também é uma função callback, assim como o `forEach`,, por isto utilizamos uma arrow function, recebendo os mesmos parâmetros que passamos para o `forEach`. Dentro dela, iremos retornar o valor que queremos sobreescrever, sendo o `return grade + 1`. O `map()` executa isto pois também é uma estrutura de repetição, e que irá ler cada nota, sendo assim, o `map()` é muito apropriado para reescrever arrays, mas não altera o original__
- __Por fim, ao imprimirmos, precisamos atribuir o resultado dele a um novo array:__

```javascript
const newNotes = grades.map((grade) => {
  return grade + 1;
})

console.log(newNotes);
// [ 11, 10.5, 9, 8, 7 ]
```

- Com isto, nosso código terá mais um adicionado ao nosso array. Podemos verificar que, se a nota for maior do que 10, retorna 10, porém, se for menor, irá adicionar:

```javascript
const newNotes = grades.map((grade) => {
  return grade + 1 >= 10 ? 10 : grade + 1;
})

console.log(newNotes);
```

- __Não substitui o `forEach`, mas pode ser utilizado dependendo do contexto em que está sendo aplicado. Vale lembrar que o uso do `{}` e o `return` é opcional quando temos apenas um retorno simples__

#### Alterando Strings com map()

- Iremos agora, __padronizar uma determinada lista de alunos, onde teremos que colocar todas as letras de seus nomes, com a primeira sendo maiúscula:__

```javascript
const names = ['ana Julia', 'Caio vinicius', 'BIA silva']
const standardNames = names.map((name) => name.toUpperCase())

console.log(standardNames)
```

- Desta forma, __utilizando o método map, percorremos todo o array, criando um loop, onde a função de seta irá pegar cada palavra e deixá-la em letras maiúsculas__
- __A principal diferença entre o `forEach` e `map()` é  que enquanto o método `forEach` não tem um retorno, o método `map()` pode retornar um array se a função callback retornar algum valor.__

#### Filtrando elementos

- Utilizando os conceitos até agora aboradados, iremos criar um filtro onde __depois de termos as médias dos alunos, trazer quem está reprovado ou não:__

```js
const students = ['Ana', 'Marcos', 'Maria', 'Mauro']
const averages = [7, 4.5, 8, 7.5]
```

- A partir destas listas, __utilizando o método `filter()`, iremos filtrar apenas os alunos que estão reprovados, porém ele retorna um novo array.__

```javascript
const students = ['Ana', 'Marcos', 'Maria', 'Mauro']
const averages = [7, 4.5, 8, 7.5]

const reproved = students.filter((student, index) => averages[index] < 7)

console.log(reproved)
// [ 'Marcos' ]
```

- Desta forma, teremos um __filtro da nossa lista, tendo um novo array que possui o valor que foi filtrado, sendo assim, sabemos qual aluno está reprovado. Para sabermos os aprovados, basta trocar a lógica para `>=`. Nota-se que, utilizamos apenas o segundo parâmetro, pois é ele quem acessa a nossa segunda lista. Uma conveção utilizada é o `_` para dar um espaço vazio a este item que não será utilizado. Precisamos obrigatoriamente utilizar um nome no primeiro parâmetro pois o segundo é o índice__
- Lembrando que __o `filter` retorna `true` ou `false` quando estamos trabalhando com ele.__

#### Somando com reduce

- Um método muito usado e recomendado é o `reduce`. __O método de arrays `reduce()` é muito flexível, tendo de mais de uma aplicação. Para entendermos seu uso, iremos ter 3 listas de notas de 3 diferentes salas, e que iremos calcular a média delas__

```javascript
const roomJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const roomJava = [6, 5, 8, 9, 5, 6]
const roomPython = [7, 3.5, 9, 9.5]


```

- O método `reduce` __irá iterar sobre o array e iremos passar um função callback para ele. Os parâmetros que ela recebe são diferentes, tendo o primeiro argumento o `acumulador` e o segundo sendo a `grade`, ou seja a nota. Além deste callback, iremos passar um segundo parâmetro para o `reduce`, que é o `0`, ele é o valor inicial do acumulador. Ele tem o papel de soma de notas como no `forEach`.__
- Para podermos fazer isto, __retornamos para a função o `acumulador + grade`. Lembrando que o `reduce` não altera o array original. Por isso, temos que guardar o valor do `reduce` em uma nova variável.__
- Com isto, nosso código ficará da seguinte maneira:

```javascript
const roomJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const roomJava = [6, 5, 8, 9, 5, 6]
const roomPython = [7, 3.5, 9, 9.5]

function calcAverage(roomGrade) {
  const sumRoomGrade = roomGrade.reduce((acc, grade) => {
    return acc + grade
  }, 0)

  const average = sumRoomGrade / roomGrade.length

  return average
}

console.log(`A média da sala de JS é ${calcAverage(roomJs)}`)
// A média da sala de JS é 7.5
console.log(`A média da sala de Java é ${calcAverage(roomJava)}`)
// A média da sala de Java é 6.5
console.log(`A média da sala de Python é ${calcAverage(roomPython)}`)
// A média da sala de Python é 7.25
```

- __A nossa função, vai retornar a soma de todos os elementos presentes dentro do nosso array. Com isto, iremos pegar a soma dos elementos e dividí-los pelo tamanho do nosso array que inserimos em `roomGrade`. Com isto, podemos imprimir a média das salas__
- Em suma, __`reduce` é um método mais complexo de se lidar, porém, sabendo que o acumulador, o `acc`, recebe o `0` que passamos como parâmetro do `reduce`, sabemos que o loop irá começar de 0 e que ao somarmos com a variável `grade`, ele irá começar em 0 e irá somar com uma nota da lista que selecionamos. Vale lembrar que se inserirmos `return acc + 1`, será somado 1 a cada valor que está sendo iterado no loop, como 1 + 1, 2 + 1, e assim por diante__

#### Clonando com spread operator

- Agora que vimos sobre o método `reduce` e sua importância, __se nós termos uma lista de notas, e quisermos adicionar mais um nota, porém sem alterar o array original, e incluir em uma nova lista. Como podemos fazer isto?__
- Vendo o exemplo abaixo:

```javascript
const grades = [7, 7, 8, 9]

const newGrades = grades

newGrades.push(10)

console.log(`as novas notas são ${newGrades}`)
// as novas notas são 7,7,8,9,10
console.log(`as notas originais são ${grades}`)
// as notas originais são 7,7,8,9,10
```

- Apesar de __termos feito listas diferentes e termos utilizado `const`, isso não assegura que o array permanecerá igual. Isso ocorre pois o operador `=` está atribuindo um novo array ao antigo, transformando-os em um mesmo único array. Para resolvermos este problema, faremos__

```javascript
const grades = [7, 7, 8, 9]

const newGrades = [...grades]
```

- Utilizamos o __operador `...` chamado de spread operator, ou, operador de espalhamento. O que ele faz é pegar todo o conteúdo de um array e "espalhar" seus valores exatamente no local que estamos escrevendo. É como se estivéssemos pegando os valores do `grades` e copiando-os para o `[...grades]`, como se fosse a mesma coisa. Como resultado teremos:__

```javascript
const grades = [7, 7, 8, 9]

const newGrades = [...grades]

newGrades.push(10)

console.log(`as novas notas são ${newGrades}`)
// as novas notas são 7,7,8,9,10
console.log(`as notas originais são ${grades}`)
// as notas originais são 7,7,8,9
```

- Desta maneira, __teremos o array intacto. Vale lembrar que podemos utilizar este operador como um parâmetro de uma função. E também podemos apenas utilizar o `[...grades, 10]` para adicionarmos um novo valor, e também podemos inserir no começo do nosso array__
- vale dizer que __utilizamos este operador pois arrays são do tipo primitivo, e eles alteram seu próprio valor ao atribuirmos com `=`. Isto ocorre apenas com tipos primitivos em js, não ocorrem em funções por exemplo__

#### Removendo elementos repetidos

- Agora, em uma lista onde temos nomes repetidos, precisamos removê-los e deixar apenas um de cada:

```javascript
const names = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
```

- Para podermos fazer isto utilizando o método `set`, __este método é uma estrutura que é uma classe em js. Para podermos utilizá-lo, faremos:__

```javascript
const mySet = new Set()
```

- __É uma classe que já possui algumas lógicas internas. Ele é parecido com as listas, porém funciona de forma diferente. Uma de suas regras é que os elementos de um set não podem se repetir. Para isso, dentro dos `()` podemos inserir uma lista:__

```javascript
const names = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João']

const mySet = new Set(names)
console.log(mySet)
// Set(4) { 'Ana', 'Clara', 'Maria', 'João' }
```

- Assim, teremos a remoção das nossa duplicatas, porém, __queremos nosso array completo novamente, para isso iremos:__

```javascript
const names = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João']

const mySet = new Set(names)
const newNames = [...mySet]

console.log(newNames)
// [ 'Ana', 'Clara', 'Maria', 'João' ]
```

- __Assim, nós iremos retornar a lista completa, com apenas os elementos não repetidos sem repetição dos elementos. E também utilizaremos o spread operator no nosso set para guardar em um array o valor deles.__
- Podemos também __passar diretamente a nossa condição, já que o spread operator permite esta forma de interação deixando mais concisa:__

```javascript
const names = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João']

const newNames = [...new Set(names)]

console.log(newNames)
// [ 'Ana', 'Clara', 'Maria', 'João' ]
```