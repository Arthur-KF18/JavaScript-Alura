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