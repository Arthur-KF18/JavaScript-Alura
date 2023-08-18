### Anotações do curso de JavaScript: Objetos da Alura

- Esta pasta tem como função __a anotação dos assuntos descritos no curso de "JavaScript: Objetos" da empresa Alura__

## O que será visto no curso:

- Os objetos e o que são
- Como alterar seus campos
- Suas propriedades
- Entender melhor sobre o Formato JSON

## O que são Objetos

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
