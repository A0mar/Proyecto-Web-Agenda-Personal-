//Autor Omar, Pablo, Ignacio
var calendario = document.getElementById("calendario");
var sema_dia = document.getElementById("sema_dia");
var fecha = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",];

var mes = prompt("Indica un mes del año");
if (fecha.includes(mes)) {
  calendario.innerHTML = "Mes: " + mes;
} else {
  alert("El valor introducido no es un mes válido");
}

var num_semana = parseInt(prompt("Indica una semana del 1 al 4"));
switch (num_semana) {
  case 1:
    sema_dia.innerHTML = "Semana: " + num_semana + ",días del: 1 al 7";
    break;
  case 2:
    sema_dia.innerHTML = "Semana: " + num_semana + ",días del: 8 al 14";
    break;
  case 3:
    sema_dia.innerHTML = "Semana: " + num_semana + ",días del: 15 al 21";
    break;
  case 4:
    sema_dia.innerHTML = "Semana: " + num_semana + ",días del: 22 al 31";
    break;
  default:
    alert("El valor introducido no es una semana válida");
    break;
}


