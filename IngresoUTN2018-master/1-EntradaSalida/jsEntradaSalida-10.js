/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
	var precio;
    var descuento;
    var precioFinal;

    precio = parseFloat(document.getElementById("importe").value);

    descuento = precio * 0.25;

    precioFinal = precio - descuento;

    document.getElementById("resultado").value = precioFinal.toFixed(2);
}
