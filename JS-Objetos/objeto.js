const listCPF = [11111111, 22222, 3333];

const personObject = {
  name: 'Arthur',
  age: 32
};

const { name, age } = personObject;
console.log(`O seu nomé é ${name} e sua idade ${age}`);

// Lista de Clientes dentro de uma loja
const client = {
  name: "Arthur",
  age: 20,
  cpf: "1122233345",
  email: "Arthur@dominio.com"
};

console.log(client.name);
console.log(`O nome do cliente é ${client.name}, e sua idade é ${client.age}`);
console.log(`Os 3 primeiros digitos do CPF são ${client.cpf.substring(0, 3)}`);
