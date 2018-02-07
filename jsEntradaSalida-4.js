/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostrar()
{
	var nombre;

	nombre=prompt("Ingresa tu nombre wachin");
	//Aca estoy haciendo al reves, al valor del cuado de dielogo le asigno 
	//el contenido de la variable nombre.
	document.getElementById("elNombre").value=nombre;
	
}

