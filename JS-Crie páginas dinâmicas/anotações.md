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
        - quando usamos ```document.querySelector('.tecla_pom');``` no __console__, ele nos trará do HTML __as classes correspondentes__ ```  button.tecla.tecla_pom ```, sendo assim o que ele __retornará__.
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


    #### Dentro do arquivo main.js
    - O nome main vem de "principal", e sempre é usado main para o arquivo principal javascript, para facilitar quando precisa-se descobrir qual o principal arquivo js e toda lógica
    - o ; no JavaScript é opcional, sendo extremamente recomendado para evitar diferentes erros no futuro