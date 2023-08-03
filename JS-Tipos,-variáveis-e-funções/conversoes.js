const numero = 456;
const numeroString = "456"

console.log(numero == numeroString)
console.log(numero + Number(numeroString))

let telefone = 12341234;
console.log("O telefone é " + String(telefone)); 

let usuarioConectado = false;
console.log(usuarioConectado.toString());

usuarioConectado = true;
console.log(usuarioConectado.toString())

// Função `Number()`

let largura = "10";
let altura = "5";

console.log(Number(largura) * Number(altura));

let usuario = false;
console.log(Number(usuario)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuario = true;
console.log(Number(usuario)); // agora teremos a conversão de true (verdadeiro) para o número 1.

var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)