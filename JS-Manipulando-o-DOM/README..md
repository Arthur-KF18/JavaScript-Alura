## JavaScript para a Web

- Este repositório contém todo o projeto desenvolvido no curso da Alura "JavaScript: Manipulando o DOM"
- De efeito __adicional fora do curso__, foi implementado o framework __Vite__ como servidor para rodar o projeto
  - Para iniciar o projeto, dentro da pasta "JS-Manipulando-o-DOM", com auxilio do terminal, rodar apenas a linha de comando: ```npm run dev```
  - __Iniciará o servidor local do projeto__

#### Apresentação

- Curso que vai abordar todos os conhecimentos necessários para se entender como funciona a interação do JS com a página, além do HTML e CSS
- Além disto, será colocado como manipular o DOM
- Irá ser desenvolvido o projeto __Robotron 2000__
- Se trata de uma interface que será desenvolvida de forma que possamos alterar a força do robo, seus poderes e afins, simulando como um jogo de RPG e separando o poder do personagem
- Para montar o seu Robotron você precisa adicionar peças na engrenagem que compõe um robô e ver as estatísticas atualizadas dinamicamente, tudo isso com JavaScript

#### Manipular um elemento

- A principal aba utilizada, é o __console__, através dela interagimos com a página, realizamos chamadas de funções e ainda por cima executamos diferentes funções para nosso código
- A função ```document.getElementById('id do elemento')```, é responsável por pegar o elemento que queremos através do seu __identificador__. Quando a usamos no console, __ela retornará a tag HTML que queremos__
- ```document.getElementById('id do elemento').value```: através do value, podemos modificar:
  - Textos: utilizando ```""```
  - números: inserindo apenas o número
- Quando alteramos o texto, estaremos alterando o __valor do atributo ```value```__
- Nós buscamos um elemento pelo identificador e manipulamos esse elemento com o JavaScript.
- Vamos usar o JavaScript para interagir com a nossa página, nosso HTML. Adicionar e retirar informações, manipular dados, evento e comportamentos, tudo isso com o JavaScript.
- É dificíl se dizer que apenas utilizamos identificadores para nossos elementos, constantemente utilizamos __classes__
- A classe é mais importante pois ela é extremamente flexível com o CSS. Isso faz com que ela seja muito mais utilizada.
- ```document.getElementsByClassName('nome da classe')```:  ele irá retornar uma __coleção de elementos do HTML__
  - ```document.getElementsByClassName('estatistica')``` irá retornar um array ```HTMLCollection(n)```, sendo __n a quantidade de classes que possuem o nome estatistica__, além de principalmente, __enumerá-las de acordo com as linhas escritas no HTML e trazer o nome da tag que foi definida no HTML__
- O JavaScript navega na página e busca esse elemento, classe ou id para colocar o estilo, assim como o CSS
- Ele realiza essa ação através da função ```document.querySelector()```, lendo todo o documento e buscando apenas o seletor que queremos
  - Usando o querySelector chegamos em todos os elementos baseados na mesma estrutura da nossa navegação pelo css.
- ```document``` é onde o JS vai buscar estes elementos, é nosso arquivo HTML
- O DOM(Document Object Model) é uma interface de linguagem neutra que permite que o documento HTML seja atualizado dinâmicamente

#### Entendendo o DOM

- Sempre que o JavaScript vai agir com o navegador, ele __navega__ em uma coisa chamada DOM. DOM é a sigla de __Document Object Model__, que em português significa __modelo de objeto do documento. O nosso HTML é um documento e para lê-lo o navegador o transforme em um objeto. Um objeto manipulável, um objeto na estrutura do JavaScript.__
- No console, quando digitamos ```document```, ele retorna o HTML, sua árvore. o ```document``` é nosso HTML, porém com superpoderes. Todos estes superpoderes que ele possui são apresentados, e todos esses poderes que o JavaScript, ao ler a página, também passa a ter.
- quando utilizamos ```document.title``` ele nos retorna o título da página
- Nós não podemos utilizar ```document.producao```,pois ele __não é uma tag padrão, e sim, uma classe que foi criada__
- O body e o head são tags padrão da nossa página, elas sempre estarão presentes, ou seja, __esse métodos já existem no JavaScript e no DOM.__ Agora, quando queremos procurar uma classe ou um id que nós criamos, usamos os __métodos próprios de busca__ como o ```document.getElementById('producao')``` ou o ```querySelector('#producao')``` e o resultado é o mesmo.
- É JavaScript manipulando a páginas por meio dessa busca avançado dos elementos, dos eventos e de melhorias em nosso código, que ele realiza seus comportamentos

### Métodos e propriedades para alteração do HTML

- O DOM (Document Object Model) e o JavaScript, juntos, possuem grande poder de modificar dinamicamente a estrutura de um documento HTML. Sendo assim, temos __alguns__ das funções em JavaScript:

#### Métodos para selecionar elementos no HTML

- ```document.getElementByID(id)``` - Recupera um elemento pelo ID.
- ```document.getElementsByTagName(name)``` - Recupera um elemento pelo nome.
- ```document.getElementsByClassName(name)``` - Recupera um elemento pelo nome da classe.

#### Propriedades e métodos para alterar elementos no HTML

- ```element.innerHTML``` - Esta propriedade obtém ou altera qualquer elemento no HTML, inclusive tags
- ```element.innerText``` - Esta propriedade permite inserir textos no HTML
- ```element.value``` - Esta propriedade altera o valor de um elemento HTML
- ```element.setAttribute(atributo, valor)``` -  Este método altera o valor de um atributo de um elemento HTML

#### Adicionando e excluindo elementos

- ```document.write()``` - Escreve no fluxo de saída do HTML
- ```document.appendChild()``` - Adiciona um elemento HTML.
- ```document.removeChild()``` - Remove um elemento HTML.
- ```document.replaceChild()``` - Substitui um elemento HTML.
- ```document.createElement()``` - Cria um elemento HTML.

#### Eventos com JavaScript

- Entendendo agora o DOM, vamos interagir de fato com o a página utilizando o JavaScript
- Estamos utilizando o console do navegador, não de fato o JavaScript. Para nós colocarmos as funcionalidades que precisamos, podemos utilizar o JavaScript como um __arquivo.js__
- isso faz com que __toda e qualquer interação fique salva ao recarregarmos a página__
- O JavaScript trabalha com __eventos__
  - Toda vez que algo acontece, ele se manifesta
- Podemos testar isso através do código inline: ```<img class="robo" src="img/robotron.png" alt="Robotron" onclick = "alert('você clicou no robô')">```
- porém, o maior __problema do inline__ é sua inflexibilidade e termos que mexer no HTML para mudarmos os elementos do JS
- para isso, criaremos um arquivo main.js, pois ele é o principal, e este é o nome padrão dos arquivos .js
- criando o main.js, acessaremos ele através da tag ```<script src="./main.js"></script>```
- Quando fazemos isto, ele irá chamar o javaScript, executando-o
- O mais __importante__ é que todo script deve ser carregado __no final do arquivo, antes do fechamento da tag ```</body>```__
- realizamos isto, pois, se estiver no início, __o JS irá travar a página antes de carregar o HTML__
- Para podermos realizar a ação do clique, utilizaremos uma função chamada de ```add.EventListener()```. Ela é responsável por __esperar um evento que será especificado entre os parênteses__

  ```js
  document.querySelector('.robo').addEventListener("click", console.log("Robô foi clicado!")) 
  ```

  - Quando definimos que a classe do robo será a atingida pela ação do clique, e o que será realizado __após essa função__
  - Portanto, o ```add.EventListener(função a ser feita, resultado da função)``` funcionará desta forma
  - Porém, ao recarregarmos a página, esta função já foi executada
- No JavaScript, quando queremos carregar, quando queremos que alguma coisa execute um pedaço de código, __precisamos extrair isso para uma função__
- No JavaScript, __a função serve para armazenarmos um pedaço de código__
- Criaremos a seguinte função:

```js
      function clicado() {
        console.log("Robô foi clicado!");
      }
```

- Esta função é capaz de dizer que quando o robo for clicado, no console irá exibir esta função. Isto faz com que o ```addEventListener("click", clicado)``` funcione __corretamente__
- Podemos criar uma constante que será responsável por armazenar o valor do ```document.querySelector('.robo')``` chamada ```robotron```. Assim, utilizaremos ela com o ```addEventListener("click", clicado)```, ficando mais organiado e correto nosso código
- Criamos um arquivo JavaScript para podermos criar códigos JavaScript. Entendemos como funciona o click do elemento por meio de um escutador de eventos e separamos código JavaScript quando armazenado para ser usado muitas vezes.
- Vemos que nesse caso ele precisa estar dentro de uma função e que os elementos buscados pelo JavaScript podem ficar dentro de uma variável.

#### Funções com JavaScript

- O JavaScript e toda a linguagem de programação tem a opção de armazenar dados. Podemos explicar a função como uma forma de armazenarmos códigos que serão repetidos várias vezes. __A função é usada para que esse código seja chamado mais de um vez.__
- utilizando a função que criamos, podemos chama-la com ```clicado();```
- Para isso, nós chamamos esse função colocando o nome dela e abrindo e fechando parênteses, assim a função será executada no momento exato em que ela for lida.
- Uma função nos ajuda a repetir __blocos de código__, ela é uma __função nomeada__. É o que é chamada de uma __declaração de uma função__
- No javascript podemos criar uma função anônima também, ou seja, uma __uma função anônima__
- podemos executá-la da seguinte forma:

  ```js
      robotron.addEventListener("click", function(){
        console.log("cliquei no robô");
      })
  ```

  - Quando recarregamos a página, a função ```clicado();```, será realizada e depois disto, apenas a função anônima será realizada e repetida ao realizarmos o evento de clique
- Qual a principal diferentça entre a função anônima e a função declarada?
  - __A declarada podemos chama-la mais vezes, enquanto a anônima não pode ser executada em outro momento, ela só irá ser executada quando o click ser realizado__
- A partir da ES6, há uma outra maneira de declarar as funções anônimas
podemos realizar da seguinte maneira:

```js
    robotron.addEventListener("click", () => {
        console.log("cliquei no robô");
      })
```

- Criamos uma ```Arrow Function```, que declara uma função que não possuirá nome
- Um dos principais fatores mais importantes sobre as funções é __podermos manipular os dados__, de forma a enviarmos a mensagem para qualquer elemento.
- Para que isto ocorra, na nossa função adicionaremos um __parâmetro__. Ele vem dentro __dos parênteses da criação de uma função__
- Usando o exemplo abaixo:

```js
    function dizOi(nome) {
      console.log(nome);
    }

    dizOi("Arthur");
```

- Esta função receberá um nome e irá imprimi-lo no console. Quando a chamamos inserindo o texto, ela sempre irá imprimir o nome selecionado
- nós passamos um texto para uma função, ela recebeu esse texto e fez algo com ele. Se quisemos somar algo, por exemplo "Oi + nome", seria possível.
- ```console.log("oi" + nome);```, sendo assim, adicionaremos __qualquer nome que for colocado dentro da função dizOi("nome")__. Nós passamos um parâmetro para esta função, e ela executou.
- Entendemos aqui como passar um texto como parâmetro, mas já existem parâmetros que são padrão da nossa página. Por exemplo, toda vez que um evento acontece, podemos manipular esse evento.
- E em uma arrow function, __colocamos entre os parênteses o que usaremos, que é o evento. E colocamos no corpo da função do console.log o evento.__

```js
    robotron.addEventListener("click", (clicado) => {
      console.log(clicado);
    }); 
```
- através dessa função, toda vez que recarregamos nossa página, ele nos trará todos os eventos que ocorreram
  -```PointerEvent {isTrusted: true, pointerId: 0, width: 1, height: 1, pressure: 0, …}```
- Graças a isto, podemos criar uma função onde podemos somar diferentes atributos que possam ser adicionados ao robô que estamos montando