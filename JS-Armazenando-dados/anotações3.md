#### Projeto Mochila para Viajar 🎒

- O curso terá o desenvolvimento de um website, onde será possível armazenar dados no navegador.
- A ideia deste projeto, __será uma mochila para guardar itens__
- Será desenvolvido com o framework __Vite

---

#### Capturando os dados da tela

- O objetivo do nosso website será de armazenar os dados quando eles forem inseridos no formulário. No momento nós apenas estamos enviando os arquivos para __nenhum lugar__
- Esse é o comportamento padrão do formulário, eu não o mandei direcionar para lugar nenhum, então ele volta para a própria página com o nome e com a quantidade. O que eu preciso é de um arquivo de JavaScript e de uma operação, de uma função interrompendo esse comportamento e tratando os dados.
- Para verificarmos se está funcionando o `submit`, iremos escrever no nosso `main.js` uma __leitura do nosso formulário__
  - `document.querySelector("#novoItem")`: Ele está capturando o `id` do nosso HTML
  - E no console nós iremos verificar o que está ocorrendo. Nele, vamos perceber que quando clicamos em `adicionar`, ele traz para nós __a tag e seu conteúdo contendo todos os dados do formulário__
- Após isto, iremos guaradar a leitura do formulário na constante `form` e dela, iremos adicionar um `addEventListener`, em uma __função anônima__
  - `form.addEventListener("submit", () => {})`: Será nossa função que irá esperar __o evento de clique no enviar para que o formulário guarde nossas informações__
  - Em um primeiro momento, não funcionará, pois __precisamos enviar os dados para algum lugar, que é a principal função do formulário__
  - Ele está enviando para a __própria página__ e precisamos __interromper esse comportamento__
  - Para isso, utilizaremos a função __`preventDefault`__, que é responsável por impedir que página recarregue no __nosso contexto__
- O evento que estamos associando, __é o parâmetro passado na nossa função do `form`__
  - Após isso, irá funcionar corretamente o código
- Para podermos pegar estes dados, verificamos o evento. Nele terá um `SubmitEvent`, que é o __evento de envio do formulário__

```js
SubmitEvent {isTrusted: true, submitter: input.cadastrar, type: 'submit', target: form#novoItem.adicionar, currentTarget: form#novoItem.adicionar, …}isTrusted: truebubbles: truecancelBubble: falsecancelable: truecomposed: falsecurrentTarget: nulldefaultPrevented: trueeventPhase: 0returnValue: falsesrcElement: form#novoItem.adicionarsubmitter: input.cadastrartarget: form#novoItem.adicionartimeStamp: 5277type: "submit"[[Prototype]]: SubmitEvent
```

- Este gigantesco código nos informa __quem está realizando o `input`, quem está sendo o alvo dele e qual é o alvo atual, ou seja, as tags e suas respectivas ações__
- Ela nos diz para onde devemos ir. Então, precisamos coletar __o `input nome` e o `input quantidade`.
- Quando verificamos, também temos uma possibilidade de utilizar __o array de itens__
- `console.log(evento.target[0].value);`: veremos no console, __o objeto que adicionamos e que ele está sendo recebido__
- Ao mudarmos o número do array, podemos __pegar nome, quantidade e cadastro__
- 

```js
0:input#nome
1:input#quantidade
2:input.cadastrar
```

- Apesar de sua praticidade, não é a melhor função a ser usada, pois estamos __utilzando uma posição física__
- Se nós adicionarmos um campo, pode quebrar a __lógica do nosso projeto__
- temos também os __`elements`__, onde iremos pegar as __tags, não um número__, estes são __objetos, o que facilita e muito na direção da lógica__.
- __A propriedade `elements` se encaixa apenas em formulários, sendo diferente da propriedade `element`.__
  - Utilizaremos estas duas funções:

  ```js
  evento.target.elements['nome'].value
  evento.target.elements['quantidade'].value
  ```

  - Ele nos traz exatamente os dados a partir do __nome do input__
  - Com essa estrutura, nós já somos capazes de receber esses dados, que a partir de agora eu quero que esses dados apareçam na minha lista.

#### Criando as validações

- Nós temos um código capturando os dados do formulário, toda vez que realizamos o evento de `submit`
- Iremos querer que ao clicarmos no `submit`, adicionar itens à mochila. Essa interação é __dinâmica__, então podemos retirar alguns itens da nossa list
- Precisaremos criar um __elemento através do JavaScript__
- É preciso que __todo nome de função, seja o mais direto possível, para sabermos o que ele faz__
- Precisamos de uma função que colete o __nome e a quantidade, armazene estes itens e que seja capaz de criar um novo item__
  
  ```js
    function criaElemento (nome, quantidade) {
    console.log(nome);
    console.log(quantidade);
    }  
  ```

  - Essa função, `criaElemento`, será capaz de armazenar os dados do `nome` e `quantidade`. E na nossa função do formulário, iremos __acionar esta função, buscando estes elementos__

    ```js
    form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value);
    })
    ```

  - Assim ficará nossa função responsável por obter tais dados e armazená-los
- Para nós adicionarmos um elemento através da __API do documents__, utilizaremos a propriedade `createElement`. e nela, iremos inserir o valor `'li'`, já que é __um item de lista no HTML__
  - `document.createElement('li')`
- Porém, dentro desse elemento, existe uma classe chamada `item`. Para então podermos fazer esta lógica no formulário, iremos criar uma constante __que armazena a criação do elemento `<li>`, para que possamos utilizar o `classList`__
  
  ```js
    const novoItem = document.createElement('li');
    novoItem.classList.add("item");  
  ```

  - Esta função, tem a responsabilidade de __adicionar uma tag `<li>` com uma classe `item`__
  - Faremos o mesmo para a tag `<strong>`, porém, iremos adicionar o número do itme através do atributo `.innerHTML`, que é responsável por __adicionar um elemento HTML através do JS__
  
   ```js
    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;  
  ```

  - Agora que temos o `<strong>`, a variável `numeroItem` estará recebendo __a quantidade__
  - Através do console, vamos verificar que nossa função já está funcionando através do `innerHTML`
- Precisamos agora que o `novoItem` receba estes dados, através da função `novoItem.innerHTML = numeroItem + nome;`. Ela é responsável por receber os dados e adicioná-los ao __nome do item__
- Quando vemos isto no console, irá aparecer da seguinte forma:
  - `<li class="item">[object HTMLElement]camisas</li>`. Isto significa que __quando criamos um elemento do HTML via JS, não adicionamos um elemento dentro um do outro como se fosse um elemento simples de HTML__
  - __Ele cria um objeto completo quando utilizamos o `innerHTML`__, e agora temos que resolver este objeto, assim, precisamos entender como o JS adiciona um conteúdo dentro do outro, __principalmente para elementos criado via JS__
- A manipulação destes elementos é diferente. Iremos utilizar o `appendChild()`, que irá __inserir um elemento criado dentro do outro__
  - `novoItem.appendChild(numeroItem);` terá como resultado a __inserção do elemento dentro do outro__

  ```js
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;
  ```

  - Terá como resultado a inserção __do elemento e do nome__, exatamente o que precisamos. Agora temos de adicioná-lo na lista. Iremos criar um `id` na lista, deixando a __classe responsável pelo estilo e o id pela lógica__
  - faremos isto através da constante e do `appendChild()`:

  ```js
    const lista = document.querySelector("#lista");
    lista.appendChild(novoItem);
  ```

  - Quando voltamos no nosso HTML, é criado um novo item da lista, sendo assim funcional, porém, __ele ainda não está somando os mesmos tipos de itens quando são adicionados__

- Precisamos entender desta interação via JS. Os elementos criados por ele são __objetos__, e precisam ser __manipulados como objetos pelo `appendChild()`
- todas as vezes que eu estou executando essa função estou criando essa constante `lista` novamente, ela não precisa estar aqui, ela pode estar declarada como uma __variável comum ao nosso código inteiro e só ser chamada aqui na hora de adicionar. Não precisamos que a cada vez que crio um elemento, também buscar esse elemento da lista__

#### O armazenamento na WEB

- No momento, não estamos salvando todos os itens que estamos adicionando automaticamente. Para isso vamos usar o __local Storage__
  - O local storage é um espaço para __armazenarmos os dados do navegador, as informações do navegador do usuário__
  - plataformas salvam as informações no seu navegador, na sua máquina para que essas informações possam ser usadas posteriormente.
  - Estes tipos de armazenamentos são __cookies, bancos de dados, datas...__ 
  - Há uma variedade de dados salvos, tudo para que o usuário tenha a melhor experiência
  - localStorage é um recurso utilizado para salvar dados do tipo texto string no navegador da pessoa usuária
- Se formos no console da página, qualquer uma da Web, podemos ver o que o local storage realiza no dia a dia
  - `console.log(localStorage)`: Usando esse comando, podemos ver as diferentes informações que podemos acessar.
- o local storage é um __objeto__, então podemos inserir e retirar informações, podemos __manipulá-lo ao nosso favor__
  - `localStorage.setItem("chave", "valor")`: para podermos inserir, __precisamos colocar uma chave um valor, já que estamos manipulando um objeto__
  - __Chave é o que vamos usar para acessar__ e __valor é o que queremos inserir__
  - `localStorage.setItem("curso", "localStorage")`: estamos adicionando um __curso com um valor associado a `localStorage`__
    - `localStorage.curso` : Retorna o valor __associado__
    - `localStorage.getItem("curso")` : Também retorna o valor, porém acessa a chave através do `getItem`
  - `localStorage.removeItem("curso")`: Remove a chave __que foi cadastrada__
- `localStorage.clear()`: limpamos de maneira geral, __todo armazenamento local__

#### Inserindo dados no LocalStorage

- Iremos agora fazer a função capaz de pegar o __novo elemento inserido e adicioná-lo ao `localStorage`__
- Podemos adicionar uma funcionalidade onde, __ao adicionarmos um novo item a lista, o formulário seja limpo automaticamente__
  - Faremos isto adicionando o valor `""`, ou seja, __vazio__, para toda vez depois de realizarmos a adição de um novo item:

  ```js
    evento.target.elements['nome'].value = "";
    evento.target.elements['quantidade'].value = "";  
  ```

  - Toda vez que recarregamos o formulário, __ele estará vazio__
- Adicionamos estas funções em duas variáveis `nomeForm` e `qntdForm`, que guardam o valor de `nome` e `quantidade` respectivamente.
  - `const nomeForm = evento.target.elements['nome'];`
  - Ela será guardada desta maneira, para podermos __alterar o atributo `value`__
  - `criaElemento(nomeForm.value, qntdForm.value);` : Assim ficará nossa função `criaElemento`, ficando mais fácil de utilizar a funções
- Nosso elemento está sendo salvo e agora __quando criarmos este elemento, ele precisa estar salvo no `localStorage`
  
  ```js
    localStorage.setItem("nome", nome);
    localStorage.setItem("quantidade", quantidade);
  ```

  - Agora, estamos salvando qualquer item no armazenamento, onde ele tem a chave de `"nome"` e o valor `nome`.'
- Porém, no console, quando analizamos a ação, veremos que __os dados recém guardados foram sobrescritos__, e precisamos de uma forma de armazenamento múltiplo, __para diferentes dados e sem serem sobreescritos__

#### Múltiplos itens no localStorage

- No JS, quando temos um __par de elementos, uma `chave` e `valor`__ e queremos salvar o __dicionário disto, utilizamos um objeto__
- Vamos salvar isto em uma constante chamada `itemAtual`, referênciando um objeto, contendo __um nome e uma quantidade__ 

```js
  const itemAtual = {
    "nome": nome,
    "quantidade": quantidade
}
```

- Estamos transformando o `itemAtual` em um objeto, onde temos dois objetos chamados `"nome"` e  `"quantidade"`
- A informação será guardada, porém como `chave:item` e `valor:[object Object]`
  - Ou seja, está guardando nossas informações, porém, __como objeto__
  - O localStorage lê apenas __`JSON`, ou seja, uma string__
  - Precisamos tranformar esse objeto em uma __string__ através da propriedade `JSON.stringify()`
  - Ele vai pegar nossos objetos criados e __transformá-los em string para serem utilizados corretamente__
  - o `localStorage` salva __apenas texto__
  - `localStorage.setItem("item",JSON.stringify( itemAtual));`: Assim ficará nossa função que está armazenando os dados e estão sendo guardados no armazenamento local
- Nós apenas deixamos mais específico o salvamento destes dados, de forma que fiquem guardados de forma correta, porém, ainda estamos sobrepondo estes dados
- Precisamos somente de um objeto para armazenar naquele elemento todos os itens, nós precisamos de um array de objetos, nós precisamos de uma sequência de objetos.
- Para isto, vamos criar um Array, e que colocaremos fora de nossas funções, para utilizar eles diferentes vezes
  - `const itens = [];` : Criamos a constante para o array
  - `itens.push(itemAtual)`: Guardamos novos itens no array através do método `push`
  - `localStorage.setItem("item",JSON.stringify(itens));`: Executamos a função dentro do `localStorage`.
- Agora, ele vai __somar os itens do array__, inserindo mais itens na lista e armazená-los de forma correta no `localStorage`
- toda vez que eu preciso criar um grupo de elementos, um grupo de informações referentes aquele mesmo elemento, eu crio um __objeto e aqui eu tenho o par chave valor dentro do objeto__, `nome/nome`, e toda vez que eu preciso juntar esse grupo de informações em um único lugar, eu crio um __array com esses grupos__, nesse caso um array de objetos 
- O `localStorage` apenas nos permite __salvar `String`__, por isso utilizamos o `JSON.stringify`
- Agora, cada novo elemento da lista, estará guardado no local storage e precisamos apenas manter estes dados ao __recarregarmos a página__
- Queremos que ao carregar essa página, __essa lista não exista mais no HTML__, ela exista unicamente na __memória do nosso navegador e eu posso acessa-la e criar os elementos através da lista__

#### Entendendo o localStorage

- Os tipos de dados armazenados no localStorage não devem ser considerados sensíveis, de acordo com a LGPD (Lei Geral de Proteção de Dados). Isso ocorre, pois ele __não possui nenhuma camada de proteção, e os dados podem ser acessados facilmente por terceiros__. Dados considerados sensíveis, devem ser armazenados em __Cookies.__

#### Consultando dados do localStorage

- Nossa página está criando e salvando itens no localStorage. Porém, ao recarregarmos a página, ele não está __trazendo estes dados, os elementos da lista novamente__
- Iremos realizar uma consulta com nosso localStorage através do atributo `getItem`
  - Iremos atualizar nossa requisição, sendo assim, nossa estrutura ficará da seguinte forma: 
  - `const itens = localStorage.getItem("itens") || [];`
  - Ao carregar os meus itens, ao carregar a minha página, ao carregar esse documento eu preciso pegar tudo que tem lá. 
  - Ao invés de criarmos um array vazio, vamos primeiro ver se existe alguma coisa lá no `localstorage.getItem` passando aqui os `"itens"`, mas se isso for __falso, utilizando o `||`__ eu quero que ele crie um __array vazio__.
  - Ela funcionará, e estará guardando os __itens que adicionamos à mochila__, porém, a página, quando recarregada, __não estará com as tags presentes, mostrando os itens visualmente__
- Precisamos __iterar este array para criar estes elementos__
- Podemos fazer um loop no array utiizando o `forEach((elemento utilizado) => {})`
- porém, ao fazermos este lop, teremos um problema, um problema no __tipo de dado__
- Quando criamos a função responsável por armazenar os dados e transformá-los em string, tivemos um problema de __não deixa-lo especificamente como um Array__
  - Percebemos isto, quando utilizamos `console.log([])`
  - Ele nos mostra a __estrutura do Array__, algo que não está acontecendo quando armazenamos os itens no localStorage
  - O que fizemos é chamado de `Syntax highlighting`
- isto não ocorre por eles serem uma __string__
- __Precisamos pegar estes dados e transformá-los pro JS
- utilizamos então o `JSON.parse()`, e ao recarregarmos a página, ele __identificará como array__.
- Através do `console.log(elemento.nome, elemento.quantidade)`, veremos a __associação do elemento com a quantidade__
- Estamos imprindo __todos os itens presentes no nosso local storage__
-  Na nossa programação inventamos um problema, porque ao criar um elemento nós também nessa função estamos escrevendo uma quantidade de coisas lá no setItem. Vamos fazer um loop aqui para criar o elemento e atualizar a nossa lista que não vai funcionar. Precisamos __refatorar o nosso código para que essa operação seja feita no envio do formulário.__

#### Atualizar página ao cadastrar um item

- Nós já temos diferentes etapas no nosso projeto, porém, ainda não __são criados os dados com os elementos__, isto significa, que ele apenas adiciona as __características dos itens, mas não salva os itens__
- Isto é um problema de __lógica na programação__, e devemos resolver isto
- Um código __evolui conforme as funcionalidades, necessidades e afins durante seu desenvolvimento__. 
- Não é necessário implementar __todas as funcionalidades de uma única vez. Conforme o projeto cresce, suas necessidades mudam. Então, você utiliza outras funções e propriedades, dando uma melhora no código e em todas suas necessidades__
- __Podemos ir executando e aprendendo com o desenvolvimento e melhorando nosso código__
- Podemos pegar toda a lógica de criação do item para o `localStorage` e levá-la para nossa função `form.addEventListener()`
- Modificaremos também:

```js
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }
```

- Desta maneira, estaremos armazenando o `itemAtual`, vai ser criado aqui, mas agora o que preenche ele? Não é só o `nome`, porque o nome é só o __elemento do array__, é o `nome.value`. A quantidade também, é `quantidade.value`.
- O nosso objeto aqui já está funcionando para o Local Storage, ele esperava receber dois valores e o que precisamos é modificar um pouco o `criaElemento`. Ao invés dele receber dois valores, ele vai só passar o `itemAtual`.
  - `criaElemento(itemAtual);`
  - Modificamos também:
  - `function criaElemento(item) {}`
  - E a inserção dos itens pelo `innerHTML`, será atrelada ao `item`, ficando:
    - `numeroItem.innerHTML = item.quantidade;`
    - `novoItem.innerHTML += item.nome;`
- Agora ao criar um elemento ele pega o objeto, nós também inserimos esse objeto no nosso array e também insere esse array no Local Storage
- Na página, ao adicionarmos um novo item, veremos que ele continua sendo salvo no `localStorage`. Esta refatoração, __deixou nosso código maius dinâmico__, precisando chamar a função __`criarElemento`__ toda vez que __recarregamos a página__
- Os elementos permancem salvos, sendo a responsibilidade da `criarElemento` seja única, e exclusivamente __criar um elemento__
- Mesmo sem nenhum item na lista no HTML, irá ser criado um elemento,mas agora só faltará __somar os itens que forem iguais__

#### Diferentes armazenadores de dados

- Cookies, localStorage e sessionStorage são formas de armazenar dados no navegador, porém existem diferenças na usabilidade de cada um. Vamos conferir estas diferenças abaixo:

- __localStorage__ guarda informações de forma __persistente no navegador__, sendo em média 5MB de armazenamento padrão, podendo variar dependendo do navegador utilizado. Este limite pode ser aumentado pelo usuário quando necessário, no entanto apenas alguns navegadores suportam isso. __Os dados salvos são apenas do tipo string texto.__

- Cookies guardam informações de forma __persistente no navegador__, sendo até 4KB de armazenamento por Cookie, bem menos que localStorage. Cada cookie é como se fosse um arquivo __criado que guarda as informações de acesso da pessoa usuária__, por exemplo, de qual local o site foi acessado, qual e-mail foi utilizado ao realizar login no navegador, e quais produtos de um site foram clicados. Para acessá-los, muitas empresas criam pop ups para confirmar a autorização do uso dessas informações, pois são consideradas sensíveis.

- sessionStorage é similar ao localStorage,__sua diferença é que os dados não são salvos de forma persistente, ou seja, ao fechar o navegador eles são perdidos__. Este tipo de armazenamento é utilizado quando queremos que a pessoa usuária utilize os dados apenas enquanto estiver com o site aberto.

#### Modificar a quantidade de um item

- Queremos que a lista seja atualizada conforme adicionemos novos itens, ou alterem sua quantidade
- Primeiro vamos __Atualizar a tela__  e depois o __`localStorage`__
- Para __Atualizar a tela__, buscaremos o elemento que foi criado.
  - Ao enviarmos o item, ele irá para o formulário e iremos buscá-lo, utilizaremos uma constante chamada `existe`. Ela vai verificar a __existência do elemento__
  - A minha lista nada mais é do que o Array `const existe = itens.find()`. Eu vou buscar no meu array __itens aquele elemento__. Qual é o elemento que eu estou buscando? Eu estou buscando aqui o elemento:
    - `.nome`, `const existe = itens.find(elements => elemento.nome).`
  - Eu estou olhando todos os meus elementos do array na posição nome, um a um, e eu quero que ele seja exatamente igual a `nome.value`, que é exatamente o que eu digitei no meu formulário:
    - `const existe = itens.find(elements => elemento.nome === nome.value).`
  - Com o elemento definido, __precisamos criar uma condicional__
  - Se existe e for diferente de vazio, for diferente de `undefined`, se existe realmente existir, `if (existe) { }`, eu preciso criar um __elemento de controle nos meus itens.__
    - `itemAtual.id = existe.id`
  - Iremos criar este id na função `criaElemento`. E nós faremos isto, utilizando as propriedades dos __data attributes__
  - Precisamos que este id seja __incremental__, o primeiro item da lista seja 1, o próximo 2 e assim por diante. Para isto, precisamos que o `item` tenha uma propriedade `id`:
    - `numeroItem.dataset.id = item.id`
  - Se ele existe,__queremos que o id fique o mesmo__, mas se ele __não existe__, se esse elemento não existe, __eu preciso criar esse elemento, jogar esse elemento no array__, mas antes disso eu preciso criar um id para ele. __Se ele não existe, o id atual vai ser o tamanho do meu array__, `itemAtual.id = itens.length`. Se só tiver um item o id vai ser 1, se tiver dois itens o id vai ser 2, e por aí vai.
  - Ao recarregarmos a página depois de adicionar um item, __teremos um `data-id="0"`__ associado ao nosso `<strong>`
    - Ao adicionarmos o mesmo item, ele nos trará uma informação da __existência daquele mesmo elemento__
    - Quando utilizamos o `console.log(existe.id)`, iremos verificar que, no console, o __id associado a tag `<strong>` é 0__
  - Já criamos uma referência. Se um elemento tenta ser adicionado, e ele já existe, __já teremos o `id`__
  - Além da função `criaElemento`, preciso aqui ter uma função chamada `atualizaElemento`, que também vai receber como parâmetro o `itemAtual`, que agora já está atualizado com o id, `atualizaElemento(itemAtual)`

    ```js
    function atualizaElemento(item) {
    console.log(document.querySelector("[data-id='" + item.id + "']"));
    }
    ```

    - Temos uma função `atualizaElemento`, que recebe um `item`, e só precisamos encontrar a tag `<strong>` que criamos e atualizá-la
      - assim iremos fazer a busca do data attributes:
      - `[data-id='" + item.id + "']`, onde o `data-id` será igual ao __id que criamos__
    - No console veremos __a tag `<strong>` associdado ao id que lhe foi atribuído__
      - `<strong data-id="0">2</strong>`
      - Isso indica que, ao adicionarmos o mesmo item, __ele estará associado à tag criada__
      - Quando adicionamos um novo item, ele trará __o próximo id associado__
    - Assim, teremos de adicionar essa função, associada a quantidade, para atualizarmos o elemento da nossa lista:
      - `document.querySelector("[data-id='" + item.id + "']").innerHTML = item.quantidade;`
  - Toda vez que enviamos o formulário, perguntamos se aquele `item` já existe. Se o nome for encontrado, atualizamos o elemento, e quando não for, é criado um novo
  - Porém, no nosso dataStorage, veremos que o número de itens não foi atualizado. Isto acontece porque __quando nosso array de itens é atualizado quando criamos um elemento e não quando atualizamos este elemento__
  - Para resolvermos isto, devemos atualizar a nossa lista de arrays sempre que um )__item for atualizado para ir, por fim, atualizar o Local Storage.__

  #### Atualziando um item do localStorage

  - Agora precisamos atualizar nosso localStorage. Nós já estamos salvando as informações e elas estão aparecendo na tela, porém o armazenamento destas informações
  - Ao analisarmos isto no console, podemos perceber que os dados são continuamente guardados, mas __não alterados__
  - O `localStorage` __não é um banco de dados__, utilizando a função `localStorage.key()`, podemos acessar como um __Array__, podemos acessar qualquer elemento, como o 0 por exemplo.
    - Porém o elemento 0 é o `"itens"`, é elemento __chave__ não nosso valor
    - A chave é o `"itens"` e o valor é __toda a string, o conjunto de dados que é criado ao adicionarmos um novo item na lista__
  - O `localStorage` por armazenar uma __String__, eele armazena um objeto "descartável"
  - Todas as vezes que a gente quer atualizar o localStorage, __ele escreve por cima__, ou seja, descarta o anterior e armazena o novo item.
  - Ou seja, para que atualizemos o localStorage, __precisamos atualizar nosso Array__
    - Para isso, encontramos a __posição onde está nosso conteúdo e sobrescreve-lo__
    - A posição onde está nosso conteúdo é o: `existe.id`
  - `itens[existe.id] = itemAtual;` :  Aqui eu já estou fazendo um `setItem` passando os itens com o __array itens transformado no `stringify`__, isso aqui sempre vai __acontecer__. 
    - Quando eu crio um elemento, __eu estou dando um push no meu array e estou passando itens e quando eu atualizo o meu elemento__, se o elemento já existe eu só __troco o conteúdo no meu array e passo para o Local Storage.__
  - Ele vai __atualizar a tela e o `localStorage`__, sendo assim ele sobre escreveu o localStorage com novos itens
    -  Por ser uma string, por ser um conteúdo de texto temos que tratar e sobrescrever.

#### Removendo um item da mochila

- Como podemos remover um item da nossa lista? Queremos que ao clicar no item, seja possível resolvê-lo
- Primeiro, adicionaremos esta funcionalidade. Vamos personalizar nossa página e depois com o localStorage
- Podemos criar um botão que ao ser clicado, delete nosso item
- Iremos criar uma função responsável por criar um botão que irá deletar o conteúdo presente na nossa interface chamada de `botaoDeleta()` e dentro dela iremos colocar dois parâmetros:
  - `const elementoBotao = document.createElement("button");`
  - ` elementoBotao.innerHTML = "x";`
  - A primeira __cria o botão__ e a segunda insere o __`"x"` dentro do botão__
- Com o botão adicionado, agora devemos arrumá-lo, pois adicioná-los via JS, faz com que __não recebam o `addEventListener`__ na leitura da página
- Criamos o botão dinamicamente, então precisamos criar este elemento __com o evento associado__
  - `elementoBotao.addEventListener("click", () => {})`
  - com o `console.log("click");` veremos que os botões estão sendo identificados e retornando no console o `"click"`.
- Utilizando a arrow function, entendemos e conseguimos realizar as atividades. Porém, no nosso botão, ao __clicarmos nele__, queremos saber __em qual elemento nós realizamos o clique__
- a arrow function __não carrega o `this` para frente__, então devemos ter uma __declaração de uma função para que possamos utilizar o `this`__

  ```js
    elementoBotao.addEventListener("click", function() {
    console.log(this);
    })
  ```

- Assim, ao clicarmos em um dos botões, no console, saberemos __qual foi elemento em que clicamos o botão__
- Queremos chamar uma função que delete este elemento:
  - `deletaElemento(this)`
  - A função `deletaElemento` vai receber o parâmetro, uma __tag HTML__, e vai remover aquela tag
  
  ```js
    function deletaElemento(tag) {
    tag.remove();
    }
  ```

  - Porém, nós __excluímos o botão__ e não a tag por __inteiro__
  - Se olharmos com atenção, o __botão é filho do `<li>`__
  - então passaremos o __parente do elemento__
    - `deletaElemento(this.parentNode);`
  - Sendo assim apagamos a tag por completo
- Porém, há de se dizer que apagamos a tag, mas continua salvo no nosso `localStorage` os dados que tinhámos inserido, e agora __precisamos resolvê-los__
- Percebemos que isto ocorre ao recarregarmos à página

#### Removendo um item do localStorage

- Temos a função `deletaElemento`, e ela precisa retirar o armazenamento do `localStorage`.
- A gestão do nosso `localStorage` é através do array __`itens`__, a gente sempre atualiza ele e envia para o armazenamento. Então ao apagarmos uma tag da lista, precisamos __remover um item do array e depois escrever no `localStorage`__ 
- Para remover um item do array, vamos utilizar o `splice`. Porém para que isto possa ser feito, ele precisa ler __o índice do array__
- No nosso código, esta posição está sendo armazenada no __`id`__
- Então, a função `deletaElemento` recebe `id` como __parâmetro__
  -`deletaElemento(tag, id)`
- Após isto, precisamos também que o `id` seja __enviado__, e faremos isso na função `botaoDeleta(id)` e no `deletaElemento(this.parentNode, id);`
- Com o envio das informações, com a chamada da função `botaoDeleta`, precisamos que o `id` também exista:
  - `novoItem.appendChild(botaoDeleta(item.id));`: Fazemos isto com o `item.id`
- Passamos o `id` para o `botaoDeleta`, e que ele chama o `deletaElemento` quando o botão é clicado passando `id` como __parâmetro__
- Como retorno, ao apagarmos um elemento e verificarmos no console com `console.log(id);`, veremos que __cada item que é apagado, retorna o seu número do array__
- Agora que o `id` existe, precisamos removê-lo, e temos de saber __onde está esse elemento com o `id` específico?
  - Precisamos procurar este elemento específico no __Array__
  - `itens.splice(itens.findIndex(elemento => elemento.id === id), 1)`
  - O que ocorre é que: Para procurar um elemento, utilizamos `findIndex`, que retorna o __index de um elemento qualquer__, passamos o `elemento`, e que queremos seu `id`e que seja igual ao `id` recebido.
  - Ao verificarmos isto no console, veremos que o array terá __reduzido__, indicando que __foi removido o elemento do Array__
  - Agora precisamos apenas __atualizar o `localStorage`__
- `localStorage.setItem()`: Para escrevermos no `localstorage`, precisamos __passar os itens utilizando o `stringify`__
- Estamos conseguindo remover os itens tanto as tags quanto no `localStorage`
- Porém, ao usarmos `localStorage` no console, iremos perceber que __nosso id deixou de ser único, pois está presente em mais de um item__
- __Nosso id passou a ser igual ao id anterior__
- A nossa lógica aqui de adicionar o id igual o tamanho do elemento faz muito sentido quando não temos alterações no elemento, mas agora que o nosso elemento pode ter um item removido do meio, o tamanho do array é completamente irrelevante.
- O que nós precisamos é encontrar o__último elemento desse array__, a partir do último elemento encontramos o __`id` e soma 1__.
- Esta evolução é completamente normal
- Se nós tentarmos diminuir nosso array, iremos ter um problema na lógica de que __um array vazio não pode diminuir, um Array vazio menos zero resulta em erro__
  - `itemAtual.id = itens[itens.length - 1];` , retornará um erro.
- Precisamos verificar se __o Array existe__ e ai então teremos uma tomada de decisão
- Utilizaremos `if` e `else` porém com um __operador ternário__, é uma `?`.
  - Se for positivo, faça algo, se negativo, faça outra.
  - Se o array não existe, __daremos o `id` 0
  - Se já tiver algo no `id`, __queremos encontrar no último elemento o `id` e ai sim, podemos adicionar 1 a ele__
-  `itemAtual.id = itens[itens.length - 1] ? (itens[itens.length - 1]).id + 1 : 0;`
- Ao fazermos isto, ao retiramos os elementos e depois adicionar os novos, os __`id` estarão sendo atualizados e somados a cada vez que um item é adicionado__
- Porém, quando adicionamos o mesmo item __o id é alterado__, ele está pegando aqui na hora o `id`, ele está pegando o item atual e eu não quero que seja só o `ìd` do `existe.id`, eu preciso realmente encontrar o meu __elemento para fazer isso.__
- `itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual;`
  - Estamos garantindo que estamos buscando o __elemento correto e atualizando o conteúdo daquele elemento correto__.
  - Através do `findIndex()`, procuramos o id do elemento e indicando o elemento correto a ser selecionado.
- Assim, olhando o `localStorage`, os elementos são alterados, __seu `id` é incremental e não altera quando nós adicionamos o mesmo item__