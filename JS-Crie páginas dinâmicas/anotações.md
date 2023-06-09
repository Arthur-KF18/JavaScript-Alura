## Anotações do Curso

- Ao abrirmos o arquivo, percebemos que ao clicar nos botões eles não produzem nenhum som.
  - Como fazemos para o HTML reproduzir um som?

  - As tags ```<audio>``` são responsáveis por carregar e fornecer ao navegador os sons dos instrumentos que queremos reproduzir
  - ```<audio controls src="sounds/keyc.wav" id="som_tecla_tom"></audio>```
  - Um atributo importante nela, é o controls, responsável por exibir a tag
  - Quando está sem o JS, elas aparecem no navegador, justamente por adicionar o atributo controls, e ela vem com controles nativos
  - Há uma diferença da aparência dependendo do navegador.
  - É muito difícil customizar essa tag no CSS

  - O que podemos fazer é passar o controle da reprodução do som, na tag audio
    para a tag button. Ai utilizamos uma linguagem de programaçao que trabalhe
    com HTML e CSS, o JavaScript

  - Para podermos fazer algo nos botões, precisamos colocar um atributo HTML
    que será capaz dessa comunicação: ```onclick="códigoJS"```
  - JS adiciona dinamismo na página
  - Dentro do onclick, usamos a função ```alert('texto do aviso')```, que ao clicarmos
      no botão, ele nos trará o alert retornando a mensagem escrita
    - __Em todo tipo de navegador será retornado a caixinha de mensagem__
    - ```<button onclick="alert('POM')" class="tecla tecla_pom">Pom</button>```

  - Escrevendo o JS no HTML é próximo ao CSS Inline, ou seja, não é eficiente, ficaria
    muito confuso e dificíl de reproduzir algo para as outras tags, tendo erros.

  - Cada Linguagem possui sua responsabilidade, assim com JS, Inline tem maior objetivo de teste

  - O HTML tem o objeto de construir a estrutura semântica da página, o CSS, os estilos da
    página, e o JS responsável por adicionar o dinamismo e atualização da lógica na página, que
    não é forncecida pelo HTML

  - Para isso, para construirmos o JS de forma consistente e correta, iremos criar um arquivo
    externo ```main.js```

  - Para ligarmos o arquivo main.js ao HTML usamos a tag: ```<script src="main.js"></script>```

#### Buscando um elemento HTML no JS

- Dentro do navegador, vamos no inspecionar elemento e de lá veremos as diferentes alterações presentes. Através do console, veremos o que o JS está fazendo
- Assim como o CSS que possui suas classes, o JS precisa de que o elemento HTML possua um identificador.
- o nome do seletor pode ser uma __tag, classe, id, qualquer seletor__.
- Quando digitamos ```nome_do_identificador``` no console, ele retorna o __nome__, mas se digitarmos __errado, ele nos retorna um erro__
- a função capaz de retornar o elemento, seletor ou id, é ```querySelector('nomedatag');```, ela é capaz de __buscar o elemento__..
  - Tag: ```querySelector('button')```
  - Classe: ```querySelector('.classe')```
  - ID: ```querySelector('#id')```
- Diferentemente do alert, que pode ser usado a vontade pois é uma funcionalidade completa do JS, o querySelector precisa estar definido para poder funcionar:
  - Funcionalidade que precisa de um escopo. É preciso dizer ao JavaScript, __aonde quero que seja buscado o elemento com o seletor__
  - Deve-se sempre se executar o querySelector __dentro de outro local que precisamos informar, sendo uma tag ou dentro do documento HTML__
  - ```document.``` representa todo o arquivo HTML. O __ponto__ acessa todo o documento, acessando-a em atributos, funcionalidades e afins.
  - quando usamos ```document.querySelector('.tecla_pom');``` no __console__, ele nos trará do HTML __as classes correspondentes__ ```button.tecla.tecla_pom```, sendo assim o que ele __retornará__.
  - Este código quando damos enter, ele trará a representação ou referência daquele botão: ```<button class="tecla tecla_pom">Pom</button>```
  - quando digitamos um seletor inexistente teremos o retorno ```null```
  - se digitarmos ```queryselector``` teremos um __erro de sintaxe__

- O JavaScript é __sensível a letras maiúsculas e minúsculas__, sendo assim precisamos sempre digitar de forma correta a __sintaxe das funções__
- Sempre é muito bom usar o __autocomplete__

#### Play no JavaScript

- Tudo é feito pelo __console primeiramente__
- Lembrando-se que a tag ```<audio>``` tem seu atributo ```controls```, o que permite que possamos ver o player do aúdio, e ele contém __todos os instrumentos necessários para a reprodução de uma mídia__
- Via JS também teremos acesso a esses controles para a reprodução do som
- usamos a função: ```document.querySelector('#som_tecla_pom')```. Ela nos trará exatamente a tag audio que queremos, ele representa a tag ```<audio>```
- quando utilizamos o __ponto__ no final da função, estaremos __entrando nele, acessando todas suas funcionalidades do elemento__
- Se a funcionalidade for função usamos ```.play()``` para que ela __funcione corretamente__, reproduzindo a tag audio com JS
- ```document.querySelector('classe, id ou tag').funcionalidade()``` é a __fórmula para funcionar os códigos JavaScript__
  - Aparece um erro ao executarmos o código JS na main ```Uncaught TypeError: Cannot read properties of null (reading 'play')```, __retornando um valor nulo__
  - Este erro é normal, para resolvê-lo, temos que entender que __o local do arquivo main.js__. Devemos colocar nosso link do ```<script>``` __ao final do arquivo .html, já que o documento é lido linha por linha!__
- __Se nosso arquivo main.js depende da estrutura do HTML, deve-se coloca-la ao final do ```<body>```, antes do seu fechamento__
- __Se nosso arquivo main.js não depende da estrutura do HTML, deve-se coloca-la dentro da tag ```<head>```, antes de seu fechamento__
- o javascript vai sendo __lido e executado imediatamente pelo navegador__
- Os navegadores __por padrão__ impedem que o código JS que já executa mídias e sons __antes dos usuários antes do usuário interagir com a página__, por isto temos o erro;
  - ```DOMException: play() failed because the user didn't interact with the document first```
- É um problema com a permissão e controle dos usuários
- E quando eu preciso de um código que é chamado somente quando eu preciso, precisamos criar uma função.
- Nós queremos que __ao clicar no botão, o som seja emitido__ e esse processo pode ser resolvido da seguinte maneira:
  - Até agora usamos __funções próprias do JavaScript__
  - usamos a declaração de função ```function nome (parâmetros){}```
  - Tudo que colocarmos dentro das chaves vai ser o código que vai ser guardado dentro dessa função, para ser executado apenas quando a função for chamada por alguém
  -

        ```
        function tocaSomPom () {
                    document.querySelector('#som_tecla_pom').play()
            }
        ```
  - Quando executamos essa função no console, ela retorna ```ƒ```, o que indica a __existência da função__. usando ```tocaSomPom()``` no console, __nos retorna o audio__
  - O ```undefined``` que aparece não é necessssário se preocupar __no momento__

#### Clique no botão

- Sabendo como se obter uma tag do HTML no JavaScript e usar o audio, como unimos o botão que vai chamar a função que vai dar play e executar o som do nosso instrumento?
- Antes tinhámos utiilizado o parâmetro ```onclick```, porém , ao colocarmos ele inline, ```ònclick="tocaSomPom()"```, na página, __quando clicamos no botão, o som é acionado__
- Porém, a forma correta de se realzar essa ação, é escrevendo __externamente__
- Ao adicionarmos o __ponto__ em ```document.querySelector('#som_tecla_pom').play().```, __entramos dentro do elemento que está sendo buscada pelo querySelector e vai trazer todas as opções e funcionalidades que são possíveis dentro do elemento__
- ```document.querySelector('#som_tecla_pom').play().onclick()```, pelo __```onclick()```__ ser um __atributo__, para eu passar e definir um valor para ele, eu uso o sinal de atribuição, o mesmo do HTML, que é o sinal de igual =. Este sinal de =, vai poder atribuir __tudo que vem para o lado direito aquilo, nesta propriedade/atributo o que está do lado esquerdo do sinal. Portanto queremos que quando o onclick deste elemento da tecla pom seja executado, queremos que chame a função tocaSomPom();.__
  - Ela ficará dessa forma: ```document.querySelector('.tecla_pom').onclick = tocaSomPom();```
  - Quando atribuímos uma função para um elemento e utilizamos o (), __nós não estamos guardando essa função dentro do atributo ```onclick```__, isso é uma __peculiaridade do arquivo JavaScript.. Já estamos dizendo para o navegador passar nessa parte e executar essa função imediatamente__
  - __Para que guardemos uma função em um atributo onclick, precisamos retirar o parentêses, e ai sim, ele irá guardar dentro do onclick a referência__

#### Lista de Elementos

- Quando haviamos criado a função ```tocaSomPom()```, ela foi responsável por apenas __um dos botões de som__. No mainjs, se adicionarmos uma função para cada botão, __as teclas serão reproduzidas__, porém o main.js ficará extenso e isto não é uma __boa prática__
  - Se aumentarmos a quantidade de teclas, __ficará cada vez mais difícil de ler e entender o código, sendo quase impossível entender o que acontece e o que cada botão fará__
  - Não compensa ter a repetição de código, até porque se precisarmos mudar a funcionalidade das nossas funções, será difícil
- Para solucionarmos isto, podemos aprender uma nova funcionalidade do JavaScript, __que é automatizar as nossas funcionalidades e principalmente trabalhar com muitos elementos de uma vez só, precisamos aprender a trabalhar com listas de elementos.__
- Para que isto ocorra, precisamos saber como selecionar todos os botões de uma única vez, adicionando o aúdio e a função que toca o som
- No console digitaremos:
  - ```document.querySelectorAll()``` ele é uma funcionalidade do JS, que busca todos os elementos com o seletor que definirmos nos parênteses.
  - ```document.querySelectorAll('.tecla')```: Quando digitado no console, ele retornará um ```NodeList(9)```, sendo de 0 a 8 elementos, dando 9 no total, assim indicando que todos os botões foram encontrados pelo JavaScript seguindo o seletor que especificamos.
  - A principal característica presente nas listas são os __colchetes ou ```[]```__

#### Referências

- Antes de continuarmos utilizando nosso script, precisamos entender como __as listas funcionam no JavaScript__. Antes de tudo, precisamos deixar nosso código legível e muito fácil de entender
- Uma forma de realiar isto, é adicionar alguns nomes para que aumente a legibilidade do código
- Podemos fazer isso através de um recurso da linguagem chamado de __referências__
- __As referências no JavaScript devem ser criadas ou declaradas com base no valor que vão receber e terão que guardar__
  - Muito provavelmente o ideal seria que realmente a lista de teclas sempre armazenasse a mesma lista de teclas, portanto, terá seu valor constante. Porém, __se fosse um outro tipo de valor que fosse armazenado nessa referência, que pudesse ter seu valor modificado ao longo do script, essa outra referência poderia ser uma variável__, que não é o nosso caso.
  - E o ideal mesmo é usarmos sempre __referências constantes__, e caso necessitarmos de uma variável a utilizamos como variável
- Para se criar uma referência constante precisamos escrever da seguinte forma:
  - ```const listaDeTeclas```
  - ```const listaDeTeclas = document.querySelectorAll('.tecla');```: Através deste código, atribuímos a nossa direita o que armazenar dessa referência
  - Desta forma, a gente consegue ter uma lista de teclas guardadas em um nome que é fácil de entender e lembrar.
- A partir da listaDeTeclas é que vamos manipular nossa lista de teclas do navegador
  - No console ele autocompletará nossa referência constante e assim usaremos ela durante a construção mais automática dos elementos

#### Conhecendo listas

- Agora que já entendemos como deixar o código mais legível,  precisamos entender como eu acesso individualmente um elemento dessa lista.
- Quando usamos o __ponto__ para acessarmos essa referência, não encontramos o ```onclick```. A lógica não funciona desta maneira.
- __Não se coloca o evento de clicar na lista, mas sim em cada elemento dela__
- Portanto, apesar de eu ter conseguido concentrar todos os meus elementos em uma linha de código, eu ainda vou precisar acessá-los individualmente para conseguir em cada um deles atribuir um valor para o onclick, ou seja, uma função que vai reproduzir o determinado som daquela tecla.
- Como acessar um elemento dentro de uma lista? Para isto usamos a sintaxe de __colchetes []__, e dentro dele, vamos passar o __número com o indice que o elemento está dentro desta lista__
  - ```listaDeTeclas[0]``` resulta em ```<button class="tecla tecla_pom">```
  - Isto quer dizer que, a __NodeList__ nos passou o __número de cada item da lista, sempre começada em 0__, e quando colocamos o número no [], __acessamos o respectivo item da lista__. Ele vai pela __ordem de declaração do HTML__
  - Então se eu quiser voltar a ter o meu ```onclick``` no pom, eu preciso acessar este elemento pela lista, mas informando o número do seu índice para conseguir acessá-lo e então acessar o ```onclick```
  - __É muito comum que as listas dentro da programação comecem com índice zero e vão até um índice de um número total -1.__
- ```listaDeTeclas[0]```: quando adicionamos um __ponto__, eu vou voltar a acessar todas as propriedades funcionalidades de um elemento, porque agora a minha referência para este elemento é através da lista de teclas e eu não preciso mais usar o ```document.querySelector``` de um único seletor.
  - ```listaDeTeclas[0].onclick = tocaSomPom```:
  - ```console.log(referência)```: retorna no console a lista criada

#### Percorrendo uma lista

- Como podemos acessar todos os elementos de uma única vez através das listas?
- Agora precisamos saber como acessamos todos de uma vez, na verdade __cada item dessa lista de forma automatizada__, pois não vai ser viável __continuarmos repetindo esse trecho de atribuição a um clique de cada elemento, uma função de uma lista que não sabemos o tamanho.__
- Estamos trabalhando em um escopo pequeno, mas em um maior, poderia ser dificil
- Toda linguagem de programação possui uma __estrutura de repetição__ para casos onde temos muitas repetições.

- Usando o ```while```, "enquanto" determinada condição, __que vai ser informada aqui nos parênteses que escrevemos logo após a palavra while__, a declaração while, vamos criar uma condição que vai determinar onde essa repetição deve parar, porque senão __ela vai rodar para sempre__, vai causar um loop infinito e vai travar o nosso navegador e possivelmente até o computador. Portanto, precisamos ter uma condição que tenha fim

  -

    ```
      while(condição){
              rotina
        }
    ```

  - a rotina da repetição é o que será __executado, guardado e feito a cada loop dessa função__

- ```
      while(){
          listaDeTeclas[0].onclick = tocaSomPom;
        }
    ```

- Ao realizamos esta função, faltará a condição para que este loop aconteça
- Para que a condição seja atendida, o while espera receber uma condição __verdadeira ou falsa__, ou seja, algo que o JS vai verificar
- Precisamos ter um __true ou false__ e precisamos comparar as condições para passarmos no while.
- Temos o tamanho da nossa lista, que é de nove elementos e temos repetições. Então podemos contar essas repetições e enquanto essas repetições não atingirem o tamanho da nossa lista, elas vão tendo que ser incrementadas, ter o seu valor contado.
- podemos usar por exemplo o operador ```0 < 9```, para verificar se 0 é __menor__ que nove.
- Temos que ter do lado esquerdo do operador, algo que sempre conte as repetições e compare como número total da nossa lista. Precisaremos então criar um contador
  - Para isso precisamos criar uma __referência variável__, utilizando ```let```
  - assim, criamos o ```let contador = 0;```, que será nosso contador e o nossa condição dentro do __while__
  - __importante lembrar que quando nós colocarmos dentro do loop, o navegador vai bugar, justamente por nosso contador ser 0__

- Dentro do while, nós podemos mudar o valor do ```let``` pois ele é uma __variável__. Ele permite chamar ele novamente. Porém, se colocarmos ```contador = 1```, ele vai executar o loop e o contador vai ser ```1 < 9```, acontecendo o loop novamente
- Para evitarmos este problema, precisamos que : ```contador = valorAntigo + 1```, onde este valorAntigo será o __valor anterior do contador__, ou seja, pode ser __ele mesmo__:
  - ```contador = contador + 1;```, para que ele __realize a conta primeiro e depois aconteça o loop novamente__
- Quando voltamos ao navegador, ele realizará o contador, e irá parar assim que retornar ```false```.
  - Visualizamos isto através da função do console: ```console.log(contador);```
- Para que todas as teclas emitam som, usamos então:
  - ```listaDeTeclas[contador].onclick = tocaSomPom;```, ou seja, __podemos, no lugar de 0 escrever a referência contador, que vai guardar um número variável, um número que uma hora vai ter um valor e outra hora vai armazenar um outro valor, um outro número__
  - Quando acessamos o navegador, o __mesmo som estará em todas as teclas__, para resolvermos isto, precisamos alterar uma parte da função para poder resolver isto.
- Há uma condição específica para nosso while, pois, nós __sabemos__ quantos itens tem na lista. Porém, se tivéssemos mais itens, mais botões, precisariámos contar a quantidade. E para isto, existe um atributo responsável por identificar a quantidade, o ```length```
  - Ao invés de usar 9, usamos o atributo length: ```(contador < listaDeTeclas.lenght)```. O atributo pertence a nossa referência, por isto, podemos utiliza-lo, para o loop funcionar corretamente por toda a lista, já que o atributo guarda __a quantidade de itens na lista__
- __Então veja que estamos fazendo uma comparação entre duas referências que armazenam números nelas. Dessa forma conseguimos ter mais ideia e o nosso código consegue ter um pouco mais de legibilidade, apesar de ele ficar um pouco maior em termos de palavras, ao invés de comparar números, que nem sempre sabemos o significado dos números dentro do nosso código. Dessa forma fica mais dinâmico o nosso código.__

#### Funções com parâmetros

- Temos de criar uma função que tenha o nome mais genérico, justamente para abrangermos todos os botões do teclado.
- primeiro, substituímos o nome da função por ```tocaSom```. Quando analisamos a função, não podemos ter um ID fixo, ele armazenará audios, então informamos a tag audio específica.
- Precisamos informar qual vai ser a tag áudio específica e precisamos obter o ID dessa tag áudio em específico, que vai ter um som que vai ser reproduzido por essa função que toca um som de um dado ID, de uma determinada tag áudio.
- portanto, esse seletor não pode ser fixo, ele precisa ser variável, e também precisa ser informado a nossa função
- Quem chamar a função tocaSom, vai precisar do ID, para que a nossa função consiga tocar o som desse elemento audio, portanto vamos precisar de um __parâmetro__
- O parâmetro é algo que conseguimos passar para a nossa função, e que a execução, que o código dependa para funcionar corretamente. Muitas das vezes esse parâmetro é opcional
- Para nossa função funcionar corretamente, precisamos deste parâmetro.
- __Para declarar o parâmetro de uma função, basta irmos na assinatura da nossa função ```funcion tocaSom(){}```, e escrevermos dentro da nossa função: ```idElementoAudio```__  
- __quanto mais descritivo, mais informativo for o nome das nossas referências, sejam elas constantes, variáveis, funções, parâmetros, melhor e mais fácil de entender o nosso código fica, chamamos isso de nomes significativos. Então é importante criarmos nomes que tenham sentido.__
- Por ser um valor variável, podemos usar imediatamente dentro da função, que vai precisar dentro do ```querySelector```.
- Como é uma variável, ou seja, uma referência, __não podemos colocar isto entre aspas__, apenas digitamos o nosso valor variável
- Como isto ocorre no console:
  - Quando chamamos a função ```tocaSom()```, ela nos dará um erro, sendo ele este: ```Uncaught TypeError: Cannot read properties of null (reading 'play')```
  - Este erro quer dizer que ele não consegue ouvir o aúdio de algo que retorna ```null```, ou seja, nada. Isto ocorre porque a função é __genérica__ e não está chamando um ID que existe no HTML
  - quando digitamos então: ```tocaSom('#som_tecla_som')```, ele nos retornará ```undefined``` e o __aúdio será tocado__
  - A função já está correta e recebendo o som adequado
- Podemos definir parâmetro como: nomes que damos a valores que uma função pode receber em sua chamada, que podem ou não ter um valor padrão. Os parâmetros de uma função são como variáveis ficam disponíveis apenas no corpo da função.

#### Funções anônimas

- Quando verificamos tudo abordado até o momento, verficamos que para poder invocar o som, ele precisa estar presente nas funções do ```main.js```
- Para que isto ocorra, __nós precisamos que no while, quando a tecla ser clicada, o som seja emitido__, porém, a ```listaDeTeclas[contador].onclick = tocaSom;``` __não pode ter parênteses no tocaSom, pois ele é executado imediatamente__
- Sendo assim, o JavaScript possui uma funcionalidade chamada __funções anônimas__, e ela será usada no lugar da ```tocaSom```
- E essas funções sem nome __só podem ser utilizadas nesse contexto de quando elas são o valor de algum atributo ou estão sendo armazenadas dentro de alguma referência constante ou variável__
- assim, substituíndo por uma função, ficará: ```listaDeTeclas[contador].onclick = function () {}``` e dentro das chaves vamos conseguir chamar a função ```tocaSomPom();```, pois dentro da nossa atribuição estaremos criando um a função nova, portanto, quando criamos ela, não a invocaremos __automaticamente__.

#### Textos Dinâmicos

- Com a função criada, sendo ela anônima, como nós podemos deixar o id de forma dinâmica, lendo todos os botões?
- Quando nós vemos o código, nós apenas criamos uma função anonima que recebe os parâmetros dentro do while. Para assim então determinarmos o id selecionado pela referência ```idElementoAudio```, precisamos __acessar os botões, ou seja, seus id para podermos transformar nossa função dinâmica__
- Temos acesso a um elemento ```button``` e dentro desse elemento ```button```, através da sua classe, podemos acessar __qual é o instrumento em questão que está sendo clicado.__
- Então é a partir dessas classes que estão dentro dos elementos ```button``` que __vamos conseguir montar dinamicamente esse texto, pois texto é um tipo de dado que é dinâmico, podemos escrever e inventar do jeito que precisarmos__
- no console, digitaremos : ```listaDeTeclas[0].classList```, e o ```classlist``` nos retorna uma __lista de classes__
- No nosso caso, em uma lista de classes, temos o índice, o zero, o valor armazenado é a classe, a classe simplesmente é um texto, o "tecla", representando o texto de classe 0 e no índice 1 também temos a segunda classe, "tecla_pom", sendo o segundo texto, nos totalizando uma lista de 2 itens. Lembrando que os índices sempre começam com zero.
- Para podermos acessar esta classe, usamos ```listaDeTeclas[0].classList[1]```, retornando a classe ```tecla_pom```
- Para melhor entendimento, guardaremos essa função em uma __referência constante__

  -

  ```js
     const instrumento = listaDeTeclas[contador].classList[1];
     console.log(instrumento);
    ```

  - Criamos uma constante ```instrumento```, que guarda a função do contador e a lista de classes. Depois, imprimimos ela no console.
  - vemos no console que está dando o console tanto do nosso instrumento como também do valor do contador que mantivemos
  -

    ```js
    tecla_pom
    1
    tecla_clap
    2
    ...
    ```

  - Resultado no console

- Quando voltamos no nosso código, temos uma repetição de código no while, que é a ```listaDeTeclas[contador]```. Isso não é uma boa prática, e a forma de resolvermos isto é através de uma ```const``` chamada __tecla__
  - ```const tecla = listaDeTeclas[contador];```
- porém, para deixarmos dinâmico a função tocaSom, utilizaremos uma peculiaridade das __strings__ no JavaScript utilizando __crase__
  - ```const idAudio = `#som_${instrumento}`;```
  - O que ocorre é que nós damos a primeira parte do nosso id somado ao restante. Este restante, são os finais de __cada id de audio__. Então, utilizando a referência __instrumento__, o classList pode atuar, e ainda, utilizando o contador criado anteriormente.
  - tudo que é variável dentro da minha string eu preciso envolver entre chaves, porém iniciando ```$```
  - Esse ```${}``` faz uma __abertura para o código de JavaScript de dentro da string__, eu posso acessar variáveis, métodos fazer contas aqui dentro. E o nome desse recurso que utilizamos da linguagem JavaScript é __template string__
  -

#### Repetição otimizada com For

- Como podemos melhorar o nosso código mesmo depois de estar funcionando corretamente?
- Podemos melhorar ainda mais em relação a forma de percorrer cada elemento que estão dentro de uma lista.
- Utilizamos o ```while```, que depende de uma condição ser verdadeira ou falsa para determinar se a rotina ser aplicada
- E se nós quisermos aumentar o alura mid e oferecer aos usuários outros instrumentos?
- Dependemos de um fator externo, __o contador__ para desenvolver a rotina. Se nós criássemos novos teclados, teríamos de ter novos contadores, o que voltaria ao fator de __repetição de código__.
- O JavaScript oferece opções para resolver as coisas de maneira mais otimizada, evitando repetição de código, deixando tudo mais organizado e com uma boa estrutura de lógica, já oferece contido nele toda a __estrutura, tanto do contador como da parte da condição para nossa rotina de repetição em encerrar e também da parte da incrementação desse valor contador.__
- Então, a estrutura que usaremos no lugar do whie é o __```for```__. Ele significa __para__, no sentindo de __para esta condição__.

- O for é uma estrutura de laço de repetição ou de loop, que também vai fazer a mesma coisa, enquanto uma instrução, uma condição for verdade, ele vai repetir essa rotina, porém a vantagem em relação ao while é que __o contador pode ser declarado ainda dentro dos parênteses do for.__

  -

  ```js
   for (let contador = 0; contador < listaDeTeclas.length; contador++){}
   ```

   ,e a variável contador __não precisará estar fora do loop__
- Definimos então três características: __Declaração, Condição e Incrementação__, sendo assim:
  - ```for (Declaração; Condição; Incremetação) {};```
  - As 3 são __parâmetros do for__
  - A estrutura de repetição for é usada para percorrer uma lista de forma mais otimizada, __onde em sua declaração criamos a variável contadora da repetição, a condição de interrupção das repetições e a condição de incrementação da variável contadora.__
- __É sempre bom deixar também no fim do código uma nova linha e não encerrar o final do arquivo com um final de código é sempre bom deixar esse respiro, porque depois se o nosso código vier a sofrer algum tipo de transformação por ferramentas que juntam o código, que ofuscam o código__

#### Eventos do teclado

- Por padrão, a tag ```<button>``` já aceita o comando o teclado __tab__
- Quando usamos o tab, barra de espaço ou enter, os botões do Alura Midi vão trazer o som, mas podem ou não indicar qual tecla foi selecionada, já que o estilo quando pressionada não é ativada.
- No CSS foi determinada uma classe ativa que representa esta ação de clique do usuário chamada ```.tecla.ativa```.
  - Temos que inserir essa classe ativa pelo JS nos botões que forem clicados através do teclado.
- No console, quando nós procuramos a tag, como por exemplo ```listaDeTeclas[2]```, ele nos retornará a tag especificada. Porém, assim como podemos entrar na tag com o __ponto__, poderemos entrar na ```classList``` e adicionar uma __nova função__
- quando digitamos:

```js
  listaDeTeclas[2].classList.add('ativa')
```

- Temos uma função, e o ```add()``` é responsável por adicionar algo ao navegador, uma ação.
- quando fizemos esta ação, no navegador a tecla tim ficará vermelha pois esta ativa
- Temos que reproduzir esse código no momento que pressionamos uma tecla do teclado

- Utilizando a função:

```js
    tecla.onkeydown = function () {
        listaDeTeclas[2].classList.add('ativa');
    }
```

- Onde ```onkeydown``` representa quando a __tecla está pressionada__, utilizamos a função responsável por manter o estado ativo da tecla, ou seja, __adicionando o estado ativo através do ```.add()```__
- Porém, ao fazermos isto, estaremos fazendo a tecla mudar seu padrão, porém, sem tocar som algum.
- Este problema ocorre principalmente quando trabalhamos com inserção de classes no JS e precisamos prever
- O JS apenas __inseriu a classe, mas não a retirou depois__
- Temos que __informar ao javascript todas as informações que queremos__ para que ele nos traga o que idealizamos

#### Adicionando e removendo classes

- Como já estamos trabalhando com classes com o ```classList(classe)```, não é necessário usar o __ponto dentro do parênteses__
- no console vamos utilzar o seguinte comando:

```js
    listaDeTeclas[4].classList.remove('ativa');
```

- Através deste comando, iremos retirar o estilo aplicado na tecla que selecionamos
- Porém, nós precisamos definir uma função capaz de identificar quando nós tiramos a mão da tecla pressionada
- Criando a função:

```js
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
```
  - Quando essa função for chamada, ela vai identificar através do ```onkeyup``` que a tecla já foi pressionada, removendo o ativa que foi adicionado quando pressionamos o botão
  - Porém ainda teremos o problema do tab que quando navega entre as teclas do Alura Midi, ele ativa os seus estilos.
  - __Qualquer tecla do teclado vai realizar esse problema. Para isto, devemos selecionar apenas as teclas que queremos que funcionem__, assim deixamos nossa lógica mais __limitada__




#### Dentro do arquivo main.js

- O nome main vem de "principal", e sempre é usado main para o arquivo principal javascript, para facilitar quando precisa-se descobrir qual o principal arquivo js e toda lógica
- o ; no JavaScript é opcional, sendo extremamente recomendado para evitar diferentes erros no futuro
