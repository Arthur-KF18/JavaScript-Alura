const apiUrl = 'http://localhost:3000/clientes'
const listaClientes = document.querySelector('#clientes')

fetch(apiUrl)
    .then(dados => dados.json())
    .then(resposta => {
        resposta.forEach(cliente => listaClientes.innerHTML += 
            (`<li class = "cliente">Nome: ${cliente.nome}, CPF: ${cliente.cpf}</li>`))
        console.log(clientes)
    })
    .catch(resposta => document.body.innerHTML = `
        <div class = "erro">
            <h1 class="erro__titulo">404</h1>
            <p class = "erro__mensagem">Servidor não encontrado!</p>
        </div>
    `)

