// Primeiro tipo de callback:

// .then(resposta => resposta.json())
// .then(r => {
//     if (r.erro) {
//         throw Error('Este CEP é inexistente')
//     }else
//     console.log(r)})
// .catch(erro => console.log(erro))
// .finally(mensagem => console.log('processamento concluído'));

async function buscaEndereco() {
    var consultaCEP = await fetch('https://viacep.com.br/ws/01001000/json/');
    var consultaCEPConvertida = await consultaCEP.json();
    console.log(consultaCEPConvertida);
}

buscaEndereco();
