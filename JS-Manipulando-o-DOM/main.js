// const robotron = document.querySelector('.robo');
// robotron.addEventListener("click", () => {
//   console.log("Clicando no Robô");
// });

// function clicado() {
//   console.log("Robô foi clicado!");
// }

// clicado();

// Adicionando as classes em constantes

const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach((elemento) => {
  elemento.addEventListener('click', (evento) => {
    manipulaDados(evento.target.textContent, evento.target.parentNode)
    console.log(evento.target.parentNode);
  })
})

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector(".controle-contador");

  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1
  } else {
    peca.value = parseInt(peca.value) + 1
  }
}

