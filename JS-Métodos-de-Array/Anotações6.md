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

#### Como funciona o forEach

- Como poderemos pegar as informações do JSON, que estão guardadas na nossa função `getBuscaLivrosDaAPI` e exibi-las na tela?
- Poderíamos fazer um `for` para falar pegarmos o livro no __índice 0, que tem o título 0, que tem o preço 0 e montar na tela, essa estrutura da classe de livro que comentamos__. Dentro dessa classe de livro, iríamos colocar dentro os links entre outros elementos que fariam aparecer o livro.
- Porém, se formos utilizar o `for` ficaria muito __verboso, pois seria com cada livro diferente__. Para resolvermos isto, devemos pensar de forma dinâmica, então, podemos utilizar o `forEach`.
- O `forEach` __executa uma dad função em cada elemento de um array__. Isso funciona perfeitamente para o nosso código, já que __queremos pegar cada elemento do array e criar uma classe de livro, com todas as características que ele tem__

- Nosso código por exemplo com for:

```js
    let livros = ['Js', 'Python',  'HTML'];

    for (let i = 0; i < livros.length; i++) {
    console.log(livros[i]);    
    }
```

- Neste exemplo, quando imprimimos eles, irão aparecer os itens em sequência. Porém é muito __verboso__, temos de definir muitos fatores antes da impressão do nosso array. Para isso, podemos utilizar uma forma mais fácil utilizando o `forEach`

```js
    let livros = ['Js', 'Python',  'HTML'];

    livros.forEach(livro => {
        console.log(livro);
    })
```

- Fica menos verboso, ou seja, __para cada livro, imprima-o__. Lembrando de que a Arrow Function é uma __função anônima, que recebe o parâmetro e imprime-o__
- Podemos receber mais de um parâmetro no `forEach`, como __elemento, index e o array__

#### foreach de livros

- Agora que entendemos do `forEach()`, podemos inseri-lo na nossa página para cada livro. vamos pegar esse elemento, de `<section>` de livros e vou inserir cada livro dentro dessa `<section>`

```javascript
    const insereLivro = document.getElementById('livros');
```

- Depois disso, na nossa função Assícrona, __iremos criar uma função responsável por exibir o livro na tela, a `exibeLivro`__
- Dentro dela, iremos passar como parâmetro a variável `livros`

```javascript
    exibeLivro(livros);
```

- Após isso, iremos criar a função `exibeLivro` e dentro dela iremos criar um __"para cada livro", ou seja, o `forEach`__.
- Dentro dele, iremos inserir as __`tags` HTML responsáveis pela criação dos livros__:

```javascript
    function exibeLivro(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        insereLivro.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="imagens/Cangaceiro-Javascript.png"
            alt="Capa do livro Cangaceiro JavaScript" />
            <h2 class="livro__titulo">
                Cangaceiro JavaScript:
                Uma aventura no sertão da programação
            </h2>
                <p class="livro__descricao">Flávio Almeida</p>
                <p class="livro__preco" id="preco">R$29,90</p>
            <div class="tags">
                <span class="tag">Front-end</span>
            </div>
        </div>
        `
    });
}
```

- Sendo assim, __inserimos o elemento e seu conteúdo, que será o livro e todas suas informações__
- Porém, ele foi inserido 12 vezes, mas não é isso exatamente que queremos, __queremos as informações que estão contidas no livro que utilizamos.__
-  Vamos pegar então essas informações que temos no livro, __como título, preço, autor, imagem, alt, quantidade e categoria__.
- Primeiro __iremos alterar o source da imagem do nosso livro__, para isso, iremos criar um local que acesse essa informação, o `${livro}`.
  - Por estarmos mexendo com a nossa API, na tabela que vimos anteriormente, vemos que, __cada livro tem uma categoria chamada `imagem`, onde armazena a imagem do livro__
  - Com isto, iremos __adicionar a imagem para cada elemento HTML, porém, eles irão vir de acordo com a sequência do JSON, e que precisamos então organizá-los corretamente__
- Iremos inserir estes mesmos dados e associação em todo elemento para todo o nosso elemento:

```html
    <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}"
        alt="${livro.alt}" />
        <h2 class="livro__titulo">
            ${livro.titulo}
        </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$ ${livro.preco}</p>
        <div class="tags">
            <span class="tag"> ${livro.categoria}</span>
        </div>
    </div>
```

- Então já __fizemos a requisição e utilizamos o `forEach` para criar cada um desses elementos de livro.__