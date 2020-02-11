var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGTH:39
};

document.addEventListener("keydown", dibujarTeclado); /*crea in listener en document para el teclado*/
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;


dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xi, yi, xf, yf, lienzo)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 3;
	lienzo.moveTo(xi, yi);
	lienzo.lineTo(xf, yf);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujarTeclado(evento)/*funcion que veriica el evento*/
{
	
	var clr = "red";
	var movimiento = 1;
	switch(evento.keyCode)
	{
		
		case teclas.UP:
		console.log("arriba");
		dibujarLinea(clr, x, y, x, y - movimiento, papel);
		y = y -movimiento;
		break;
		case teclas.DOWN:
		console.log("abajo");
		dibujarLinea(clr, x, y, x, y + movimiento, papel);
		y = y + movimiento;
		break;
		case teclas.LEFT:
		console.log("izquierda");
		dibujarLinea(clr, x, y, x - movimiento, y, papel);
		x = x - movimiento;
		break;
		case teclas.RIGTH:
		console.log("derecha");
		dibujarLinea(clr, x, y, x + movimiento, y, papel);
		x = x + movimiento;
		break;
	}
}