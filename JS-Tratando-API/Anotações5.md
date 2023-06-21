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

- 