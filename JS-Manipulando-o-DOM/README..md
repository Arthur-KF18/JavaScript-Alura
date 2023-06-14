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