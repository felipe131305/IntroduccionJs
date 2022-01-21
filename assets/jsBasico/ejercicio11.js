// DOM
let ejecutar = document.getElementById("btnEjecutar");

const cambiarNombre = () => {
  let nombre = prompt("Ingresa tu nombre");
  alert("tu nombre es " + nombre);
};

// Eventos siempre al final
ejecutar.onclick = function () {
  cambiarNombre();
};
