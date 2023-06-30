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

#### Como funciona o map

- Nosso próximo desafio é __aplicar um desconto em cada um destes livros presentes na tela__
- Para fazermos isto, utilizaremos o __método `map`__, que tem como função __invocar a função `callback` passada por argumento para cada elemento do Array e devolve um novo Array como resultado__
- Um exemplo de como este método é aplicado:

```javascript
    const array1 = [1, 4, 9, 16];
    const mapa1 = array1.map(x => x * 2);

    console.log(mapa1);
```

- Esse exemplo diz que __ele tem um array e uma constante `const array1 = [1, 4, 9, 16]`__, e ele vai passar para uma função `map`. Ele cria uma nova constante `const map1 = array1.map`, pega cada valor, cada elemento do array e faz __ele vezes dois__.
- O método `map` __não altera o valor do array original, ele faz uma cópia, ou seja, ele passa por cada elemento do nosso array que é invocado, executa uma função que esperamos, e retorna um novo array contendo os valores retornados__
- Essa função `map` ela é __invocada da mesma forma que o `forEach`, só que diferente dele, a função `map` retorna um valor__
- Então o `map` vai __alterar os valores para a nova array que utilizaremos, mas ele não altera a array principal__. E diferente do `forEach`, teremos __um retorno para essa nossa função__.

#### Desconto com o map

- Vamos aplicar um desconto a cada um dos livros apresentados na página utilizando o `map`, porém, __primeiro devemos refatorar nosso código e deixá-lo mais organizado__
- Criando 3 arquivos JavaScript diferentes:

 1. main.js: Contém a função anônima
 2. inserirLivro.js: Contém a função para inserir o livro na página
 3. mapeamento: Contém o `map` dos Arrays

- No nosso `main.js` iremos criar uma função na qual irá receber o desconto e ela será guardada em uma variável `livroDesconto`

```javascript
    let livroDesconto = aplicaDesconto(livros)
    exibeLivro(livroDesconto);
```

- Após feito isso, iremos no nosso `mapeamento.js` e iremos criar a função `aplicaDesconto`, onde criará o desconto em todos os livros em `mapeamento.;js`. Então ficará: `function aplicarDesconto(livros)`.
- Como poderemos aplicar este desconto? Vamos definir o quanto de desconto queremos através de uma constante `desconto = valor de desconto`.
- E agora, iremos passar os livros com desconto em uma função de seta.
- Tendo isso, iremos criar o `.map(livro => {})`, ou seja, estaremos fazendo o mapeamento:

```javascript
    const desconto = 0.3;
    livroDescontado = livros.map(livro => {        
    })
```

- __A função `map` precisa retornar alguma coisa, e esse nosso retorno deverá ser apenas a mudança no valor do livro__
- Para isso, iremos utilizar `{...livro, preco: livro.preco - (livro.preco * desconto)}` após o `return`
  - Os 3 pontos irão fazer com que __haja uma cópia de todo nosso Array ou objeto existente para um novo e depois irá existir a alteração do preco__
  - Sendo assim, o `preco` irá receber um novo valor vindo do ``(livro.preco * desconto)` e que será substituído na nossa página
  - Após definirmos isto, iremos criar um `return` dentro da função `aplicaDesconto` com o novo valor do `livroDescontado`:

  ```javascript
    const desconto = 0.3;
    livroDescontado = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)};
    })
    return livroDescontado;
    ```
- Ou seja, no `main.js` pegamos os livros, depois aplicamos o desconto, __retornando um objeto__ e que guardamos dentro da variável `livroDesconto` e depois exibe `exibeLivro(livroDesconto)` na tela
- no `inserirLivro.js` iremos alterar o preço para `${livro.preco.toFixed(2)}`, para que fique em __duas casas decimais o valor__

#### Filter

- Com nosso projeto já definido, trazendo todas as informações da nossa API, temos algumas interações na página que precisam ser definidas, já sendo elas  as __categorias dos produtos__
- Por exemplo, ao clicarmos em "livros de front-end", __exibirá na tela apenas os livros desta categoria__
- Para isto, iremos utilizar um método especial chamado __`filter`__. Ele é um método responsável por **criar um novo array com todos os elementos que passaram no teste implementado pela função fornecida**, ou seja __ele irá filtrar os itens do array pela forma que especificarmos__, por exemplo:
 
 ```javascript
 const letras = ['spray', 'carro', 'limite', 'java']
 const resultado = letras.filter(letra => letra.lenght > 5);

 console.log(resultado);
 ```

 - Através deste exemplo, no nosso Array definido, especificamos que __queremos no nosso `filter` apenas palavras que contenham mais do que 5 caracteres__. Fazemos isto com a criação da `Arrow Function` nomeada `letra`, onde ela irá percorrer o array e irá trazer __apenas frases que possuem mais de 5 letras__


 - Sobre as Arrow Functions, vale lembrar como elas foram adaptadas de funções normais para funções mais simples:

```javascript
//antiga forma que se era escrita, onde utiliza-se o `map` para verificar todo o array de itens, além de criar uma nova função element, que usa `return`. Ou seja, iremos pegar o array e quando formos atualizá-lo com os itens corretos, iremos guardar isto em uma nova função
elements.map(function(element) {
  return element.length;
})
// A forma mais correta de se utilizar as arrow functions, pois existe apenas um parâmetro e a sua única sentença sendo o `return`
elements.map(element => element.length);
```

- Comparando ambas, é possível perceber a inexistência do `this` e sendo extremamente mais curta. __Ela sempre irá guardar os novos valores dentro de uma função que será impressa__
- __Quando precisamos de uma simples função com um único argumento, a sintaxe da `Arrow Function` pode se representada apenas como `identificador => expressão`. Isto evita com que escrevemos `function` e `return`, assim como parênteses e semi colunas__
- Para funções de __múltiplos argumentos, parâmetros REST ou padrões, simplemente adicionaremos parênteses envolta da lista de argumentos__:

```javascript
// Forma antiga, mais verbosa em relação ao ES5
var total = values.reduce(function (a, b) {
  return a + b;
}, 0);

// Forma nova, mais compacta do ES6, no qual podemos entender de forma clara e concisa em uma única linha
var total = values.reduce((a, b) => a + b, 0);
```

- Um outro exemplo de aplicação do `filter` poderia ser:

```javascript
    const idades = [10, 22, 42, 16, 50]
    const podeDirigir = idades.filter(idade => idade>= 18)

    console.log(podeDirigir)
    // Resultado esperado: > Array [22, 42, 50]
```

- Com isto, o `filter` irá __criar um novo array de itens, onde apenas idades maiores ou igual a 18 serão impressas__
- Podemos testar quais idades não podem dirigir:

```javascript
    const idades = [10, 22, 42, 16, 50]
    const podeDirigir = idades.filter(idade => idade>= 18)
    const naoPodeDirigir = idades.filter(idade => idade<18)

    console.log(podeDirigir)
    // Resultado esperado: Array [22, 42, 50]
    console.log(naoPodeDirigir)
    // Resultado esperado: [10, 16]
```

- A função dentro da `Arrow Function` é __restrita apenas para a constante. Isso quer dizer que somente ela pode acessar a `Arrow function` e não é global. Isto permite que possamos utilizar o mesmo nome de função em duas constantes diferentes__

- Então reparamos que o método `filter`, a principal diferença dele, para entendermos como ele funciona, é o seguinte: _temos um array, com determinados valores, sejam eles idades, categorias, alguma coisa e queremos filtrar, criando um novo conjunto de elementos, uma nova array._
- Então essa função, __sempre que passamos por ela, a função vai retornar um valor booleano, ou seja, `true` ou `false`__
  - __se o valor for verdadeiro, ele vai então colocá-lo em uma nova array__, ou seja, __se o valor da idade for maior ou igual a 18, ou seja `true`, ele irá armazenar na variável `podeDirigir`, se não for,ou seja `false`, ele não irá utilizar aquele valor__
- Voltando ao nosso código, precisamos aplicar as `Arrow Functions` e o `filter` para nosso array de livros. __Se um livro for de Front-end, existirá um filtro onde neste novo array, apenas existirá os livros de front-end__

#### Como funciona o filter

- Primeiro, iremos criar um novo documento chamado `filter.js`, nele iremos criar __o filtro de livros da nossa página__

- Dentro dele iremos criar uma variável constante chamada `livrosFront`, que irá armazenar a tag que filtra os livros de front, a `id="btnFiltrarLivrosFront"`. Com isto iremos precisar criar um evento de clique, no qual vai ativar a função `filtrarLivros`:

```javascript
    const livrosFront = document.querySelector('#btnFiltrarLivrosFront');

    livrosFront.addEventListener('click', filtrarLivros);
```

- Com isto, agora precisamos criar a função `filtrarLivros` na qual vai __pegar o array de livros, ou seja, a varíavel global `livros`, que já está retornando o array de livros, e iremos filtrá-la, senod assim `function filtrarlivros(){}`, sem parâmetros.__
- Primeiro filtraremos esses livros e esses livros __serão armazenados em uma variável, já que o `filter` retorna valores booleanos__. Depois iremos criar a variável `let livrosFiltrados = livros`, __já que `livros` é um array vazio que ao ser executado faz o `get` do `BuscaLivrosDaAPI` e insere dentro da varíavel `livros`__
- Com isto, usaremos `filter` para separar os livros __de acordo com sua categoria__, dentro de uma `Arrow Function`

```javascript
    function filtrarLivros() {
        let livrosFiltrados = livros.filter(livro => livro.categoria == `front-end`)
        console.table(livrosFiltrados)
    }
```

- Com isto, iremos imprimir o resultado da nossa função, de acordo com a categoria que deixamos para ela. Porém, __isto não é eficiente, já que queremos que ao clicarmos em qualquer uma destas categorias, seja colocado de acordo com o selecionado, sem repetir o código__

#### Filter de livros

- Agora queremos fazer com que a constante __pegue mais de um botão e atribuir nesse mesmo botão a mesma função para otimizarmos nosso código e evitarmos a duplicidade de código__. 
- No nosso HTML, veremos que __para cada botão que temos, temos uma classe associada chamada `btn-tipo de livro`__
- No console, iremos digitar `document.querySelectorAll('.btn')` que irá retornar __todos os botões que filtram os livros__
- no código, iremos retirar nossa antiga variável `livrosFront` e iremos atribuiur uma nova chamada `botoes`, onde ela irá selecionar __todas as tags que possuem a classe `btn`__
- Após isso, __como queremos que para cada um destes botões seja realizado o evento de clique, iremos utilizar o `forEach`, onde nele iremos passar o parâmetro `btn`:

```javascript
    botoes = document.querySelectorAll('.btn');
    botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));
```

- Com isto, na nossa função `filtrarLivros()` iremos precisar que __a categoria selecionada seja de acordo com o botão__, pois se continuarmos colocando o nome da categoria, __qualquer botão que selecionarmos vai trazer o array relacionado a categoria definida__
- Uma das formas para resolver isto, é percebermos que __no console, ao digitarmos `btn`, ele irá procurar a classe existente, e quando colocamos `bnt.value`, ele vai nos trazer o valor desta tag__
- Sendo assim, uma das formas de conseguir pegar a categoria, __seria através do `value`__.

- Então, dentro da função `filtrarLivros` iremos criar duas constantes. __Uma que irá pegar o id do botão selecionado e outra que irá selecionar o `value` deste botão:"

```javascript
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value 
```

- Desta forma, iremos pegar o id e guardar na constante `categoria` que deverá ser acessada através da variável `livrosFiltrados`:

```javascript
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
```

- Como resultado, no `console.table(livrosFiltrados)`, __quando um botão ser selecionado, sua respectiva categoria irá ser exibida como tabela__
- Com isto, faltará apenas que seja exibida na tela __apenas os livros que foram selecionados__

#### Livros filtrados na tela 

- Agora que conseguimos pegar todos os livros que são selecionados no console de acordo com seu filtro, precisamos agora __exibir a seleção deles na tela__
- Na nossa função `filtrarLivros()` iremos trocar o `console.table(livrosFiltrados)` por `exibeLivro(livrosFiltrados)`.
- Quando vemos nossa página, __os livros existentes na tela ainda continuam aparecendo, porém,, ao selecionarmos uma das opções, teremos todos os livros e será adicionado os livros de acordo com o filtro, porém, tudo estará presente__
- E os livros aparecem embaixo, ou seja, __ele está colocando esses elementos, conforme eu vou clicando, embaixo__. Então, nós temos todos os elementos, conforme clicamos nos botões para filtrar os novos livros, eles estão aparecendo embaixo.
- A Forma de resolvermos isto, é indo no `inserirLivro.js` e adicionarmos dentro da função `exibeLivro`, o `insereLivro.innerHTML = ''`, ou seja, vamos pegar o elemento `insereLivro` e dizer que __dentro dele, seu conteúdo, sempre será uma String vazia, limpa. Ou seja, toda vez que clicarmos em um elemento de filtro, ele irá limpar e só mostrar o apenas os livros que estamos visualizando__

#### Como funciona o sort

- Nosso próximo desafio será __ordenar os livros baseado nos seus preços__. Quando clicamos no botão "ordenar por preço", não aparecerá __nada, pois não foi definido um conteúdo que deve ser inserido clicarmos no botão__
- O método de array responsável pela __ordenação dos elementos é o `sort()`__
- O método `sort()` __ordena os elemento do próprio array e retornar o array. A ordenação não é necessariamente estável, ou seja, que preserva a ordem de chave de registro iguais__. Em outras palavras, __não é uma ordenação que esperamos__
- __O tempo de execução vai depender do quando de memória vamos usar__
- Quando passamos a um array que seja ordenado, __conseguimos passar uma `função de comparação`, ela irá definir exatamente a ordem dos elementos.__
- A razão pela qual ela é instável, __se deve ao fato de que o array é ordenado de acordo com a pontuação unicode de cada um dos caracteres, de acordo com a conversão de cada elemento para string. O que vai acontecer é que, quando chamarmos esta função, ela vai transformar nossos elementos em string baseado no Unicode para depois realizar a ordenação__
- Um exemplo disto:

```javascript
    var fruta = ['cereja', 'banana', 'macas'];
    fruta.sort();
    // O resultado será: ['banana', 'cereja', 'macas']

    var pontos = [1, 10, 2, 21];
    pontos.sort();
    // O resultado será: [1, 10, 2, 21]. O 10 vem antes do 2, por que 10 vem antes de 2 em ponto de código Unicode
```

- Se a ordenação vai precisar de uma função de comparação para colocar exatamente os itens em uma ordenação estável, precisaremos realizar um teste:

```javascript
    let precos = [29.98, 11, 1, 101, 110]
    let precosOrdenados = precos.sort()

    console.log(precos)
    // Resultado: [29.98, 11, 1, 101, 110]
    console.log(precosOrdenados)
    // Resultado: [1, 101, 11, 110, 29.98]
```

- Para que os valores sejam ordenados corretamene, precisamos passar uma __função dentro do `precosOrdenados`, e nela vamos passar dois valores, `a, b`__
- O valor de `a, b` será __o primeiro elemento e o segundo elemento__. E nele iremos inserir que __a ordem estável seja menor para o maior, o que ficará:__

```javascript
    let.precosOrdenados = precos.sort(function(a, b){
        return a - b;
    })

    console.log(precosOrdenados)
    // Resultado: [1, 11, 19.98, 101, 110]
```

- Para fazer __do maior pro menor faremos `b - a`, resultando em `[110, 101, 29.98, 11, 1]`.
- Um detalhe importante é que, __se um elemento retorna `Undefined`, ele vai ser classificado no final da nossa matriz__
- __Sempre que pensarmos na ordenação e precisarmos de uma ordenação estável, nós vamos precisar de uma função__
- Podemos utilizar um `Arrow Function` também:

```javascript
    let.precosOrdenados = precos.sort((a, b) => a - b); 
```

- Se rodarmos, terá o mesmo resultado
- o `sort` vai __classificar os elementos do array e retornar um array ordenado__. Quando __chamarmos esse `sort` com elementos que sejam undefined, esse undefined vai sempre para o final da nossa lista e eles são ordenados com base no unicode.__
- Então devemos lembrar que, __ele transformou tudo para string, a ordenação dele não vai ser estável. E caso precisamos de uma ordenação que seja estável, aí criamos uma função para fazer essa ordenação de comparação.__
- 