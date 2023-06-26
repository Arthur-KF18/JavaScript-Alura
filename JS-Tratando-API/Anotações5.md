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

- 