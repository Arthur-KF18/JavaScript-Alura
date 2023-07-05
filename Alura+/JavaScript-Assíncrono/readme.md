# JavaScript assíncrono e Fetch

- Vídeo alura+ explicando mais sobre javascript e suas funções assíncronas
- Para a base do projeto, foi utilizada uma base de dados para inserção de nome e cpf na tela. __Como o projeto é vindo de vídeo, utilizei a estratégia seguinte:__
  - Criação do index.html
  - criação do index.js
  - Instalação do node modules
  - Instalação do json-server
  - Criação do db.json
- Com isto pré-configurado, __utilizei o link para a porta 3000, que foi gerada automaticamente__:

```javascript
// usar json-server --watch db.json para abrir a porta
  const apiUrl = 'http://localhost:3000/clientes'
```

- Sendo assim, nosso código estará pronto para uso.
- Nós temos uma __listagem de clientes que ocorreu localmente, e que agora temos uma API para consumir__. No arquivo `index.js`, temos o seguinte código:

```javascript
  const apiUrl = 'http://localhost:3000/clientes'
  const clientes = [{ nome: 'teste', cpf: '00000000000' }]
  const listaClientes = document.querySelector('#clientes')

  clientes.forEach(cliente =>
      listaClientes.innerHTML += (`<li>nome: ${cliente.nome} cpf: ${cliente.cpf}</li>`)
  )
```

- No HTML está sendo impresso __os valores armazenados no array, `nome` e `cpf`__. Temos a API, Temos o nome dos clientes e cpf, temos a `listaClientes` na qual aramzena o `id` da tag `<ul id="clientes"></ul>`. O `forEach` que fazemos dentro do nosso array `clientes`e  dentro dele, __para cada cliente, iremos adicionar uma tag que contenha os dados deste cliente__

- O mais correto, é utilizar os dados da nossa API, para isso iremos utilizar o `fetch()`:

```javascript
  fetch(apiUrl)
  .then(dados => console.log(dados))
```

- Usando o `fetch` para realizar a conexão com nossa API, e assim que inserimos `fetch(apiUrl)` __ele já irá realizar a conexão e devolver uma Promise__
  - A Promise vai ser __algo que irá retornar para nós algo que deve ser resolvido, e quando isso se resolver, ele irá devolver os dados e que ai poderemos fazer algo com isto__
- Dentro do `.then`, significa que __quando a conexão com a API existir, ele irá realizar o que solicitamos, então, chamamos de `dados` a varíavel que receberá os dados do `apiUrl` e depois iremos imprimir no console estes `dados`__

```javascript
// dentro do console:
  Response {type: 'cors', url: 'http://localhost:3000/clientes', redirected: false, status: 200, ok: true, …}
```

- Ele nos diz qual o tipo de resposta, no caso `CORS`, o status dela entre outros diferentes dados.
- Agora, precisamos transformar este conteúdo para que seja lido por nós, através do método `.json()`
  - Os dados armazenados na variável `dados`, irão ser transformados em `.json()`, que é o body da nossa `Response` anterior. e com estes dados, iremos armazená-los em uma variável `resposta` que irá ter no console.log

```javascript
  fetch(apiUrl)
  .then(dados => dados.json())
  .then(resposta => console.log(resposta))
```

-__Dentro de uma promise, todo dado que retorno da nossa função, ele irá ser passado para o próximo `.then()` que tivermos__

- A resposta no console __será o array de itens dos quais nós temos no nosso .json__

- Agora, iremos atribuir os valores para cada cliente. Sendo assim, utilizando o `forEach`, para cada cliente que tivermos, usaremos nossa lista `clientes.push()` e adicionar novos itens, e como objeto como o nome e o cpf:

```javascript
  .then(resposta => resposta.forEach(cliente => clientes.push({
    nome: cliente.nome,
    cpf: cliente.cpf
  })))
```

- O código está correto, porém não funciona, já que o __método deve ser assíncrono e o JS trabalha de forma síncrona quando não estabelecido__
- No js também temos ciclos, __e iremos criar um ciclo assíncrono para o nosso `fetch`__, já que quando nós __não definimos este ciclo assíncrono, temos o problema do JS resolver todo o código de uma única vez, sem nos dar a resposta que esperamos. Ou seja, o `forEach` foi feito antes do `fetch` tem sido adicionado__
- Então, iremos criar função para a variável `resposta` e quaando pedimos o `console.log(clientes)` irá aparecer o __array de itens nos quais armazenou tanto os valores do .json quanto da nossa variável `clientes`__

```javascript
  fetch(apiUrl)
    .then(dados => dados.json())
    .then(resposta => {
        resposta.forEach(cliente => clientes.push({
            nome: cliente.nome,
            cpf: cliente.cpf
        })
        )
        console.log(clientes)
    })
```

- E agora, __precisamos criar a lista na nossa promise. Podemos realizar isto, tirando a variável clientes e apenas utilizar a variável `listaClientes` já que estaoms consumindo nossa API__
- Ela só irá precisar receber o `innerHTML` associado ao `listaClientes`:

```javascript
  fetch(apiUrl)
    .then(dados => dados.json())
    .then(resposta => {
        resposta.forEach(cliente => listaClientes.innerHTML += (`<li>nome: ${cliente.nome} cpf: ${cliente.cpf}</li>`))
        console.log(clientes)
    })
```

- Como resultado, iremos ter a impressão das tags e dos funcionários existentes na nossa página HTML. Caso aconteça algum erro relacionado ao banco de dados ou não pudermos realizar a conexão e os requisitos que necessitamos, __podemos utilizar o `catch()` para o traramento destes erros__

```javascript
  .catch(resposta => document.body.innerHTML = `
        <div class = "erro">
            <h1 class="erro__titulo">404</h1>
            <p class = "erro__mensagem">Servidor não encontrado!</p>
        </div>
    `)
```
