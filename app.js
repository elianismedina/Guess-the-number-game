let numeroSecreto = 0;
let intentos = 0;
let listadoNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerText = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  console.log(intentos);

  if (numeroDeUsuario == numeroSecreto) {
    asignarTextoElemento(
      "label",
      `¡Felicidades! Has adivinado el número secreto en ${intentos} ${
        intentos == 1 ? "intento" : "intentos"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("label", "El número secreto es menor");
    } else {
      asignarTextoElemento("label", "El número secreto es mayor");
    }
    intentos++;
    limpiar();
  }
  return;
}

function limpiar() {
  document.querySelector("#valorUsuario").value = "";
  return;
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log("numeroGenerado", numeroGenerado);
  console.log("listadoNumerosSorteados", listadoNumerosSorteados);

  if (listadoNumerosSorteados.length >= numeroMaximo) {
    asignarTextoElemento(
      "label",
      "Se han agotado los números disponibles, reinicia el juego"
    );
  } else {
    if (listadoNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listadoNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("label", "Indica un número del 1 al 10");
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  return;
}

function reiniciarJuego() {
  limpiar();
  condicionesIniciales();
  document.getElementById("reiniciar").setAttribute("disabled", "true");
  return;
}

condicionesIniciales();
