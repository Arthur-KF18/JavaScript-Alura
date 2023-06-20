#### Anotações do projeto baseado em reconhecimento de voz

- Este arquivo possui as anotações do curso de __JavaScript: Validações e Reconhecimento de Voz__
- O projeto consiste em um __jogo de advinhação utilizando voz__
- O projeto foi construído utilizando o framework __Vite__ para subir a aplicação web
- A estilização utilizará o pré-processador __SASS__

#### Iniciando o projeto e escolhendo fontes e cores

- `ctrl + j`: Cria um terminal
- Esta etapa será apenas da estilização do website e todas suas características
- Utilizaremos a CDN do font-awesome

#### Número aleatório com Math.random()

- Criaremos uma pasta contendo __todos os arquivos javascript__
- o primeiro que iremos criar, o main.js, terá todo código relacionado ao __sorteio dos números__
- Como podemos sortear um número aleatório, de forma totalmente automática ao recarregarmos a página?
  - Para isto, podemos utilizar uma função chamada `math.random()`
  - Esta função é responsável por retornar um número __pseudo-aleatório__, no intervalo [0, 1], ou seja, __de 0(inclusivo) até, mas não incluindo, 1(exclusivo)__
  - Isto quer dizer que 0 vai incluir até 1, porém, __utilizando números decimais__
- Ao utilizarmos `Math.random()` no console, ele iá gerar um número aleatório. Porém se realizarmos uma multiplicação por exemplo, `Math.random()*10`, __ele irá gerar um número aleatório entre 0 e 10__
- Para eliminarmos todo número decimal depois do __ponto__, utilizaremos o __`parseInt`__
  - Ele vai transformar o número em __inteiro__
- Então, ao geramos um número, ele estará neste intervalo, __mas nunca estará no número exclusivo__
- No nosso main.js, criamos a função responsável por gerar um número aleatório, sem parâmetros, e que incluirá a função que criamos anteriormente:

    ```js
    function gerarNumeroAleatorio() {
        return parseInt(Math.random() * 100);
    }
    ```

  - Através disso, teremos a inclusão dos números aleatórios, nos quais podemos observar no console:
    - `console.log('Número Secreto:', numeroSecreto);`
    - Através disto, iremos receber a mensagem : __Número Secreto: XX__, e o número estará entre 0 e 100
    - Queremos manipular o menor valor e o maior valor que está no nosso `<span>`, e colocar esses valores para que __Sejam exibidos na tela do nosso projeto__

#### Manipulando menor e maior valor

- Nossa aplicação terá um valor entre 0 e 100, e precisamos que este valor altere-se no javascript quanto na página
- Iremos criar duas constantes contendo __o maior e menor valor__
  - `const menorValor = 1`
  - `const maiorValor = 100`
- Queremos que ao alterar estes valores, ele altere automaticamente os valores que estão aparecendo no website
- Porém, ao fazermos o sorteio dos valores, para que fiquem no intervalo solicitado, precisamos editar a função `parseInt`. Ao invés de multiplicar por 100, iremos colocar a constante `maiorValor`, mas ela deve ser __inclusiva__
  - Isso quer dizer que, __quando formos sortear um número entre 1 e 10, queremos que realmente seja 1 e 10__
  - `return parseInt(Math.random() * maiorValor + 1)`
  - Agora sim, teremos um valor entre 1 e 10, sendo o 10 __incluído__
  - No console, ao imprimirmos esta função, em um dos números aleatórios gerados, iremos ter o 100
- Nós queremos que as duas constantes e os valores, __sejam exibidos na tela__
  - Iremos realizar essa manipulação buscando estes elementos, que estão sendo inseridos através da tag `<span>`
  - `const elementoMenorValor = document.querySelector('#menor-valor');`
  - Ele está buscando o id do elemento e assim poderemos manipulá-lo
  - `elementoMenorValor.innerHTML = menorValor`: O conteúdo da tag será alterado com __o valor presente na constante `menorValor`__
  
  ```js
  const elementoMenorValor = document.querySelector('#menor-valor');
  elementoMenorValor.innerHTML = menorValor;

  const elementoMaiorValor = document.querySelector('#maior-valor');
  elementoMaiorValor.innerHTML = maiorValor;
  ```

  - A primeira função, irá pegar o menor valor e a segunda o maior valor que foi inserido __através do javascript__
- Agora precisaremos configurar o __input de fala__ da pessoa para que ela possa sortear o número

#### Web speech API

- Agora que o projeto, já escolhe o número secreto, precisamos agora conectar nosso microfone e o computador __reconheça o que estamos falando__
- Vamos utilizar a Web speech API na MDN.
- Ela permite que a gente __incorpore dados de voz em nosso aplicativos de voz__.
- Existem dois tipos de funcionalidades, __o que permite reconhecer a fala e o que tem a capacidade de falar de acordo com o que está lendo__
- Vamos utilizar apenas o __reconhecimento de fala__ 
- Podemos analisar também se ele é compatível com os outros navegadores existentes
- É necessário utilizar um navegador que tenha __suporte à funcionalidade__
- Acessado conforme o microfonem, e que ele irá conseguir entender
- Para que seja possível utilizar o API, precisaremos importar no javascript __as funcionalidades existentes para que, qualquer atualziação que ocorra, funcione corretamente__

  ```js
  const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
  ```

  - A primeira, se trata do __reconhecimento de voz__ e a segunda __a gramática aplicada quando o reconhecimento é realizado__
- Iremos importar as seguintes linhas de código em um arquivo separado `reconhecimento.js`
  - __Durante o curso, a importação deste arquivo ocorreu via HTML, porém aqui foi utilizado a propriedade `import()`__
- Agora que temos ele configurado, precisaremos de uma __instância para que possamos utilizar este reconhecimento e controlar as informações.__
  
  ```js
  const recognition = new SpeechRecognition();
  const speechRecognitionList = new SpeechGrammarList();
  ```
- Essa instância vai permitir com que possamos inserir os dados necessários para que o reconhecimento seja feito, além de utilizar um método chamado `SpeechGrammarList.addFromString().`
  - Este método aceita como parâmetro a __cadeia de caracteres que queremos adicionar e, opcionalmente, um valor de peso que especifica a importância desta gramática em relação a outras gramáticas disponíveis na lista(pode ser de 0 a 1, inclusive)__
- Após adicionarmos o `const recognition = new SpeechRecognition();`, __devemos inserir a língua que será reconhecida através do método `recogniion.lang = 'pt-Br'`
- Iniciamos o reconhecimento com `recognition.start();`
- Na página, veremos que o microfone estará ativado, se não, __basta permitir acesso ao microfone__
  - `console.log(recogniton)`: mostra quais valores estão sendo armazenados em um __array de itens__

#### Exibindo a mensagem no console

- Agora que temos o microfone conectado no navegador, podemos __podemos pegar a mensagem que estamos falando e colocar no console para ser exibida__
- Vamos criar um evento onde, __ao realizarmos a fala, vamos exibir a nossa mensagem no console__
  - `recognition.addEventListener('result', onSpeak)`
  - o `onSpeak` vai exibir __tudo que estarmos falando no console__
  - Nossa função ficará da seguinte forma: 
  
  ```js
    function onSpeak(e){
      console.log(e);
    }
  ```

- No console, ao falarmos, nos exibirá um evento chamado `SpeechRecognitionEvent`, e veremos que estaremos a língua correta, e o que queremos está no `results`
- Dentro dele haverá um `transcript`, que __trará as informações de fala que foram ditas__
- Agora, nós precisamos apenas que ele pegue o dado __que transmite as informações de fala apenas__
  - Faremos da seguite forma:
  - `console.log(e.results);`: Irá trazer a lista de resultados, incluindo a nossa voz
  - `console.log(e.results[0][0]);` irá nos trazer a __frase dita dentro do array `SpeechRecognitionAlternative`__
  - Para acessarmos o `transcript`, basta:
    - `console.log(e.results[0][0].transcript);`
    - Ao fazermos isto, vai apenas trazer __a frase que falamos__
- Agora, queremos pegar este número dito no console e enviálo __a tag `<span>` que contém o número que iremos informar__

#### Mostrando a mensagem na tela

- Iremos criar uma `<div>` __contendo o que dizemos e a caixa contendo o valor que dizemos__
- Para isso, iremos pegar o id `chute` e passar toda requisição para se obter a nossa fala:
  - `const chute = e.results[0][0].transcript;`
  - `exibeChuteNaTela(chute);`: irá exibir na tela nosso chute
- Criaremos a função que exibirá na tela:

```js
  function exibeChuteNaTela(chute) {
      elementoChute.innerHTML = `
          <div>Você disse</div>
          <span class="box">${chute}<span>
      `
  }
```

- Para podermos inserir o valor, podemos criar as tags utilizando o `innerHTML`, e quando escrevemos as tags, __utilizamos o $ para chamarmos a constante `chute`__
- Como resultado, será exibido na tela o __texto e o número que falamos__
- Agora precisamos comparar se __o número que falamos foi igual ao número secreto__

#### Criando a lógica do jogo

- 