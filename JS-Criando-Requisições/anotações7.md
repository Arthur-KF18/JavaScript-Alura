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
  - `import { conectaAPI } from "./conectaAPI.js";`
  - __Não devemos esquecer do .js do arquivo que estamos importando, para que ocorra corretamente__
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

#### forEach()

- Construímos a função `constroiCard` __que cria outros itens da lista do index.html, e também criamos a função `listaVideos` que nos retorna o valor da nossa API, do `db.json`.__ Agora precisamos __conectar essas duas funcionalidades, para cada item da lista da nossa API, um item da lista do index.html deve ser criado__.
- Na nossa função assíncrona, mudaremos o nome da constante `lista` para __`listaAPI`__. Após isso, iremos entrar nela __e utilizaremos o `forEach()`, pois, para cada elemento da lista, precisamos que seja construído o elemento HTML__
- Usando a `arrow function`, que __serve apenas em um único parâmetro, evitando o uso do `return`, iremos armazenar o valor vindo da `lista.appendChild()`__
  - Isso quer dizer que nossa função ficará desta forma:

 ```javascript
  const listaAPI = await conectaAPI.listaVideos();
  listaAPI.forEach(elemento => lista.appendChild())
 ```

- Então, nosso processo ocorrerá da seguinte forma:
  - `appendChild()` é um método do JS, onde __adiciona um nó ao final da lista de filhos de um nó pai especificado, ou seja, os filhos da tag `<ul>`que estão sendo criados pela função `constroiCard`, que são o `<li>`__
  - __Então a função, o método `appendChild`, ele vai anexar outros filhos para ela, outros filhos para o pai que é a lista. Os filhos que ele vai anexar, é que vai voltar lá no nosso `constroiCard`. Então ele vai construir vários `<li>` para colocar dentro do `<ul>`, que é a nossa variável lista.__
  - Então, iremos __chamar a função `constroiCard` dentro da nosso `appendChild()` e que nela irá receber os valores do `elemento`. Estes valores são os parâmetros dos itens dos nosso `db.json`, como `titulo`, `descricao`, `url` e `imagem`__
  - Por fim, nossa função `listaVideo` ficará:

 ```javascript
  async function listaVideos() {
    const listaAPI = await conectaAPI.listaVideos();
    listaAPI.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
  }
 ```

- Para entendermos melhor: __Para cada item da lista da API, criamos um card, que seria uma `<li>`, que foi anexada dentro da `<ul>` do index.html que estamos referênciando como `lista`__
- Tendo isto, iremos __transformar nossas `<li>` em dinâmicas, as que inserimos na função `constroiCard()`__
- Na função iremos __inserir os valores que devem ser retornados ao realizarmos a requisição da lista__ : `constroiCard(titulo, descricao, url, imagem)`, agora ele vai esperar receber esses valores, `título, descrição, URL e imagem` e vamos poder usar em outros lugares ali dentro, que vai ser lá dentro do `innerHTML`. e no `video.innerHTML` iremos __inserir as variáveis dentro da `template Strings`__:

```javascript
  video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}" title="${titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>
    `
```

- E por fim, iremos chamar a função `listaVideos()` e no navegador irá aparecer __todos os vídeos que estamos requisitando__
- Devemos também __apagar as `<div>` estáticas na nossa página `index.html` e somente deixar a tag `<ul class="videos__container" alt="videos alura" data-lista></ul>`__, já que fizemos o __tratamento de dados do `json` , criamos as funções responsáveis pela criação das tags de forma assíncrona__

#### Crescendo a lista

- Agora, precisamos __adicionar novos vídeos no AluraPlay e que eles possam aparecer na tela inicial__
- Se nós formos adicionar novos vídeos na lista, __Será um processo muito manual__
  - Por exemplo, queremos adicionar um novo vídeo do Dev Soutinho no nosso AluraPlay, e para isso iremos no `db.json`
  - A partir da última linha, iremos adicionar uma nova linha da seguinte forma:

 ```json
 {
  // valores anteriores
 },
    {
      "id": 13,
      "titulo": "O que você precisa saber pra começar com ReactJS!",
      "descricao": "2,5 mil visualizações",
      "url": "https://www.youtube.com/embed/00_rIYoeJtQ",
      "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true"
    },
 ```

- Quando nós voltarmos a página, __o vídeo terá aparecido, com título e suas informações__'
- Porém, quando nós vamos querer adicionar múltiplos dias e diferentes formas, __seria muito trabalhoso, e qualquer pessoa que tentasse adicionar, iria poder quebrar nosso código `json`__
- Assim, para isso temos nosso fomulário na página `enviar-video.html` e que terá esta função.
- Nossa missão agora é __transformar este formulário em dinâmico e adicionar novos vídeos no AluraPlay__

#### Requisição POST

- Vimos que para poder adicionar um novo vídeo no Alura Play é necessário adicionar manualmente no .json. Como podemos adicionar de uma forma dinâmica e constante?

- Primeiro, no nosso `conectaAPI.js` iremos adicionar uma __nova função assíncrona__
- Esta função será chamada de `criaVideo()` e __dentro dela iremos adicionar o método POST, já que por padrão o `fetch` realiza requisições do tipo GET pois o único parâmetro é a url e quando não especificado, sempre será este padrão__
- Assim, irá ficar da seguinte forma dentro de nossa função:

```javascript
  const conexao = await fetch("http://localhost:3000/videos"), {
    //método a ser especificado
  }
```

- Para que seja possível __declarar outro tipo de requisição, iremos adiciona-las entre chaves e qual será o tipo de requisição, que é um método__

```javascript
  const conexao = await fetch("http://localhost:3000/videos"), {
    method: "POST",
    // inserção de ações para o http:
    headers: {
      "Content-type" : "application/json"
    }
  }
```

- O `headers` __é uma interface da API do `fetch`, na qual permite várias ações na requsição do HTTP e a resposta destes `headers`. Essas ações incluem recuperar, definir, adicionar e remover cabeçalhos da lista de cabeçalhos da solicitação.__
- O objeto do __`headers` tem uma lista de cabeçalho associada, na qual inicialmente é vazia e consiste em 0, ou valores e nomes pares__. O `append()` é um método onde também podemos adicionar cabeçalhos como `myHeaders.append("Content-Type", "text/xml");`.
-__Em todos os métodos dessa interface, os nomes de cabeçalho são correspondidos por uma sequência de bytes que não diferencia maiúsculas de minúsculas.__
- __Um objeto `headers` também tem um guard associado, que assume um valor de `immutable, request, request-no-cors, response ou none`__
- Iremos inserir outra propriedade chamada `body`. A propriedade `body read-only` da interface `Response` é um `ReadableStream` no conteúdo do corpo
  - A interface `ReadableStream` da API Streams representa __um fluxo legível de dados de bytes. A API Fetch oferece uma instância concreta de um `ReadableStream` por meio da propriedade `body` de um objeto `Response`.__
- Ou seja, tudo que for escrito dentro dela, irá afetar o documento no qual nós estamos nos comunicando através do `fetch` e o `content-type` serve para especificar __qual o tipo de arquivo que está sendo enviado ou recebido. Quando nós estamos enviando ou recebendo um arquivo json, especificamos com `application/json`__
- Após isso, iremos inserir o `body`, onde iremos enviar __os dados que queremos cadastrar nessa requisição__:

```javascript
  headers : {
      "Content-type" : "application/json"
  },
  body : JSON.stringify({
      titulo: titulo,
      descricao: descricao,
      url: url,
      imagem: imagem
  })
```

- Estamos dizendo dentro desta propriedade, que __transforme em strings as variáveis `titulo`, `descricao`, `url` e `imagem` que estão associadas com os parâmetros existentes no `db.json`. O `body` é o corpo da requisição e quando colocamos estes parâmentro dentro dele, estamos enviando um objeto de variáveis e valores. E para uma requisição, precisamos enviar uma string, dessa forama é possível enviar a requisição POST__
  - `parâmetro : variável`, e que deve ser chamado na nossa função `criaVideo`:

```javascript
  async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({
            titulo: titulo,
            descricao: descricao,
            url: url,
            imagem: imagem
        })
    })
}
```

- __Dessa forma, iremos enviar para a função `criaVideo` estes valores e eles serão atribuídos as propriedades do `body`__
- Como não queremos utilizar o contador de cliques no momento, __as visualizações serão colocadas como um `template string`, ficando desta forma `${descricao} mil visualizações`__
- __então vamos botar uma variável que vai se transformar em uma string junto com o resto da frase, não vai aparecer que foi uma variável colocada ali. Dependendo do número, 5.000 visualizações, 10.000 visualizações, vai ficar bem variável e não vai ter influência do usuário, vai ser sempre tantas mil visualizações.__
- Como podemos retornar o resultado da conexão do usuário? Iremos simplemente criar a função __convertida da nossa conexao__
- Iremos __criar uma variável chamada `conexaoConvertida` que irá receber a variável `conexao.json()`__.
- __Quando fazemos as requisições, o `fetch` sendo assíncrono, ele irá retornar uma promessa e queremos esperar o resultado dela, através do `await` iremos esperar o retorno em json para podermos visualizar. E por fim, o usuário tem o retorno disso através do `return conexaoConvertida`__

```javascript
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
```

- __Depois de ter as "manhas do assíncrono", reutilizamos em vários locais__
- Por fim, importaremos a função `criaVideo`:

```javascript
  export const conectaAPI = {
    listaVideos, criaVideo
    // vírgula usada para sempre adicionar novas funções
  }
```

- __Dessa maneira, criamos toda a estrutura de uma função assíncrona, que faz uma conexão com a API e cria uma requisição POST, que é a de cadastrar novas coisas lá na nossa API, no nosso `db.json`.__

#### Captando Eventos

- Agora que aprendemos sobre POST, precisamos __conectar nossa requisiçao POST em nosso formulário de envio de vídeos__
- No `enviar-video.html` iremos inserir nas tags os seguintes data attributes:

```htm
<form class="container__formulario" data-formulario>

<input name="url" class="campo__escrita" 
required placeholder="Por exemplo: https://www.youtube.com/embed/FAY1K2aUg5g" id='url' data-url />

<input name="titulo" class="campo__escrita" 
required placeholder="Neste campo, dê o nome do vídeo" id='titulo' data-titulo/>

<input name="imagem" class="campo__escrita" 
required placeholder="Insira a url da imagem" id='imagem' data-imagem/>
```

- Assim, iremos identificar através dos data attributes nossas classes que iremos aplicar dinamismo
- Agora com isto, iremos criar um novo arquivo denominado `criarVideo.js` que será onde iremos adicionar as __funções denominadas para criação dos vídeos, ou seja, sua adição a nossa página__
  - `<script src="../js/criarVideo.js" type="module"></script>`
- Após criarmos nosso `criarVideo.js`, iremos criar uma constante na qual __irá armazenar o campo de formulário, o `data-formulario`. Iremos fazer isto para todos os elementos que atribuimos os data-attributes__

```javascript
  const imagem = document.querySelector("[data-imagem]").value;
  const url = document.querySelector("[data-url]").value;
  const titulo = document.querySelector("[data-titulo]").value;
```

- __Criamos as variáveis com um seletor de elemento, que foi o data attributes, e como queremos o valor do elemento, utilizamos o `.value`__
- Porém, como __não vamos utilizar contadores, iremos criar uma constante, a descrição do nosso vídeo era o número de visualizações. por não ser do controle do usuário, e como não temos um contador precisamos definir um número.__

```js
   const descricao = Math.floor(Math.random() *10).toString()
```

- O que ocorre é que, __`Math.floor` é um método matemático onde retorna o maior número inteiro menor ou igual ao seu argumento numérico, sendo ele os parâmetros `Math.random * 10`, onde gera um número aleatório entre 0 e 1, e multiplica por 10, onde transforma em um número inteiro. E que no final, o `toString()` transforma em string para podermos passar na nossa requisição__
- Agora, __iremos selecionar nosso formulário e adicionar um evento de clique, onde ao realizarmos a entrega dos dados, ele irá associar com os parâmetros escritos dentro do body no `conectaAPI.js`__
- `formulario.addEventListener("submit", evento => criarVideo(evento));`
- Iremos enviar para a função __`criarVideo(evento)` o `evento`, sendo assim, ele irá escutar e irá enviar para a função os dados recebidos através do `submit`. também iremos evitar com que a página recarregue automaticamente ao realizar o `"submit"`__

```js
  function criarVideo(evento) {
    evento.preventDefault();
    // ...
  }
```

- Agora que capta os valores, precisamos enviar para a função POST e realizar os movimentos corretos para que toda vez que enviar um vídeo, seja atualizado tudo corretamente

#### Para saber mais: Números aleatórios

- Em outros sites de compartilhamento de vídeos o número de visualizações para cada vídeo é gerado a partir do número de cliques dos usuários nele. Como o AluraPlay não possui esse sistema implementado, tentamos simular esse valor através da geração de números aleatórios.
- Para isso, utilizamos algumas das funções nativas do JS:
  - `Math.random()`: Usada para __retornar um número pseudoaleatório de ponto flutuante entre 0 e 1__. Para __conseguirmos um número maior, precisamos multiplicar esse retorno pelo intervalo desejado.__ Podendo ser qualquer número, entre 1 e 5, 1 e 10 ou até mesmo 1 e 100. __A forma como fazemos isso é graças ao `Math.random()*10` que irá criar um número entre dois valores.__
    - Geralmente o retorno é um __número real gigantesco, e temos que tranformá-lo em inteiro__
  - `Math.floor()`: Transforma o resultado da operação `Math.random` em um __número inteiro. Ela é usada para arredondar o número passado como parâmetro para seu inteiro mais próximo, levando como base o valor menor.__
  - `ParseInt()`: Este método __analisa um valor passado como parâmetro como uma string e retorna o primeiro número inteiro__
    - `const descricao = parseInt(Math.random() *10);`
    - Na prática, esse método funciona assim: __Imagine que você recebeu o valor 9.326843049629467, ele irá pegar o primeiro valor inteiro, ou seja, o número 9__.

#### Enviar vídeos

- Nós construímos uma função que fazia a conexão com API possibilitando a inserção de novos dados. Também criamos outra função que captava os dados que o usuário digitava no formulário da AluraPlay, e agora que falta? Unir essas duas funções. Queremos captar os dados e mandar para API.
- Primeiro iremos importar a `conectaAPI` da `conectaAPI.js`, e iremos inseri-la na nossa função `criaVideo`.
  - `conectaAPI.criaVideo(titulo, descricao, url, imagem);`. Nisto, __importamos a constante `conectaAPI`, que nos trouxe tudo aquilo que queríamos, tanto a função `criaVideo` quanto a `listaVideos`.__
  - Essas funções __que estão conectadas com nossa API são assíncronas, e são declaradas pelo async/await, nos retornando uma Promise. Então nós não conseguiríamos acesso aqui até a promise nesse ser resolvida, e o que temos que fazer então? Transformar essa função, `criaVideo` em assíncrona também__

 ```javascript
  async function criarVideo(evento){
    // ...
    await conectaAPI.criarVideo(titulo, descricao, url, imagem);
  }
 ```

- É importante também avisar __que a ordem dentro do criarVideo faz sentido, porque se formos no conectaApi é nessa ordem que ele está esperando receber, é título, descrição, URL e imagem.__ Se colocassemos em outra ordem eu poderiamos sem querer mandar a imagem para o campo que ele está esperando uma URL, isso ia dar vários problemas. __Então tem que prestar atenção quando estamos enviando algo para uma função, que também está esperando receber algo.__
- Precisamos que ele espere pois __pode ser que venha a resposta, um erro que queremos passar na tela e temos que passar para o usuário este status__
- Agora, precisamos passar o parâmetro de que __quando o vídeo for enviado, ele retorne uma página na qual irá ser a confirmação de entrega do vídeo__
  - `window.location.href = "../pages/envio-concluido.html";`: graças a este comando, ele irá __nos enviar para uma outra página, esta que irá trazer a resposta se ocorreu ou não a entrega do vídeo__
  - o método `window` __se refere a janela que estamos, e o atributo `location` só será executado se forem recebidos os dados da `criaVideo`__
- Por fim, ao adicionarmos um vídeo, aparecerá na tela o vídeo que escolhemos.
- Agora precisamos adicionar a funcionalidade de pesquisa para nosso website

#### Busca de vídeos

- Precisamos criar um método de busca para os vídeos, caso a lista for muito extensa, e precisemos procurar um vídeo em específico
- Por exemplo, na nossa url de vídeos, se colocarmos: `http://localhost:3000/videos?q=memes`, quando a busca for feita, iremos encontrar __apenas o título do vídeo que corresponde a esta mensagem!__
  - Dissecando esta URL:
  - ? : __Perguta aos "videos", que é a nossa categoria__
  - q: __q significa Query, porém no caso funciona como uma pesquisa geral dentro do db.json__
  - Em seguida, colocamos o `=` __que era para definir que eu queria um que fosse igual o termo que vamos colocar em seguida__, que foram os memes. 
  - Desta maneira, __colocando `q=palavra` podemos encontrar uma palavra para buscar o elemento que queremos__
- Dessa maneira, __conseguimos perguntar para os vídeos se existem vídeos com a palavra memes e ele me retornou o único que tinha.__
- Ou seja, baseado nisto, precisamos adicionar ao nosso js, __a mesma forma de busca e trazer os elementos correspondentes na tela__
- No nosso `conectaAPI.js`, iremos criar uma função assíncrona, na qual irá receber:

```js
async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}
```

- O que ocorre é que, __iremos criar uma função que irá esperar a conexão com a busca que iremos realizar, guardada na variável `termoDeBusca`. Após isso, irá ser transformada em Json e depois retornada em conexaoConvertida__
  - __declaramos como uma função assíncrona, criamos a variável conexão, que ela vai receber um fetch, depois convertemos o emaranhado de informações que traz em bytes para json, e depois vamos retornar esse valor para usar na tela__
  - A diferença é a __URL, onde estamos procurando um parâmetro, de forma a usar o `termoDeBusca` como template string. Podemos enviar para essa função quando formos chamá-la, e ela vai se adaptar. No lugar do fetch vai ficar ali meu termo de busca esperado, e vai ser como a URL que eu pesquisei no meu navegador, e vai retornar o vídeo que tenha só o que eu quero.__
- Por fim, só iremos exportá-la

