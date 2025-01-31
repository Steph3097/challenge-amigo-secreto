// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
  let getInput= document.getElementById("amigo");
  let getInputValue = getInput.value;
  let getList = document.getElementById("listaAmigos");

  if (getInputValue !== "") {
    listaAmigos.push(getInputValue);
    const mostrarAmigos = document.createElement("li");
    mostrarAmigos.textContent = getInputValue;
    getList.appendChild(mostrarAmigos);
    getInput.value = "";
  } else {
    alert("Debes ingresar un nombre");
  }
}

function sortearAmigo() {
  let resultado;
  if (listaAmigos.length <= 2) {
    alert("Debes agregar amigos para sortear");
  } else {
    const sorteoAmigo = Math.floor(Math.random() * listaAmigos.length);
    resultado = listaAmigos[sorteoAmigo];
    document.getElementById("resultado").textContent = `El amigo es: ${resultado}`;
  }
}
