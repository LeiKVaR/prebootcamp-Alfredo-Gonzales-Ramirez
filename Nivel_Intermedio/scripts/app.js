var formulario = document.getElementById("formulario");
var input = document.getElementById("saludo");
var contenedor = document.getElementById("contenedor");

function mostrarTexto(parar) {
    parar.preventDefault();
    contenedor.value = input.value;
}
formulario.addEventListener("submit", mostrarTexto);