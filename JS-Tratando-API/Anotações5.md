#### Tratando dados de uma API

- Arquivo de anotações do curso __JavaScript: Consumindo e tratando dados de uma API__
- A base deste projeto está utilizando __Vite__ e __Sass__ para subir a página via servidor e para a estilização da mesma
- O Projeto:
  - Somos um grupo de desenvolvimento para o Alura Books, e encontramos problemas em relação aos dados dos usuários, precisamos entender qual a exata localização dos clientes
  - Utilizaremos conceitos JS como: __Assíncrono e síncrono, Event Loop, Call Stackm Task Queue, Fetch API e Promises.
  - Entenderemos por completo sobre o JavaScript

#### Importando JS no HTML

- Vamos agora cuidar do cadastro de novos clientes, primeiro iremos importar o JavaScript no HTML

#### Síncrono ou Assíncrono?

- O que são estes termos e no que são utilizados?
  - Síncrono é quando __uma tarefa é concluída após a outra__, sendo este o __padrão__. Por exemplo quando uma imagem carrega, depois outra e assim sucessivamente
  - Assíncrono __é quando se há tarefas ocorrendo uma atrás da outra, porém, há tarefas em segundo plano que também serão executadas, porém, com um pequeno tempo__
- Vamos aplicar este processo padrão, por exemplo, simulando uma pequena conversa:
  
  ```js
  console.log("Mandando oi pro amigo");

  function mandaMensagem() {
      console.log("Tudo bem?");
      console.log("Vou te mandar uma solicitação!");
      console.log("Solicitação recebida");
  }

  mandaMensagem();

  console.log("Tchau")
  ```

  - Apesar de simples, __estes diferentes métodos e funções, ocorrem de forma síncrona, uma atrás da outra__
  - Precisamos fazer um processo assíncrono como, sendo assim, __Poderíamos realizar nossas tarefas, enquanto esta conversa acontecia ao mesmo tempo, sendo uma melhor funcionalidade__

#### Event Loop e Call Stack

- Agora que entendemos ambas estas formas de comunicação, porém, __como que funciona esta leitura de ação para ação?__
- Podemos separar isto em __3 partes__
  1 - Event Loop: O Event Loop é um ciclo que __monitora e executa as ações que mandamos para o JavaScript.__ O processo de leitura do código __só é finalizado quando não existem mais ações a serem executadas.__
  2 - Call Stack : A pilha de chamadas (call stack) __é um mecanismo que organiza como irá funcionar o script quando existem muitas funções:  qual função está sendo executada, quais estão sendo chamadas dentro de alguma função, etc.__
  3 - Task Queue: A task queue __é a fila de tarefas assíncronas.__ Se algo precisa __ocorrer em segundo plano ou mais tarde, é nessa fila que ele será adicionado e executado mais tarde.__
- Na nossa função, a primeira ação, ou seja, o primeiro `console.log()` foi para ela, assim como a nossa função `mandaMensagem`, por serem __chamadas até terminarem de serem executadas__. Ou seja, __ele irá chamar todas as funções que serão realizadas e depois a chamada terminará sua execução__
  - Praticamente o que ocorreu foi uma __Call Stack__
- Vamos fazer uma pequena associação do que cada função da leitura realiza:
  - Event Loop: é como um segurança na festa e vai __guiando para qual porta a pessoa tem que entrar, qual é o acesso dela e quando ela deve acontecer.__ Então ele fica o tempo inteiro no código olhando o __que vai ser chamado para a Call Stack.__
  - Call Stack: vão todas as coisas que __devem acontecer na tela__. Então ele chama __uma coisa por vez do código, essa é a função dele__. O Event Loop manda para lá o nosso código, __as partes VIPs que têm que acontecer primeiro. Elas entram primeiro ali na fila.__
  - Por padrão, __tudo vem vazio__. Mas também temos a Task Queue, que vai __dar conta do nosso sistema síncrono. É a outra fila que o guarda vai fazer a segurança__

#### Task Queue

- Através do nosso código exemplo, nós iremos adicionar uma função chamada de `setTimeout(função, tempo de execução)`
- O código irá funcionar corretamente, porém, a nossa função que criamos __será chamada depois de 5 segundos__
- Ele é um método __Assíncrono__, ou seja, está executando no plano de fundo e logo será ativado, sendo assim o __Task Queue__
- Ele cálcula em __milessegundos__
- deixamos o código em segundo plano para se __preparar e depois puxa de volta para rodar na sua tela.__ Essa função do `mandaMensagem` está sendo enviada como um __parâmetro do `setTimeOut`__. Isso é chamado de __Call Back__.

#### Callback

- Ações que tomamos e que geram outras ações, é o que chamamos de __`callbacks`__
- Por exemplo, um almoço. Quando nós vamos esquentar nossa comida, é esperado que ela volte quente para nós. Apesar de óbvio esta frase, é imporante dizer que ela é __fundamental__
  - Por exemplo:
  - `almoço(esquentarcomida)`: aqui defineremos o `callback`
  - `almoço(esquentarcomida, 5000)`: aqui haverá o tempo de espera
  - `almoço()`: O resultado de nosso `callback`
- Nós vemos estas __interações entre variáveis e constantes no JS__
- No nosso código, o nosso `callback` é a função `setTimeOut(mandaMensagem, 5000)`
- Basicamente, `callbacks` são __funções que são enviadas com parâmetros para outras funções__
- Acontecem __depois de um tempo ou uma interação com o usuário com a tela__
- As mais usadas são __as requisições__
- Uma maneira de exemplificar e justificar o uso de `Callbacks` no assíncrono é literalmente o `setTimeout()` que fizemos agora. Ele transformou a execução da função __`mandaMensagem` em cinco segundos após o início do código__.
- Callbacks são assíncronos, portanto são funções que são ativadas por algum fator pré-determinado, podendo ser um tempo específico, a partir de uma ação do usuário, depois da conclusão de alguma coisa.

#### Fetch API

- O caso mais comum de comunicações assíncronas, os `callbacks`, são através de __requisições__
- Para nós podermos solucionar o problema de cadastro dos clientes, iremos utilizar a API do ViaCEP, acessaremos o webservice de CEP, a validação do CEP, uma explicação dos possíveis erros e os formatos de retorno.
  - Isto fará com que, quando um cliente digitar seu endereço, __ele utilizará o CEP__
- No website deles, veremos que __ao colocarmos o CEP do cliente, ele retornará o endereço do cliente, sem margem de erro__
- Antes de utilizarmos, temos que pensar no que são as APIs
  - API é __Interface de Programação de Aplicações__, ele permite que __dois componentes de software se comuniquem entre si__, e chamamos esses lados de __cliente e servidor__
  - O cliente faz uma requisição pela API e que ela irá enviar ao servidor. Como resposta, o servidor envia os dados exigidos para a API e que dela chega ao cliente
  - A API fica no meio, __realizando a comunicação__
  - ou seja, __O cliente faz uma solicitação para essa API, ela faz os trâmites e pede ao servidor para retornar a resposta.__
- Com isto tudo abordado, iremos utilizar a URL de comunicação com o servidor do ViaCEP através do __`fetch()`__
  - o `fetch()` é um método no qual __inicia o processo de busca de um recurso da rede, retornando uma promessa que é cumprida assim que a resposta estiver disponível.__
  - __A promessa é resolvida para o objeto `Response` que representa a resposta à sua solicitação.__
  - `var consultaCEP = fetch('viacep.com.br/ws/01001000/json/');`
- Quando analisamos no console, ele retornará uma `Promise`, ou seja, __uma promessa__
- O método `fetch()` é um método __assíncrono__ que tem como parâmetro a __URL da API__, e colocamos esse valor dentro de uma variável para __conseguirmos consultar o retorno__, que é o __CEP__

#### Promises

- Ao fazer a requisição, tivemos a `promise`, ou seja, uma promessa. É uma promessa, ou seja, é __a promessa de que algo irá acontecer__
- O retorno dela pode ser __resolvida ou rejeitada__, isso permite que __métodos assíncronos se tornem síncronos__ ou seja, ao invés de retornar um valor específico, ele retorna __uma promessa de que este valor irá chegar__
  - Podemos comparar isto com uma entrega. Este pedido pode ser entregue ou acontecer algo, mas foi prometido que ele irá chegar em sua residência
 
```js
  const entrega = new Promise(function (resolve, reject) {
      if (recebeu === true) {
          resolve('Ana recebeu a encomenda!')
      }else{
          reject('Não foi possível receber a encomenda!')
      }
  })
```

- No exemplo acima, veremos como a `promise` funciona, na qual é composta por parâmentros, `resolve` e `reject`. Caso a função ser atendida, será chamada a variável `resolve`, caso não, a `reject` será chamada
  -  Na `Promise` de entrega, quando acontece a entrega da encomenda, __mandamos uma mensagem avisando que a pessoa recebeu a encomenda.__ Se ela __não recebeu__, chamamos a função de `Reject` e enviamos uma mensagem indicando que __não foi possível essa entrega.__
- Na maior parte dos casos __a gente não constroí uma `Promise` do zero, ela é gerada a partir de uma coisa Síncrona, que é nosso `fetch API`. Ele está fazendo uma Promise por trás dos panos que foi gerada através da nossa requisição.__
- Pode acontecer de a __requisição demorar para carregar__. Então, ao invés de dar um valor final de erro, __ele gera uma promessa, e no futuro teremos o resultado da requisição__
- Uma última curiosidade dentro dessa anatomia da Promise: estamos enviando uma __função como parâmetro para ela e aparecem Callbacks__. E é isso que o `Resolve` e `Reject` são, __dois Callbacks da função da `Promise`.__
- No console iremos perceber que há três tipos de categoria:
  - __`Prototype`__ diz que é uma `Promise` está afirmando que __ela é uma promessa__
  - __`PromiseResult`__ que é o resultado da `Promise`
  - __`PromiseState`__ que é o estado da promessa, __se foi completada, em execução ou rejeitada__
- É recomendável que utilizemos o `https://` na __frente da URL no `fetch()`__ porém, em alguns casos __não será necessário__
- `var consultaCEP = fetch('viacep.com.br/ws/01001000/json/');`
  - Esta variável guarda o fetch API da nossa ViaCEP. É importante dizer, que ela se comunica como Banco de Dados de servidores, assim podendo trazer as informações necessárias.
  - Quando analizamos o resultado desta `Promise`, ele nos trará `pending`, ou seja __ela está em espera de ser utilizada__ com seu resultado de `Response`, que __é a resposta__
  - Sobre o objeto `Response`, para o acessarmos,__precisamos usar os métodos das Promises, que vão retornar outras Promises.__
  - Estes sendo: __`Then`, `Catch` e o `Finally`.__ Eles nos permitirão mostrar na tela __todo esse valor do que estamos recebendo__

#### Then e JSON

- Quando nós usamos de exemplo sobre a entrega, lembramos que estavámos esperando receber o pacote, ou seja, __como uma promessa.__ E quando ela era entregue, essa __promessa era resolvida, e quando acontecia alguma coisa com o entregador, a promessa era rejeitada?__
- Então, em qualquer uma dessas situações, __a resposta que vai chegar em nós, é um objeto do tipo `Response`__
- No nosso código, para termos a `response`, utilizaremos o método `then()`
- Em um panorama mais geral, __uma promessa sempre vai retornar um objeto do tipo `response`, seja ela rejeitada ou resolvida__. 
- E o `then()` funciona assim, como a sua tradução. __Ele é basicamente um “então”. Que é: faça o fetch, ele vai lá e faz a requisição.__
  - `var consultaCEP = fetch('viacep.com.br/ws/01001000/json/').then();`
- A responsta vinda do objeto `response` vem de uma forma que não conseguimos acessar. Precisamos convertê-la.
  - `.then(resposta => resposta.json());`
  - O objeto do tipo `Response` nos trouxe um corpo de resposta que não conseguíamos acessar. Ele trouxe um amontoado de bytes. __Usamos o JSON para ele converter essa resposta em json, que é um formato muito usado no desenvolvimento em JavaScript, porque ele parece um objeto JavaScript.__
  - __O corpo da resposta de uma requisição chega em formato de bytes. Desta forma o .json() transforma o corpo e retorna um json formatado. O formato JSON (JavaScript Object Notation) possui basicamente a mesma sintaxe que a de um objeto JS.__
  - `.then(r => console.log(r));` : Quando nós fizemos a conversão do JSON, faltou apenas __imprimirmos este documento,, por isso utilizamos o console__
  - Utilizamos outro `then` ao final do anterior, e iremos associar à uma variável `r`, dentro de uma `arrowFunction`
  - No navegador vai realizar __a promessa e depois vai imprimir no navegador o valor dela__
- Teremos uma cadeia de `then()` em nosso código graças ao `fetch` realizando a requisição, e com ela __convertemos ela para o formato `.JSON`__ e por final, __imprimimos os dados dentro deste JSON através do console__, sendo __referente a tarefa da conversão, a promessa anterior__
- __Eu tenho uma promessa, “então”, ela vai realizar algum comando quando ela for resolvida ou rejeitada.__

#### Tratando erros com catch

- O método `then()` irá pegar a requisição, e fará algo com o valor retornado, __se aquela promessa foi resolvida__
- O que aconteceria se a promessa fosse rejeitada? O que deveríamos fazer?
- para isso, iremos utilizar um outro método chamado __`catch()`__
  - O `catch()` iremos definir __quando ocorrer um erro, o que será informado sobre ele__
  - Se nós retiramos algum elemento que está no nosso link da API, iremos ter um erro a mostra, como por exemplo `TypeError: Failed to fetch`
  - Isto ocorre graças ao `catch(erro => console.log(erro));`
  - Ele irá __pegar o erro e irá imprimir o que há de errado com nosso link__
- __Toda `Promise` nos retorna estes dois métodos, o `then` e o `catch`.__  O `then` para quando __ela for resolvida__ ou retorna o __`catch` se ela for recusada__
- `catch` podemos traduzir para __"pegue"__
- Porém, só estamos tendo essa resposta no navegador. Precisamos deixá-la mais refinada __para que seja possível entender o porque do erro ocorrer__

```js
    .then(r => {
      if (r.erro) {
          throw Error('Este CEP é inexistente')
      }else
      console.log(r)})
    .catch(erro => console.log(erro));
```

- Neste código, iremos dizer que, se __O CEP informado estiver errado, ele devolva a mensagem de erro que colocamos__
  - Se estar correto, será impresso no console os valores do JSON
- No ViaCEP, quando um __CEP não é identificado, ele irá puxar o erro 400__
  - Vale ressaltar que o erro só aparecerá quando também __existir a formatação, porém não existir o CEP__
- Então, para CEPs que não existem, ele não vai voltar `reject`, ele não vai no `catch`, __mas no `then`__. Para podermos pegar este erro, __utilizaremos uma condicional__
  - Se o retorno for `erro === true`, ou seja, `r.erro`, ele vai jogar um erro chamado __o CEP não existe__, e o `catch` vai pegar o erro que jogamos. Caso não esteja incorreto, ele vai continuar a executar normalmente
  - Então, qauando conseguimos outras maneiras de jogar erro, podemos jogar com `throw`, e ai fará mais sentido o `catch`
- E com os outros condicionais, __podemos dar um jeito de imprimir mensagens customizadas direto no `catch`__, sem ser esse caso do "CEP não existe", que ele passa como `Resolve`.


#### Finally

- Vimos que temos dois métodos com suas respectivas funções, o de que o `then` __é quando a nossa promessa é resolvida__, e o `catch` é __quando a nossa promessa foi rejeitada__.
- Há mais um método que existe nos nossos `promises`
- Para podermos usá-lo, __iremos inseri-lo ao final do `fetch`__.
  - `.finally(mensagem => console.log('processamento concluído'));`
  - Isso quer dizer o __fim do processamento, das informações que foram analizadas__
  - Independente da resposta da promessa, __ele vai imprimir o que colocamos nele.__
  - E quando realmente não nos importamos em qual vai ser esse resultado, temos uma frase padrão que vai retornar na tela

  #### Arrow Functions

  - Em uma função tradicional,__caso você crie uma variável dentro dela, seu contexto é referente a função onde ela está.__ Para entender melhor: se você usar a palavra chave `.this`, você está se __referindo a essa função em si__.
  - Já em uma `arrow function` temos um __contexto externo__. Por exemplo, se essa `arrow function` for criada dentro de outra função seu __contexto será aquela função que ela está dentro.__ Caso a função for aplicada __fora de outra função__, seu contexto será __global, o código inteiro.__
  - A `Arrow Function` é representada por: `()=>`

#### Retorno de requisições

- Quando estamos realizando uma requisição para a API,__estamos trocando mensagens HTTP’s.__ `HTTP` é um __protocolo, uma forma de conversa entre duas máquinas__, que permite transferir hiper-texto de um lado a outro. Daí o nome _Hyper Text Transport Protocol._

- Uma requisição é composta __de uma `request` (solicitação) e uma `response `(resposta)__. `Request` e `Response` são dois tipos de __mensagem diferentes quando falamos de HTTP.__

- Em uma `response` é retornado um `response code` (código de resposta) e um motivo, que dá __significado ao código__. A estrutura padrão desse código tem __três dígitos, sendo o primeiro referente a classificação dele__
  - É dividido em:
  - 1XX : Informativo - a solicitação foi aceita ou está em andamento;
  - 2XX : Confirmação - a solicitação foi concluída ou entendida;
  - 3XX : Redirecionamento - faltou alguma coisa na solicitação;
  - 4XX : Erro do cliente - houve um erro na solicitação;
  - 5XX : Erro do servidor - houve uma falha no servidor durante a solicitação.

