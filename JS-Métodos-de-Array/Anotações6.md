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

- Agora que comentamos os livros, precisamos fazer __uma requisição para esse `endpoint` que está anotado em nosso "requisição.txt" e pegarmos esse json e colocar os livros dentro do nosso AluraBooks.__
- Iremos criar uma pasta `app`, onde irá armazenar todos os códigos JS que forem criados.
- O `main.js` será responsável por de fato realizar __a requisição e dizer que temos a variável livros com base na requisição já feito.__
- Iremos criar duas variáveis, `livros`, com um __Array Vazio__, e a constante `endpointDaAPI`, na qual vai ter o link da API entre duas crases:

  ```js
  let livros = [];
    const endpointDaAPI = `https://guilhermeonrails.github.io/casadocodigo/livros.json`
  ```

  - Por fim, com a função `getBuscaLivrosDaAPI()`, que __deve ser declarada de forma assíncrona, já que estamos lidando com uma API e queremos que o processo ocorra de forma contínua__:

  ```js
    getBuscaLivrosDaAPI()
    async function getBuscaLivrosDaAPI() {}
  ```

  - Dentro da função assíncrona, iremos criar __toda a lógica de requisição__
- Queremos que essa função seja assíncrona porque __em nossa API estamos utilizando um projeto com alguns livros__. Mas vamos supor que tenhamos onze milhões de livros cadastrados, essa função demoraria muito e provavelmente teríamos um erro.
- Dizemos para a função que __precisa esperar uma promessa de receber todos os livros desse `endpoint`__, para isso vamos usar o `await`. __Passamos uma requisição e obteremos uma resposta__. 
- Iremos criar uma requisição como constante, chamada de `res` logo acompanhada pelo `await`, ou seja, __espere uma promessa__
- Para nós sempre manipularmos as requisições HTTP, __utilizamos o `fetch`__. Ou seja, queremos __realizar uma requisição para a constante `endpointDaAPI`, na qual contém o arquivo JSON dos livros__
- Nosso código ficará desta forma:

  ```js
    async function getBuscaLivrosDaAPI() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();

    console.log(livros);
    }
  ```
- No console, irá aparecer o array da variável `livros`, contendo 12 itens, ou seja, todos os livros que foram armazenados no JSON.
- Ou seja. Temos a variável `livros` que armazena um __Array vazio__, e ela recebe os dados da constante `res`, que __pegou a informação da API através do `fetch`__ e foi tratada através do `livros = await res.json()`, no qual __o array é atualizado com os dados tratados em formato JSON__
- Podemos melhor visualizar os dados da nossa API através do `console.table(livros)`, que __traz o resultado em forma de tabela__
  - Em detalhes, veremos que existem os parâmetros de cada livro, sendo __preco, autor, imagem, alt, quantidade e categoria__
- Se nós retirarmos o `await` da variável `livros`, __não dará tempo de ser processado o arquivo json que foi prometido, trazendo valores pendentes e vazios, porém sabendo que o resultado é o array de 12 itens__
- Dessa forma temos os __livros da API__. Trouxemos as informações que estavam no endpoint para nossa aplicação. Mas agora queremos montar na tela, manipular o DOM. Como faremos isso utilizando métodos especiais de arrays com JavaScript? 