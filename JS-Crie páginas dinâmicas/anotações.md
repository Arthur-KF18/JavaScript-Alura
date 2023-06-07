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


    #### Dentro do arquivo main.js
    - O nome main vem de "principal", e sempre é usado main para o arquivo principal javascript, para facilitar quando precisa-se descobrir qual o principal arquivo js e toda lógica
    - o ; no JavaScript é opcional, sendo extremamente recomendado para evitar diferentes erros no futuro