#### Sobre o curso

- O curso terá o desenvolvimento de um website, onde será possível armazenar dados no navegador.
- A ideia deste projeto, __será uma mochila para guardar itens__
- Será desenvolvido com o framework __Vite e SASS para os desafios__ durante o curso

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

- 
