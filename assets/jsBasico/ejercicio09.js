let ciudad = prompt("Ingresa la ciudad");

switch (ciudad) {
  case "bogota":
    alert("catalogo disponible");
    break;

  case "medellin":
    alert("catalogo disponible");
    break;

  default:
    break;
}
if (ciudad === "bogota" || ciudad === "pasto") {
  alert("ciudad de clima frio");
} else {
  if (ciudad === "armenia" || ciudad === "medellin") {
    alert("ciudad de clima templado");
  } else {
    alert("ciudad ingresada no valida");
  }
}
