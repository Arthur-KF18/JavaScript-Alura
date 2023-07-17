import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";


async function buscarVideo(evento) {
    evento.preventDefault();

    const dadosPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaAPI.buscaVideo(dadosPesquisa);

    const lista = document.querySelector("[data-lista]");

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento));