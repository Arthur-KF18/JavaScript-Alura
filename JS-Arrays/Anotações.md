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

