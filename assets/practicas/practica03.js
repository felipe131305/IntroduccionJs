let ejecutar = document.getElementById("btnDatos");
let nombreUsuario = document.getElementById("nombreUsuario");
let edadUsuario = document.getElementById("edadUsuario");
let direccionUsuario = document.getElementById("direccionUsuario");
let telefonoUsuario = document.getElementById("telefonoUsuario");
let documentoUsuario = document.getElementById("documentoUsuario");

const cambiarDatos = () => {
  let nombre = prompt("Ingresa tu nombre");
  let edad = prompt("Ingresa tu edad");
  let direccion = prompt("Ingresa tu direccion");
  let telefono = prompt("Ingresa tu telefono");
  let documento = prompt("Ingresa tu documento");
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("edad", edad);
  localStorage.setItem("direccion", direccion);
  localStorage.setItem("telefono", telefono);
  localStorage.setItem("documento", documento);
  nombreUsuario.innerHTML = "Nombre: " + nombre;
  edadUsuario.innerHTML = "Edad: " + edad;
  direccionUsuario.innerHTML = "Direccion: " + direccion;
  telefonoUsuario.innerHTML = "Telefono: " + telefono;
  documentoUsuario.innerHTML = "Documento: " + documento;
};

if (
  localStorage.getItem("nombre") ||
  localStorage.getItem("edad") ||
  localStorage.getItem("direccion") ||
  localStorage.getItem("telefono") ||
  localStorage.getItem("documento")
) {
  nombreUsuario.innerHTML = "Nombre:" + localStorage.getItem("nombre");
  edadUsuario.innerHTML = "Edad: " + localStorage.getItem("edad");
  direccionUsuario.innerHTML =
    "Direccion: " + localStorage.getItem("direccion");
  telefonoUsuario.innerHTML = "Telefono: " + localStorage.getItem("telefono");
  documentoUsuario.innerHTML = "Documento:" + localStorage.getItem("documento");
} else {
}

// Eventos siempre al final
ejecutar.onclick = function () {
  cambiarDatos();
};
