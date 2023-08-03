let senha = 1234;


function logado() {
    console.log('Bem-vindo ao website');
}

if (senha === 1234) {
    return logado();
} else {
    console.error('Não foi feita a validação');
}

