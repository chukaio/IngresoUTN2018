/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    //Declaracion de variables
    var stringUno, stringDos, numeroUno, numeroDos, resultado;
    //Asignacion de variables
    stringUno=document.getElementById("numeroUno").value;
    stringDos=document.getElementById("numeroDos").value;
    //Conversion de string a int y resultado
    numeroUno=parseInt(stringUno,10);
    numeroDos=parseInt(stringDos,10);
    resultado=numeroUno + numeroDos;
    
    alert("La suma es " + resultado + ".");



}

