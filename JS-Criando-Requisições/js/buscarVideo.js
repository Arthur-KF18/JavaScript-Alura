import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";


async function buscarVideo(evento) {
    evento.preventDefault();

    const dadosPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaAPI.buscaVideo(dadosPesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));

    if (busca.length == 0) {
        lista.innerHTML = `
        <div class = "mensagem">
            <h2 class = "mensagem__titulo">O título não foi encontrado</h2>
        </div>
        `
    }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento));