const abas = document.querySelectorAll('[data-aba]')

esconderConteudos = () => {
    const conteudos = document.querySelectorAll('[data-conteudo]')
    conteudos.forEach(conteudo => conteudo.classList.add('hide'))
}

inativarAbas = () => {
    abas.forEach(aba => aba.classList.remove('ativa'))
}

ativarConteudo = (valor) => {
    const conteudo = document.querySelector(`[data-conteudo="${valor}"]`)
    conteudo.classList.remove('hide')
}

ativarAba = (aba) => {
    aba.classList.add('ativa')
}

abas.forEach(aba => aba.addEventListener('click', () =>{
    const valor = aba.dataset.aba;

    esconderConteudos()
    inativarAbas()
    ativarConteudo(valor)
    ativarAba(aba)   
}))

