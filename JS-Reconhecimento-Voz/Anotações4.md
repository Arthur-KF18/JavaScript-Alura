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

- 