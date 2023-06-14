document.querySelector('#texto').innerHTML="O INVERNO CHEGOU"

document.querySelector('#texto').animate(
    [
        {
            opacity: 0,
            color: "#fff",
          },
          {
            opacity: 1,
            color: "#000",
          },
    ],
    2000
);