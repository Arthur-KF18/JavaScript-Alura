### Anotações do curso de JavaScript: Objetos da Alura

- Esta pasta tem como função __a anotação dos assuntos descritos no curso de "JavaScript: Objetos" da empresa Alura__

#### O que será visto no curso:

- Os objetos e o que são
- Como alterar seus campos
- Suas propriedades
- Entender melhor sobre o Formato JSON

#### O que são Objetos

- Primeiro, iremos criar um arquivo chamado `objeto.js`. Nele iremos inserir dados, como no curso anterior, onde tinhámos vários nomes, alunos e até mesmo o cálculo de médias.
- Vamos criar uma lista de CPFs, __essa lista é uma estrutura de dados que guarda a mesma informação, várias vezes.__
- Então, __Tendo uma lista como essa, precisaríamos do nome da pessoa, idade e por assim vai. A estrutura de dados iria ficar maior, e teríamos mais de um tipo incluso nela. Se continuassemos a trabalhar com listas, teríamos de selecionar um item específico da lista para acessá-lo__
- O que seria mais correto, seria apenas selecionar __a pessoa ou o CPF de forma única. Para isso iremos utilizar os Objetos em JavaScript. Para criá-lo fazemos:__

```javascript
const personObject = {
    // valores
}
```

- Dentro deste objeto, temos __os campos, ou valores. Vale dizer que o objeto é uma entidade independente com propriedades e tipos.__
- Ou seja, para uma pessoa __suas propriedades são seu nome, idade e cpf. Com isto estabelecido, basta inserirmos assim:__


```javascript
const personObject = {
  name: 'Arthur',
  age: 32
}
```

- Então no nosso objeto pessoa o `personObject`, __nós inserimos a propriedade `name`, acompanhada de uma valor `'Arthur'`. E também, ao adicionarmos novas propriedades ao nosso objeto, utilizamos o `,` para separá-las. Também dizemos assim:__

```javascript
const nomeDoObjeto = {
    chave: valor
}
```

- __É mais comum se ouvir por propriedade do que chaves, devido a padronização destes objetos e ser uma boa prática. É importante dizer que a ordem não importa dentro de objetos, pois acessamos eles pela sua propriedade. Existem várias formas de acessá-los, e uma delas é através do destructuring em js:__

```javascript
const personObject = {
  name: 'Arthur',
  age: 32
}

const { name, age } = personObject
console.log(`O seu nomé é ${name} e sua idade ${age}`)
```

#### Acessando Dados

- Agora que entendemos a estrutura dos objetos, __precisamos apenas acessá-los. Para podermos fazer isso, iremos utilizar o exemplo de uma loja onde temos clientes. Iremoscriar alguns clientes para esta loja, com suas características:__

```javascript
const client = {
  name: "Arthur",
  age: 20,
  cpf: "1122233345",
  email: "Arthur@dominio.com"
};
```

- Agora, __precisamos apenas acessar um dos dados do cliente. Por exemplo o nome:__

```javascript
console.log(client.name)
// Arthur
```

- __O js vai entender que queremos acessar as propriedades individuais do nosso cliente, através do uso do `.`. Podemos também utilizar as template strings:__

```javascript
console.log(`O nome do cliente é ${client.name}, e sua idade é ${client.age}`);
// O nome do cliente é Arthur, e sua idade é 20
```

- Nós também __podemos utilizar métodos quando estamos acessando as propriedades de um objeto. Por exemplo, se quisermos apenas os 3 primeiros dígitos do CPF, utilizaremos o método `substring(valor inicial, valor final)`, onde com ele definimos o intervalo de caracteres que queremos selecionar:__

```javascript
console.log(`Os 3 primeiros digitos do CPF são ${client.cpf.substring(0, 3)}`);
// Os 3 primeiros digitos do CPF são 112
```

- Lembrando que __para cada tipo de dados, seja ele número ou string, teremos seus métodos.__

#### Acessando Dados com Colchetes

- Agora que entendemos como acessar as propriedades através do ponto, temos outra forma de acesso __é utilizando o operador de colchetes, similar aos arrays. Podemos fazer `nomeDoObjeto["propriedade"]`.__
- Nós acessaremos __as propriedades e o colchetes irá utilizar o `""`para acessar os valores:__

```javascript
console.log(`A idade é ${client["age"]}`);
// A idade é 20
```

- __O fator de aprendizado deste modo de acesso, é por que quando estamos acessando um objeto, não necessariamente sabemos as propriedades que ele possui. Através disto, podemos acessar as propriedades do objeto, mas não precisamos sempre utilizar este método__
- Com isto, por exemplo, podemos ter uma variável constante onde ela recebe os nomes __de todas as propriedades do objeto, e queremos que, para cada uma delas, ela acesse o objeto e retorne seu valor:__

```javascript
const keys = ["name", "age", "cpf", "email"];

keys.forEach((key) => { console.log(`A chave ${key} tem valor ${client[key]}`) });
/*
A chave name tem valor Arthur
A chave age tem valor 20
A chave cpf tem valor 1122233345
A chave email tem valor Arthur@dominio.com
*/
```

- Com isto, teremos acessado as chaves e trazido os valores de cada propriedade. __O uso dos colchetes é para cenários em que não necessariamente, sabemos quais campos vamos acessar. E se acessarmos uma propriedade inexistente, teremos o valor `undefined`__

#### Adicionando e alterando

- Agora que sabemos acessar os valores dentro de objetos, __é interessante poder manipular todos estes valores__
- Vamos então ter uma pessoa da seguinte maneira:

```javascript
const person = {
  name: "Luna",
  job: "Engenherira"
}
```

- Sabemos que podemos acessar os valores das propriedades através do `.`, __como `person.name` que é "Luna". Porém, e se quisermos adicionar uma nova propriedade e seu valor? Como por exemplo o número de telefone? Para isso iremos:__

```javascript
console.log(person.number);
// undefined
person.number = "12 3456 7891"
console.log(person.number);
// 12 3456 7891
```

- __Ao nós perdirmos o valor da propriedade inexistente, teremos como resultado `undefined`. Porém, ao declararamos este valor, e como sabemos que o js lê linha por linha, teremos como resultado a nova atribuição à nossa pessoa.__
- Isso também aconteceria se __aumentassemos o nome da pessoa, e quando pedissemos o objeto completo, iriámos ver o nome e o telefone que foram alterados e inseridos respectivamente. Isso acontece pois o js, entende que estamos reatribuindo o valor ao nosso objeto.__
- Porém, como é possível notar, sabemos que nos 3 tipos de variáveis que temos no js, __`const` é uma variável do tipo constante que é imutável. A palavra reservada `const` não nos permite reatribuir um objeto inteiro, mas permite que um objeto armazenado, a propriedade, possa ser alterada. As variáveis `const` não podem ser reatribuídas, mas seu conteúdo interno alterado__
