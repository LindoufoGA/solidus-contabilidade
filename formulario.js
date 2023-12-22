const formulario = document.querySelector("form");

function enviarFormulario(event) {
  event.preventDefault();
  let botao = document.querySelector("btn-form");
  botao.innerHTML = "Enviando...";
}

formulario.addEventListener("submit", enviarFormulario);
