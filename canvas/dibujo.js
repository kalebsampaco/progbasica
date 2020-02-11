var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");

boton.addEventListener("click", dibujoPorClick);
var ancho = d.width;
/*while(l < lineas)
{
	yi = 10 * l;
	xf = 10 * (l + 1);
	dibujarLinea("#627F9A", 0, yi, xf, 300);
	console.log("Linea" + l);
	l++;
}*/
/*for(l = 0; l < lineas; l++)
{
	yi = 10 * l;
	xf = 10 * (l + 1);
	dibujarLinea("#627F9A", 0, yi, xf, 300);
	console.log("Linea" + l);
	
}*/
function dibujarLinea(color, xi, yi, xf, yf)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xi, yi);
	lienzo.lineTo(xf, yf);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujoPorClick()
{

	var x = parseInt(texto.value);
	var espacio = ancho / x;
		for(var l = 0; l < x; l++)
	{
		var yi = espacio * l;
		var xf = espacio * (l + 1);
		dibujarLinea("blue", 0, yi, xf, 300);
		console.log("Linea" + l);
		
	}

	for(var l = 0; l < x; l++)
	{
		var xi = espacio * l;
		var yf = espacio * (l + 1);
		dibujarLinea("red", xi, 0, 300, yf);
		console.log("Linea" + l);
		
	}

	for(var l = 0; l < x; l++)
	{
		var yi = espacio * l;
		var xf = ancho - (espacio * l);
		dibujarLinea("yellow", 300, yi, xf, 300);
		console.log("Linea" + l);
		
	}
	for(var l = 0; l < x; l++)
	{
		var yf = espacio + (espacio * l);
		var xi = ancho - (l * espacio);
		dibujarLinea("green", xi, 0, 0, yf);
		console.log("Linea" + l);
		
	}

	dibujarLinea("red", 1, 1, 1, 300);
	dibujarLinea("red", 1, 299, 299, 299);



	dibujarLinea("red", 1, 1, 300, 1);
	dibujarLinea("red", 299, 1, 299, 299);

}