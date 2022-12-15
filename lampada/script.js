let turnOn = document.getElementById("turnOn");
let turnOff = document.getElementById("turnOff");
let imagem = document.getElementById("imagem");
let roubar = document.getElementById("roubar");

// function ligar() {
//   imagem.src = "svg/lamp-on.svg";
// }

// function desligar() {
//   imagem.src = "svg/lamp-off.svg";
// }

// function sumir() {
//   imagem.src = "svg/lamp-roubar.svg";
// }

turnOn.addEventListener(
  "click",
  (ligar = () => (imagem.src = "svg/lamp-on.svg"))
);

turnOff.addEventListener(
  "click",
  (desligar = () => (imagem.src = "svg/lamp-off.svg"))
);
roubar.addEventListener(
  "click",
  (sumir = () => (imagem.src = "svg/lamp-roubar.svg"))
);
