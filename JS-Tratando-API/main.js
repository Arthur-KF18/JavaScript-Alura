// Primeiro tipo de callback:

// .then(resposta => resposta.json())
// .then(r => {
//     if (r.erro) {
//         throw Error('Este CEP é inexistente')
//     }else
//     console.log(r)})
// .catch(erro => console.log(erro))
// .finally(mensagem => console.log('processamento concluído'));

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
