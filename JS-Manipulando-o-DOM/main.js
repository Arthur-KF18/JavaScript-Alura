const robotron = document.querySelector('.robo');
robotron.addEventListener("click", () => {
  console.log("Clicando no Robô");
});

function clicado() {
  console.log("Robô foi clicado!");
}

clicado();

// Adicionando as classes em constantes

const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');
const braco = document.querySelector('#braco');

somar.addEventListener("click", () => {
    braco.value = parseInt(braco.value) + 1;
})

subtrair.addEventListener("click", () => {
  braco.value = parseInt(braco.value) - 1;
})