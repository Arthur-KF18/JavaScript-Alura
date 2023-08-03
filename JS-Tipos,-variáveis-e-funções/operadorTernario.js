const idadeMinima = 18;
const idadeCliente = 16;

if (idadeCliente >= idadeMinima) {
    console.log('Pode beber')
} else {
    console.log('Não pode')
}

const senhaCadastrada = 12345;
const senhaInserida = 12345;

const verificaUsuario = senhaInserida === senhaCadastrada ? 'Bem-vindo ao sistema' : 'Senha errada, digite novamente';

console.log(verificaUsuario)
