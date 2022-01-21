let dia = prompt("Ingrese un dia de la semana").toLocaleLowerCase();

if (
  dia === "lunes" ||
  dia === "martes" ||
  dia === "miercoles" ||
  dia === "jueves" ||
  dia === "viernes"
) {
  alert("es un dia entre semana");
} else {
  if (dia === "sabado" || dia === "domingo"|| dia ===sábado) {
    alert("es un dia del fin de semana");
  } else {
    alert("por favor solo ingrese dias de la semana");
  }
}
