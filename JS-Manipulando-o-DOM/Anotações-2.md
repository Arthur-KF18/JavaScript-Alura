## JavaScript para a Web

- Este repositório contém todo o projeto desenvolvido no curso da Alura "JavaScript: Manipulando o DOM"
- De efeito __adicional fora do curso__, foi implementado o framework __Vite__ como servidor para rodar o projeto
  - Para iniciar o projeto, dentro da pasta "JS-Manipulando-o-DOM", com auxilio do terminal, rodar apenas a linha de comando: ```npm run dev```
  - __Iniciará o servidor local do projeto__
- Os desafios de aula foram realizados foi utilizado __o pré-processador SASS__ para estilização das páginas 


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

#### Alterando um item na página

- Sabendo de tudo que vimos até o momento, podemos agora criar o montador de peças para nosso robotron, porém, utilizando as __funções, elementos e eventos__

- Podemos adicionar ou subtrair os pontos existentes no nosso robotron, para isso iremos criar diferentes funções

- Indo no HTML, na nossa classe ```montador```, vamos atribuir um id no contador para cada uma das peças, no contador.

```html
  <div class="controle">
      <buttom class="controle-ajuste" id="subtrair">-</buttom>
          <input type="text" class="controle-contador" value="00" id="braco">
      <buttom class="controle-ajuste" id="somar">+</buttom>
  </div>
``` 

- Na nossa classe ```controle```, teremos contadores responsáveis por subtrair, somar e atribuir o valor da somatória a um __identificador__, podendo ele ser cada das partes do robô

- O que queremos que aconteça no JS é que se clicarmos na subtração ou soma, ele adicione ou retire o valor, este sendo mostrado em tempo real\

```js
    somar.addEventListener("click", () => {
        braco.value += 1
    })
```

- Através dessa função, será esperado que, toda vez que clicarmos no botão de soma, seja adicionado mais um ao valor do braço.
- Porém, ela está apenas __adicionando o número 1 lado a lado, e não realizando a soma__
- Estamos somando o 1 como um __incremento__
- Um grande problema na manipulação de dados de um formulário, é que o valor que vem para nós, __vem como ```string```__, ou seja, __um texto__
- Toda vez que no JS temos uma soma de um número com string, __ele vai pegar a string por ser um tipo mais forte e vai transformar tudo em string__. O resultado é a string modificada adicionada ao número__
  - Queremos que o 1 seja adicionado dinâmicamente, como uma soma ou subtração
  - Para isso, transformaremos o valor do ```braco.value``` em __número__
  - Para isto temos uma função chamada de ```parseInt(atributo)```, onde ela realizará a soma, pois ela troca a string para __numeral__
- A função será então:

```js
   braco.value = parseInt(braco.value) + 1;
```

- E para diminuir:

```js
    subtrair.addEventListener("click", () => {
      braco.value = parseInt(braco.value) - 1;
    })
```

- Em resumo: A função atribuida a somar e subtrair, está pegando o evento de clique e dizendo que ele ocorrerá quando for chamado. Quando ele ocorrer, o ```braco``` que é o id do nosso __input__ irá atribuir um valor ao atributo ```value``` contido na tag HTML. Sendo assim, realizando a soma de acordo com o valor.

- Sendo assim, somos capazes de adicionar ou subtrair valores a diferentes peças do robô.

#### Reaproveitando Código

- Temos de repetir estas funções para cada um dos elementos. Como fazemos isto evitando a repetição de código?
- Vemos da repetição de código entre ambas as funções, e o que podemos fazer é terceiriza-las, de forma que validaremos o que foi pedido em outro lugar, não no mesmo elemento
- Criaremos uma função chamada ```manipulaDados```, que será a operação. Se ela for subtrair, iremos tirar um número, e se ela for de somar, iremos adicionar os números.
- Para isso, podemos utilizar uma função chamada de ```if```. O __se__, quer dizer __se nós termos uma soma, utilize esta função, caso não seja ela, realize a outra operação__
- o ```else``` é o __se não__ que será utilizado para a outra operação
- Ficará desta forma:

```js 
    function manipulaDados(operacao) {
      if (operacao === "subtrair") {
        braco.value = parseInt(braco.value) - 1;
      } else {
        braco.value = parseInt(braco.value) + 1;
      }
    }
```

- Agora trouxemos toda a lógica de manipulação dos dados para um único lugar e só precisamos mandar o dados para aquele lugar que toda a operação será realizada. 
- Assim, separamos as responsabilidades. A única responsabilidade do evento do click é a avisar para o maniúlaDados() que aconteceu um clique. E a função o manipulaDados() é interagir e realmente mudar o valor.
- A função do ```manipulaDados``` será apenas de __alterar o valor__

```js
  somar.addEventListener("click", () => {manipulaDados("somar")});
  subtrair.addEventListener("click", () => {manipulaDados("subtrair")});
```

- Ou seja, na nossa função, quando realizamos o clique do valor positivo, ela terá sido declarada como ```manipulaDados("somar")```, que é __diferente da esperada dentro do ```if```__, ocorrendo então a __soma__
- Sendo assim, adicionaremos uma constante capaz de selecionar o a tag onde a classe ```.controle-ajuste``` está.
- ```const controle = document.querySelector(".controle-ajuste")```, porém ele apenas buscou um elemento, e nós queremos que ele busque todos. Para que ele selecione todos do documento temos que utilizar a função ```querySelectorAll(tag)```
  - ```const controle = document.querySelectorAll(".controle-ajuste")```, sendo assim __todos os elementos que tiverem essa classe serão buscados__, e no console haverá a NodeList, ou seja, um  ```Array``` com todos estes elementos. 
  - Sendo assim, todos os elementos da função controle serão __manipulados__

#### Alterando vários componentes

- Temos uma função que manipula os dados a partir de um parâmetro e temos uma variável com todos os nossos controles. O que precisamos agora é adicionar em cada controle um escutador de eventos.
- Podemos manipular arrays utilizando loops como o ```for```, ```while```. Porém, nós temos uma __operação própria para os arrays chamada de ```forEach(parâmetros)```__.
  - Esta função é simples. Não precisamos inventar muito para executa-la.
  - Toda vez que executamos um `forEach` , temos __um elemento e um índice__
  - o elemento é o que __foi clicado__, e o índice é o __índice do array (0, 1, 2, 3...)__
  - Dentro dessa operação, vamos criar uma função de __seta__ que vai executar algum código. Nesse momento queremos descobrir __qual elemento foi clicado__, então em `forEach()` temos a opção de pegar um elemento, que é a __primeira coisa que irá nos retornar__
  - Quando chamamos a função no console, ela nos trará __todos os elementos que queríamos e a classe correspondente__
  - A nosso função fiucará desta forma:

  ```js
  controle.forEach(element => {});
  ```

- Assim, nós precisaremos definir um escutador de eventos como o `addEventListner()`, recebendo o __click e realizando alguma função__

```js
    controle.forEach((elemento) => {
      elemento.addEventListener("click", () => {
        console.log(evento)
      });
    })
```

- Nossa função ficará desta forma, porém nós estamos apenas identificando que o botão está funcionando, precisamos saber __qual evento ocorreu__

```js
    controle.forEach( (elemento) => { 
      elemento.addEventListener('click', (evento) => {  
          console.log(evento)
      })
    })
```

- Através desta função anônima, quando clicarmos em qualquer um dos botões de soma, o console nos trará exatamente o que esta ocorrendo no evento, que é identificado como __`pointerEvent`__
- Porém, ao analizarmos corretamente, veremos que existe um parâmetro chamado de `target`
  - `target:buttom#somar.controle-ajuste`
  - Ele nos informa onde __o clique aconteceu__
  - O `target` está nos trazendo a __tag e a operação realizadas__
- Agora quando clicamos ele traz o botão e quando somo, ele subtrai. A blindagem, o núcleo, as pernas e os foguetes ainda não estão fazendo isso pelo simples motivo que a função `manipulaDados` ainda não está entendendo isso tudo.
- Precisamos passar o somar de o botão for "+" e subtrair se o botão for "-". Temos o evento.target e se olharmos no HTML, o conteúdo desse buttom é um - e o conteúdo do outro é +.
- Não precisamos ficar entendendo se é somar ou subtrair, podemos simplesmente pegar aquele conteúdo.
- E aquele conteúdo é o `.textContent`. __Toda vez que é um `input` é um `value`, e toda vez que é um texto, é um `textContent`.__
  - Ficando assim: `console.log(evento.target.textContent);`
  - E assim, ele retornará o "-" ou o "+" ao clicarmos nos botões
  - Porém, precisamos ainda identificar para a função `manipulaDados` funcionar corretamente
- Ela estera um texto chamado "subtrair", e como podemos mudar isto?
  - Refatoramos nosso código de forma que, ela leia um "-" ou "+", que __identificam os operadores__
  - retiramos as funções do somar e apenas utilizamos o código da seguinte forma:
  ```js
      controle.forEach( (elemento) => { 
        elemento.addEventListener('click', (evento) => {  
          manipulandoDados(evento.target.textContent) 
      })
    })
  ```
  - Porém, há um pequeno problema. Quando nós clicamos, o `manipulaDados` executa o que pedimos, porém, ele realiza a ação apenas para o `braco.value`, seja em qualquer __botão que clicamos__
  - isto acontece por que definimos somente o braço. precisamos definir que o dado __também seja dinâmico, a partir do elemento que clicarmos__

#### Alterando o elemento

- Já temos nosso componente funcionando de forma dinâmica, podendo adicionar itens ao robotron 2000, porém, ainda temos aquele detalhe causado pelo `braco.value`
- Nós realizamos a operação de clique, porém, nós apenas __buscamos o elemento com o identificador do braço__, mas isto __não está sendo refletido no código que queremos__
- No nosso HTML, o botão e o input são __irmãos, mas não sabemos qual vem primeiro ou depois__, porém sabemos que eles são filhos do `controle`, na árvore do HTML
- Isto é bom sinal, já que podemos interagir com o DOM de forma tranquila, como foi feito até agora
- Dentro de uma operação, evento, nós conseguimos __mapear o que ocorreu dentro dele__. Nós podemos ver quem está dentro do elemento, assim como também __podemos enxergar o pai do elemento clicado__
- Assim, quando temos uma interação com o pai, __poderemos ter com o filho também__
- Através do código: `console.log(evento.target.parentNode)`, podemos ver no console, __o pai daquele elemento__
  - Como fomos na `<div class="controle">`, podemos alterar a peça
- na nossa função `manipulaDados`, iremos mudar a variável `braco` para __`peca`__.
  - Nossa peça, será trocada toda vez que a __função ser realizada__
  - no nosso `const peca = document.querySelector(".controle-contador");`, não queremos buscar isso no __documento inteiro, senão vamos encontrar cinco controle-contador__, queremos buscar o `controle-contador` só do __controle, do elemento que foi clicado__.
  - para isso, passaremos nossa função como __parâmetro__ para nossa função `manipulaDados`
  - É com a `,` que __separamos mais parâmetros__. E agora estaremos enviando dois blocos de informação para a nossa função `manipulaDados`.
  - o primeiro sendo `evento.target.textContent` e a outra `evento.target.parentNode`
  - Agora passaremos dois blocos de informação `para manipulaDados()`, um é o `operacao` e o segundo vamos chamar de `controle`, que é o __pai do elemento clicado.__
  - Depois na nossa função inserimos `const peca = controle.querySelector(".controle-contador");`
  - Ou seja, o pai `controle` será lido, ou seja, __toda vez que clicarmos no controle, irá ser buscado quem é o `".controle-contador"` e vou adicionar ou subtrair um item
  
#### Código a prova de falhas

- Se por uma decisão, fosse alterado o nome da classe ou dos nossos atributos de operação, que são "-" e "+", como faríamos para que a lógica não fosse quebrada?
- Toda vez que estamos mexendo com os elementos do HTML, podemos utilizar uma lógica mais eficiente, __que não dependa exclusivamente das classes do CSS para funcionar__
- Podemos utilizar então os __`Data Attributes`__ ou __atributos de dados__
- No HTML, na tag `<button class="controle-ajuste">` iremos inserir o `data-controle`:
  - `<button class="controle-ajuste" data-controle="-" >`. 
  - Nós criamos uma __propriedade do tipo `data` e com o nome controle__ e um valor dentro das "".
  - adicionamos esse atributo a __todos as tags que possuem a classe `.controle-ajuste`__
- Com isto, no nosso JS, ao invés de buscarmos a classe, buscaremos nosso `data-atributes`
  - buscaremos utilizando os __colchetes__, desta forma: `"[data-controle]"`
  - Desta forma, desacoplamos o JS do CSS, ficando mais correto nosso código, evitando erros.
  - Como estamos usando os `data-atributes`, __não é necessário buscar o texto do nosso elemento__, utilizaremos a busca `evento.target.dataset.controle`, sendo assim, apenas o data que ter seu atributo controle.
  - passaremos para a `operacao` o __valor do controle__
- Desta forma, estruturamos nosso código melhor
- a constante `peca` ainda está buscando pela classe, então devemos alterar isto para um outro dataset, que podemos chamar de `data-contador`
  - __Não é necessário atribuir um valor ao dataset, já que ele é modificado via JS__
- Temos agora nosso contador de peças, nosso montador do Robotron extremamente dinâmico. 
- Entretanto, não estamos fazendo o __cálculo para saber se esse é um bom robô para a batalha, nós queremos atualizar força, energia, poder e velocidade__. 
  - Para fazer isso é preciso manipular os dados da nossa calculadora.

#### Interagindo com Objetos
- Já temos nosso componente da engrenagem completamente funcional, atualizamos ele para utilizar um dataset, não dependente de uma classe ou conteúdo facilmente alterável
- Nós queremos que quando adicionarmos poder aos componentes do robô, o valor atribuído a estes dados, `força, poder, energia e velocidade`, possam ser calculados e proporcionais a nossa decisão
- adicionaremos então uma variável chamada `pecas`, que contém 5 itens: __bracos, blindagem, nucleos, pernas, foguetes__, e dentro deles hã uma declaração com outro objeto, com mais 4 valores
- Quando vamos no console e requisitamos esta constante, teremos um objeto com 5 itens e seus respectivos valores.
- A estrutura do objeto __possui uma chave `{}` valor__, ela nos __permite navegar em um objeto utilizando as referências, as chaves__.
  - Com `pecas.bracos` conseguimos entrar dentro do item e ter todo o valor, que são mais quatro itens.
  - Podemos navegar mais um nível naquela estrutura criada, acessando o valor númerico da estrutura criada
  - podemos também ter a declaração da seguinte forma: `pecas["bracos"]`, buscando o conteúdo, e através disto, encontrar o valor que queremos
- Estamos buscando os dados de uma forma dinâmica
- No HTML, iremos adicionar o data attribute `data-estatistica` e dentro dele iremos inserir __o nome dos itens presentes na variável__
- Após adicionarmos este atributo ao poder do robô, iremos adicionar o data attribute nas __peças, já que elas tem dados que não estão indo à algum lugar__. Precisamos adicionar essas informações no que estamos mexendo
- Precisamos agora, implementar no nosso código uma nova função chamando estes itens, que atualizará as estatíticas

#### Cálculos dinâmicos

- Com todo terreno preparado para quando clicarmos em um elemento ele possa __alterar as estatísticas__, precisamos agora só configurar nossa lógica
- É muito importante ter um passo, rever o código, analizar ele corretamente, somos donos do próprio código e devemos entende-lo, aprender com ele e como podemos crescer com isto
- Atualizaremos as estatisticas com os dados das peças __a cada clique__
- No evento do clique criaremos uma função que, ao ser chamada, saberemos qual peça terá sido clicada, e com ela vamos manipular os dados.
- adicionaremos o parâmetro `peca` e nossa função tomará forma assim:

  ```js
      function atualizaEstatisticas(peca) {  
      }
  ```

  - Dentro desta função, iremos colocar qual foi a peça clicada através da função `atualizaEstatisticas` presente no `controle.forEach`.
    - `atualizaEstatisticas(evento.target.dataset.peca)`: será nossa função que irá __localizar e dizer qual peça que foi clicada__
  - A nossa lógica precisa ser buscar no objeto `pecas` o item que queremos
  - para navegarmos no objeto __utilizaremos os colchetes `[]`__
    - `pecas[peca]`: para vermos os itens presentes dentro da peça, ou seja, os __dados do ponto específico do nosso objeto__
  - Nós queremos que esta estatistica seja atualizada, e já buscamos eles através da constante `estatisticas`
  - Como temos um array de elementos, para atualizar cada uma delas é preciso percorrer todas. Assim como fizemos para percorrer todo o array de controle, __vamos fazer o mesmo processo com o `forEach()` em cima de `estatisticas`.__
  - Nossa intenção é atualizar cada uma das estatísticas, então o elemento em que estamos deve ser atualizado, ou seja, o seu texto deve ser atualizado com um novo valor.
  - Criamos a função então:

  ```js
    estatisticas.forEach((elemento) => {
        console.log(elemento)
    })
  
  ```
  - Criamos um `forEach()` , e nós queremos atualizar __cada uma das estatíticas__, ou seja, o elemento que estamos, queremos que seja __atualizado__, ou seja, seu __texto, com um novo valor__
  - O console.log mostrará para nós quando clicamos nos "braços", como os itens presentes no array estarão sendo distribuídos
  - A cada vez que clicarmos em um item, vamos percorrer __todos os itens da estatística, imprimindo-o__
  - Estamos percorrendo e capturando o valor da `estatistica`, sendo assim, vamos atualizá-lo com um __conteúdo da peca__
  - Nós precisamos descer no nível do __dataset da estatística__ para podermos selecionar os itens do array
  - `console.log(elemento.dataset.estatistica)`: Buscamos o número e o nome do dataset que procuramos
  - Sendo assim :

  ```js
  estatisticas.forEach((elemento) => {
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    
  })
  ```
  - Queremos que ao clicar em cada um destes elemento, queremos atualizar o `textContent`, e que vai receber __o valor atual dele, atualizando-o__
  - Vimos que o valor atual dele vem em forma de texto, então trocaremos para número com `parseInt` no mesmo `text.content`. E por fim, vamos __somar a isso o elemento do valor da posição do objeto que queremos__
  - `[array][posição][item]`: é assim a nossa sequência para definirmos a posição
  - __A cada vez que somamos, ele atualiza os valor de força, poder, energia e velocidade. Para qualquer um das peças que escolheremos, as estatísticas são atualizadas imediatamente.__
