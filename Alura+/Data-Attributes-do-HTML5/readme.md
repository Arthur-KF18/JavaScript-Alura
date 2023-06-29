# Data Attributes no HTML5

- Após adicionarmos todos os estilos ao nosso projeto, podemos agora organizá-lo corretamente.
- Primeiro iremos atribuir a classe `hide` para o segundo formulário de cadastro, e depois definiremos um estilo para a classe onde exibirá cor do formulário ativo, chamada `ativa`
- Porém, nos queremos que ao selecionar um das abas, nos retorne o formulário que queremos, então temos de separar o CSS do JavaScript, tendo classes apenas para estilos e outra forma de armazenar as variáveis que se comunicaram do HTML pro JS.
- Podemos utilizar `id` para realizarmos esta ação, porém, são muito específicos e não devem ser alterados, o que deixaria muito seletivo nosso `id` no JS
- Uma das formas de fazer isto é utilizando __`Data Attributes`__
  - Ele é muito mais semântico, então ao criarmos `data-conteudo="entrar"`, iremos dizer a ele que __o data é um conteúdo, e seu valor é "entrar"__
- Iremos realizar isto tanto nos formulários entrar e cadastrar
  - `<div data-conteudo="entrar">`
  - `<div data-conteudo="cadastrar">`
- Ambos são conectados porém possuem __valores diferentes__
- Faremos o mesmo para as diferentes abas:
  - `data-aba="entrar"`
  - `data-aba="cadastrar"`
- então, ambos serão conectados porém são data attributes diferentes e tem o mesmo valor. isso os torna mais __semânticos__
- Iremos ao nosso arquivo `main.js` e deveremos deixá-lo fora do escopo global. Para isso criaremos uma arrow function sem parâmetros: `(() => {})`
- Toda a lógica será criada dentro, onde, ao mudarmos de aba através do clique, ele esconda o formulário presente no HTML
- Primeiro iremos criar uma constante que armazene todos os `data-aba`, pois estaremos __selecionando ambas as abas__. Com o `document.querySelectorAll` iremos fazer com que __retorne um array de objetos__, `const abas = document.querySelectorAll('[data-aba]')`
- O positivo de se usar o data, é que não precisamos necessariamente __colocar o valor dele, basta apenas inseri-lo dentro do `querySelector`__
- vamos pegar as abas e para cada uma delas, queremos que ele realize algo, no caso o clique. Iremos armazenar isto em uma variável `aba` seguida pelo `addEventListener` em uma função anônima
- A primeira coisa que temos de fazer aqui __é verificar a aba que foi clicada e pegar o data atttribute dela para sabermos qual o valor dele__
- Iremos criar uma constante chamada `valor` e que dentro dela iremos pegar a `aba` e atribuir o `dataset`. Ele é um __objeto que vem todos os valores, chave valor, dos data attributes presentes no HTML__ Ele vai colocar __todas as keys e os valores, e por ser um objeto, podemos selecioná-lo com `.aba`__
  - `const valor = aba.dataset.aba`
- Feito isso, nossa função ficara assim:

```javascript
    abas.forEach(aba => aba.addEventListener('click', () =>{
        const valor = aba.dataset.aba;  
    }))
```

- Com isto, iremos precisar criar funções responsáveis por __esconder o conteúdo, inativar a aba quando não selecionada, e fazer a tanto a aba quanto o conteúdo ativarem__
- Primeiro, iremos criar a função `esconderConteudos`, que irá __selecionar os conteúdos através do data-attribute `data-conteudo`__, e que para cada `<div>`, iremos adicionar o estilo `hide` ao ser selecionado.

```javascript
    esconderConteudos = () => {
        const conteudos = document.querySelectorAll('[data-conteudo]')
        conteudos.forEach(conteudo => conteudo.classList.add('hide'))
    }
```

- Com isto feito, quando selecionarmos o elemento no clique, iremos adicionar a classe `class="hide"` quando o selecionarmos. Isso ocorre por que __conteudo é o nome do nosso data-attribute, sendo assim, será apenas colocado no elemento que contenha este valor__
- Sendo assim, agora precisamos ativar o elemento novamente. Para isso, iremos criar uma função chamada `ativarConteudo`, na qual vai armazenar __nossa constante `valor` responsável por ler os datasets da aba__. Dentro dela iremos criar uma constante `conteudo`, que armazena o `data-conteudo`. Porém, por estarmos usando crase, iremos definir uma variável `${valor}`, na qual vai receber __o dataset da aba selecionada__. Além disso, iremos remover a classe `hide` quando ele for selecionado:

```javascript
    ativarConteudo = (valor) => {
        const conteudo = document.querySelector(`[data-conteudo="${valor}"]`)
        conteudo.classList.remove('hide')
    }
```

- Agora que podemos esconder e ativar nosso conteúdo, precisamos apenas manipular o DOM para as abas. Primeiro iremos inativar elas
- Para isso, iremos criar uma contante chamada `abas`. Ela irá armazenar todos os `data-aba` do HTML. Com isto, iremos criar uma função chamada `inativarAbas`, onde dentro dela __iremos pegar cada aba e remover o estilo `ativa` que foi adicionado pela funcão `ativarAba`__

```javascript
    inativarAbas = () => {
        abas.forEach(aba => aba.classList.remove('ativa'))
    }
```

- Com isto, só faltará adicionar a função `ativarAba`. Nela iremos dar como parâmetro o data attribute `aba` e que dentro dele __iremos adicionar o estilo `class="ativa"`__

```javascript
    ativarAba = (aba) => {
        aba.classList.add('ativa')
    }
```

- Com isto, na nossa função de clique, que altera os elementos da forma que predefinimos, iremos inserir todas estas funções:

```javascript
    abas.forEach(aba => aba.addEventListener('click', () =>{
        const valor = aba.dataset.aba;

        esconderConteudos()
        inativarAbas()
        ativarConteudo(valor)
        ativarAba(aba)   
    }))
```

- E com isto, nosso código funcionará corretamente