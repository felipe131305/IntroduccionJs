// DOM
let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");

const cambiarNombre = () => {
  let nombre = prompt("Ingresa tu nombre");
  nombreUsuario.innerHTML = "Bienvenido :" + nombre;
  console.log(nombre)
};

// Eventos siempre al final
ejecutar.onclick = function () {
  cambiarNombre();
};
