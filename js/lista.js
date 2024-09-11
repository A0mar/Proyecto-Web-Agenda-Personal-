//Autor Omar, Pablo, Ignacio
var inputTarea = document.getElementById("tarea");
var boton = document.getElementById("agregar");
var listado = document.getElementById("listado");
var cantidad = document.getElementById("cantidad");


var total = 0;

boton.onclick = function() {
  
    if (inputTarea.value == "") {
        return;
    }
    var elemento = inputTarea.value;

    var li = document.createElement("li");

    li.textContent = elemento;

    listado.appendChild(li);

    total++;
    cantidad.innerHTML = total;


    var botonEliminar = document.createElement("span");
    botonEliminar.textContent = "\u00d7";
    li.appendChild(botonEliminar);


    botonEliminar.onclick = function() {
        li.remove();
        total--;
        cantidad.innerHTML = total;
    }

    inputTarea.value = "";

}