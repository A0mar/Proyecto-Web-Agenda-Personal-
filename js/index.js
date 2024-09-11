//Autor Omar, Pablo, Ignacio
function ValFormIndex() {
	let mes = document.getElementById("mes").value;

	if (mes == "ene" || mes == "Ene" || mes == "enero" || mes == "Enero") {
			
	} else if (mes == "feb" || mes == "Feb" || mes == "febrero" || mes == "Febrero"){
			
	} else if (mes == "mar" || mes == "Mar" || mes == "marzo" || mes == "Marzo"){
			
	} else if (mes == "abr" || mes == "Abr" || mes == "abril" || mes == "Abril"){
			
	} else if (mes == "may" || mes == "May" || mes == "mayo" || mes == "Mayo"){
			
	} else if (mes == "jun" || mes == "Jun" || mes == "junio" || mes == "Junio"){
			
	} else if (mes == "jul" || mes == "Jul" || mes == "julio" || mes == "Julio"){
			
	} else if (mes == "ago" || mes == "Ago" || mes == "agosto" || mes == "Agosto"){
			
	} else if (mes == "sep" || mes == "Sep" || mes == "septiembre" || mes == "Septiembre"){
			
	} else if (mes == "oct" || mes == "Oct" || mes == "octubre" || mes == "Octubre"){
			
	} else if (mes == "nov" || mes == "Nov" || mes == "noviembre" || mes == "Noviembre"){
			
	} else if (mes == "dic" || mes == "Dic" || mes == "diciembre" || mes == "Diciembre"){
			
	} else if (mes == ""){
			alert("Se seleccionara el mes actual");
	} else {
			alert("El mes no coincide");
			
	}

	var regex = /\b(?!arma|sexo)\w+\.(com|es|edu)\b/;
	var textFieldValue = document.getElementById('enlace').value;

	if (regex.test(textFieldValue)) {
		
	} else if (textFieldValue == "") {

	} else {
		alert('El valor del campo enlaces no es válido.');
	}
}