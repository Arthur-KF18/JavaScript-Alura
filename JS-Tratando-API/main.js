// Primeiro tipo de callback:
// .then(resposta => resposta.json())
// .then(r => {
//     if (r.erro) {
//         throw Error('Este CEP é inexistente')
//     }else
//     console.log(r)})
// .catch(erro => console.log(erro))
// .finally(mensagem => console.log('processamento concluído'));

// Funcionalidade do Promise:
// let ceps = ['01001000', '01001001'];
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas));

async function buscaEndereco(cep) {

    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();

        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente');
        }
        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        console.log(erro);
    }
}
