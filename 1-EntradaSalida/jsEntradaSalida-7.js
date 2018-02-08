/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var num1, num2, res;

    num1=parseInt(document.getElementById("numeroUno").value);
    num2=parseInt(document.getElementById("numeroDos").value);
    res=num1+num2;
    alert("El resultado de la suma es " + res + ".");

	
}

function restar()
{
    var num1, num2, res;

    num1=parseInt(document.getElementById("numeroUno").value);
    num2=parseInt(document.getElementById("numeroDos").value);
    res=num1-num2;
    alert("El resultado de la resta es " + res + ".");
	
}

function multiplicar()
{ 
    var num1, num2, res;

    num1=parseInt(document.getElementById("numeroUno").value);
    num2=parseInt(document.getElementById("numeroDos").value);
    res=num1*num2;
    alert("El resultado de la multiplicacion es " + res + ".");
	
}

function dividir()
{
    var num1, num2, entero, decimal;

    num1=parseInt(document.getElementById("numeroUno").value);
    num2=parseInt(document.getElementById("numeroDos").value);
    entero=num1/num2;
    //decimal=num1%num2;

    alert("El resultado de la division es " + entero + ".");
	
}

