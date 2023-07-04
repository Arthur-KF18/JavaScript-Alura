import { conectaAPI } from "./conectaAPI";

const lista = document.querySelector("[data-lista]");

function constroiCard() {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `
    <iframe width="100%" height="72%" src="https://www.youtube.com/embed/AL5Dr2tS16o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="./img/logo.png" alt="logo canal alura">
        <h3>Qual é o melhor hardware para programação com Mario Souto</h3>
        <p>236 mil visualizações</p>
    </div>
    `

    return video;
}

async function listaVideo() {
    const lista = await conectaAPI.listaVideos();
}

