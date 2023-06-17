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