// Local Storage

let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");

const cambiarNombre = () => {
  let nombre = prompt("Ingresa tu nombre");
  nombreUsuario.innerHTML = "Bienvenido :" + nombre;
  localStorage.setItem("nombre", nombre);
};

if (localStorage.getItem("nombre")) {
  nombreUsuario.innerHTML = "Bienvenido :" + localStorage.getItem("nombre");
} else {
}

// Eventos siempre al final
ejecutar.onclick = function () {
  cambiarNombre();
};
