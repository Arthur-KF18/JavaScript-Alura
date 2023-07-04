#### JavaScript: Criando requisições

- Arquivo de anotações do curso __JavaScript: Criando requisições__
- A base deste projeto está utilizando __Vite__ para subir a página via servidor.
- O Projeto:
  - Nosso projeto será de __transformar o Alura Play em dinâmico, onde possa permitir que o Cloud nessa lista seja possível implementar uma ferramenta de busca
- Durante o curso vamos:
  - Aplicar Node.js e json-server
  - Mockar uma API
  - Requisições GET e POST
  - JavaScript assíncrono
  - Funcionalidade de pesquisa
  - Manipular o DOM
  - Tratar erros

#### Projetos estáticos

- Temos de transformar esse site em dinâmico, colocar funcionalidades, como a de __consumir essa lista de vídeos da tela inicial na parte superior da tela, de algum arquivo externo, de implementar funcionalidade de inserir novos vídeos nessa lista, e de realizar uma busca, porque essa lista pode ficar gigante de acordo com a quantidade de vídeos__.
- Durante todo o estudo, sempre é abordado o tema, a questão do __site estático e dinâmico__. Porém, o que quer dizer isto? Qual o significado?
  - Para um melhor entendimento, quando montamos um website __somente com HTML e CSS, estamos o deixando estático__. Isto quer dizer que __se ele precisar de uma alteração no texto ou que novas informações precisem ser adicionadas, terá de alterar no código__
  - Agora, em um site __dinâmico__, podemos alterar os textos, informações, tudo que for necessário, __através do consumo de uma API, ou seja, utilizar uma comunicação na qual vai trazer todos os dados para o website, sendo totalmente dinâmico__
- Podemos usar métodos com `async/await`, `fetch`, `forEach` para consumir APIs através do nosso JavaScript. Porém, vale lembrar que __Estamos consumido APIs, não produzindo-as__
- O trabalho de criação de APIs vem do __back-end__. Para que nós possamos ter um site dinâmico e correto, __temos de Mockar uma API__
- Mockar uma API, esta palavra vem de `Mockup`, que significa __um rascunho, um esboço de algo que vai ser feito no futuro mais profundamente. Aqui nós só vamos fazer um rascunho de uma API.__
- __Vamos usar o `json-server`, que é um pacote npm, que simula um servidor local no nosso computador. Mas ainda não conseguimos usar ele direto, nós precisamos fazer a instalação do Node.js__

#### Node.js

- Node.js é um __é um ambiente de execução JavaScript que permite executar aplicações desenvolvidas com a linguagem sem depender de um navegador. Com o Node.js podemos executar aplicações sem o uso do navegador. Além disso, com ele é possível criar praticamente qualquer tipo de aplicações web, desde APIs até servidores para sites estáticos e dinâmicos__

#### Json-server

- Agora com o Node.js, iremos criar um servidor local.
- __Json significa `JavaScript Object Notation`, onde ele é um tipo de formato de texto que ajuda a transferir dados de um sistema para o outro.__
- Iremos utilizar os comandos para instalação do Json-server:
  - `npm init` : inicializou o node package manager (npm) dentro do projeto. O npm __é um repositório de projetos OpenSource, além de ser uma ferramenta de linha de comando que permite a instalação de pacotes e bibliotecas__
  - `npm install -g json-server` : __Pedimos ao npm para que instale o json-server para podermos utilizá-lo no nosso projeto__
- A instalação é feita e então usamos o comando `json-server --watch db.json`, assim ele 
- Usamos o comando `json-server`, que é o próprio nome do pacote, e o `--watch`, que vai fazer ele ficar olhando se tem alguma alteração.

#### Requisição GET

- Iremos criar uma pasta contendo os arquivos javascript responsáveis __por realizar a comunicação do servidor__
- Dentro da pasta temos a `conectaAPI.js`, que vai ter as __funções principais do projeto__
- Iremos criar uma função __assíncrona chamada `listaVideos`, na qual, dentro dela teremos uma constante responsável por conter a conexão com a API.__ O nome da constante será __`conexao` e utilizaremos o `await` para o `fetch` armazenado que contém o link para nossa API que lista os vídeos que vão ser utilizados no website__

```javascript
  async function listaVideos() {
      const conexao = await fetch('http://localhost:3000/videos');
      console.log(conexao)
  }

  listaVideos();
```

- Temos que utilizar os métodos assíncronos pois __a função `listaVideos` deve esperar a resposta do `fetch` para ser executada__ 
- __O `fetch` ele é um método assíncrono, que ele tem como o único parâmetro obrigatório dele a URL da Api, e quando pedimos ele o `fetch` para API ele vai retornar uma promessa.__ 
- E é por isso que ele é um método assíncrono, __porque ele não está retornando já o resultado, ele está retornando uma promessa, e as promessas funcionam prometendo que algo vai acontecer alguma hora, e também essa promessa pode ser resolvida, ou ela pode ser rejeitada.__
- Quando for rejeitada, __podemos inserir páginas de erro e afins, o que ajuda em definir os problemas existentes__
- Quando nós __não coloca mais nenhum parâmetro, já que o único obrigatório é a URL, estamos fazendo uma requisição GET__
  - __Uma requisição GET, estamos solicitando para a API retorne vários dados para nós, nào queremos fazer nada com e;a, só queremos receber aqueles valores__
  - Como por exemplo uma __lista de produtos, usuários e afins, estamos fazendo solicitações GET__
- __Assimilando o conhecimento sobre assincronicidade, e assimilando o conhecimento do `fetch` que retorna uma `Promise`. Nós vamos conseguir o acesso dessa promessa resolvida ou rejeitada, mandando aguardar isso ser resolvido. Por isso que botamos esse `await` antes do `fetch`.__
- __Um pequeno detalhe. Quando usado Vite, pode existir um conflito, por isto, será realizado todo o curso, porém, o live server será quem usaremos subir o website__
- Quando verificamos o nosso GET no console do navegador, iremos ver uma resposta. Essa resposta estará da seguinte forma:

```javascript
  Response {type: 'cors', url: 'http://localhost:3000/videos', redirected: false, status: 200, ok: true, …}
```

- Isso indica que __a resposta aguardada ocorreu,não retornando uma promessa, já que tinhámos esperado a promessa ser resolvida. Ele resolveu e trouxe a resposta para nós.__
  - Porém, os valores dentro do json não foram acessados, e para isso, __iremos vamos na `conectaAPI.js`, depois da `conexao` iremos declarar outra função constante, onde chamaremos de `conexaoConvertida`, com um `await conexao.json()`, que irá transformar os dados recebidos em Json e iremos imprimí-lo no `console.log(conexaoConvertida)`__
  - Ao reabrirmos o navegador, iremos ver que tivemos como resultado __um array de vários objetos, 12 itens nos quais trazem os dados dos vídeos que utilizaremos__
  - O método `json` transforma __todos os dados em formato de bytes e tranforma em um objeto no qual podemos acessar estes valores.__
  - Agora, como poderemos acessar nossa requisição em outros lugares que acabamos de fazer? vamos importar este valor `conexaoConvertida`

  ```javascript
    return conexaoConvertida
  ```

  - __Nossa importação ocorre através do retorno da nossa função `conexaoConvertida`, onde há uma lista na qual está com todos os objetos do `db.json`. Quando chamar essa função ele vai retornar aquela lista cheia de objetos para onde for chamada__
  - Para nós conseguirmos importar em outro arquivo, __vamos utilizar o método `export` para uma constante `conectaAPI` na qual vai receber a função `listaVideos`__
    - Ele irá exportar o que estivermos pedindo, no caso, __ele vai exportar uma variável chamada `conectaAPI` que vai receber um objeto cheio de funções. Nós conseguimos passar tudo ali dentro e usar só o que queremos__
  
#### Manipulando o DOM

- Já fizemos a conexão com a API e que ela irá retornar os dados para nós, além de utilizar o `export` para utilizá-la em outros arquivos
- Para que estes dados apareçam na tela, __devemos criar um novo arquivo javaScript responsável por realizar essa função__
- Criando o `mostraVideos.js`, iremos importá-lo no HTML, porém da seguinte forma:
  - `<script src="./js/mostrarVideos.js" type="module"></script>`
  - Quando trabalhamos com __`import`, `export` para poder usar trechos de código em outro arquivo, estamos trabalhando com o modularização, então precisamos declarar que isso está acontecendo, e para fazer isso é só botar um `type"module"`.__
- Como podemos selecionar o elemento da lista, já __que queremos a lista dinâmica?__
- Utilizando os __`data-attributes` iremos realizar a organização da lista de forma dinâmica e que irá aparecer na nossa tela__
- No `mostrarVideos.js`, iremos fazer da seguinte forma:
  - Criaremos uma constante chamada __`lista` que irá receber o `data-lista` que foi inserido na tag `<ul>` que possui a lista de vídeos__
  - Com ela, iremos individualizar os elementos de forma a __manipular os elementos dentro dele e forma única, apenas para aquele elemento__
  - `const lista = document.querySelector("[data-lista]")`
  - utilizamos o `...-lista` para deixar __bem específico sobre o que estamos tratando__
- Tendo isso, temos que construir os `<li>` que temos de elementos dentro da lista, e para isso utilizaremos o `.createElement("li")`
  
  ```javascript
    function constroiCard() {
    const video = document.createElement("li");
    video.className = "videos__item";
  }
  ```

- Iremos criar uma função `constroiCard` na qual __irá ser responsável pro criar esse card que contém os vídeos.__
  - Dentro dela, iremos criar uma __Variável constante chamada `video`, onde irá criar um elemento `<li>` e dentro dele iremos passar a classe `videos__item`, que tem os estilos dos nossos itens__
- Após a criação, __precisamos inserir os elementos presentes na `<li>`, que é nosso vídeo, através do `innerHTML`

```javascript
  video.innerHTML = `
    <iframe width="100%" height="72%" src="https://www.youtube.com/embed/AL5Dr2tS16o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="./img/logo.png" alt="logo canal alura">
        <h3>Qual é o melhor hardware para programação com Mario Souto</h3>
        <p>236 mil visualizações</p>
    </div>
    `
```

- No fim, iremos utilizar o `return video;`, __para a criação do elemento e como ele deverá ficar, além de podermos utiliza-lo em outro lugar.__
- Porém, ainda precisamos inserir corretamente os valores, de forma que __ele traga os dados do nosso `db.json`, já que estamos realizando uma forma dinâmica__
- Agora precisamos __acessar os valores da lista, ou seja, a requisição que está trazendo os dados da list, iremos realizar o `import` na primeira linha, já que nosso arquivo `mostrarVideos.js` é um módulo__
  - `import { conectaAPI } from "./conectaAPI";`
  - agora __conseguimos usar o `conectaAPI` e as funções dentro dele
  - E por fim, precisamos somente criar a função necessária para consumir os dados daquela API:

 ```javascript
  async function listaVideo() {
      const lista = await conectaAPI.listaVideos();
  }
 ```

- Iremos criar uma função assíncrona, na qual irá ter uma constante onde __ela vai esperar a `conectaAPI` retornar a lista de vídeos que temos no `db.json`__
- Assim poderemos utilizá-la para __criar cards ou elementos para nossa página__
- Sendo assim, __importamos a variável que estávamos exportando do `conectaAPI.js` e fizemos a questão da assincronidade para aguardar as coisas serem resolvidas, tendo acesso aos valores__