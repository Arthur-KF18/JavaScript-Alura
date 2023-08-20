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

// Usando colchetes para acessar os dados

const keys = ["name", "age", "cpf", "email"];

keys.forEach((key) => { console.log(`A chave ${key} tem valor ${client[key]}`) });

// Alterando valores de um objeto

const person = {
  name: "Luna",
  job: "Engenherira"
}

console.log(person.name);
person.number = "12 3456 7891"
console.log(person.number);
