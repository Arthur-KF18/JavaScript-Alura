#### JavaScript: métodos de array

- Este repositório contém todo o projeto desenvolvido no curso da Alura "JavaScript: Métodos de Array"
- De efeito __adicional fora do curso__, foi implementado o framework __Vite__ como servidor para rodar o projeto
  - Para iniciar o projeto, dentro da pasta "JS-Manipulando-o-DOM", com auxilio do terminal, rodar apenas a linha de comando: ```npm run dev```
  - __Iniciará o servidor local do projeto__
- Iremos trabalhar novamente no Alura Books, onde iremos ter uma API, disponibilizando uma lista de objetos e o nosso desafio vai ser pegar as informações que estão naquela lista, exibir essas informações na tela, que começaremos com um projeto base, com uns arquivos estáticos.
- Criar filtros para livros de front-end, back-end, livros de dados, livros disponíveis, manipular elementos na tela através do DOM e o JavaScript. 
  - Ordenação de preços, tudo isso e vamos focar em alguns métodos especiais do JavaScript como: o método `filter`, `forEach`. `map`, `reduce` e `sort`.

#### Editando a base do projeto

- Por estar estático, irermos personalizar o website e deixá-lo de forma correta e direta para que todo o website se comunique corretamente. É importante dizer que o conteúdo __está estático, porem queremos que as informações dos livros venham de uma API, pois é a maneira correta a se possuir dentro de uma loja de e-commerce__ 
- Com o __propósito de realizar tudo dinâmicamente, iremos comentar as linhas que contém os livros para utilizar a requisição de dados pelo JSON, utilizando JS__

#### Fetch de livros no console

- 