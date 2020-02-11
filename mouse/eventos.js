

document.addEventListener("mousemove", dibujarMouseMove);
//document.addEventListener("mousedown", dibujarMouseDown);
//document.addEventListener("mouseup", dibujarMouseUp); /*crea in listener en window para el mouse*/
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var	UP = "mouseup";
var	DOWN = "mousedown";
var MOVE = "mousemove";
var BUTTON = 1;

var clr = "red"
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

function dibujarMouseMove(evento)
{
	if (evento.buttons == BUTTON) {
		var xi = evento.clientX - 1;
        var yi = evento.clientY - 1;
        var xf = xi + 1;
        var yf = yi + 1;
        dibujarLinea("red",xi,yi,xf,yf,papel);
        console.log(evento.buttons);
    }
    /*var xi = evento.clientX;
	var yi = evento.clientY;

	dibujarLinea(clr, xi-1, yi-1, xi, yi, papel);*/
}

/*function dibujarMouseUp(evento)
{
	var xi = evento.clientX;
	var yi = evento.clientY;
	
	dibujarLinea(clr, xi-1, yi-1, xi+1, yi+1, papel);
	
}

function dibujarMouseDown(evento)
{
	var xi = evento.clientX;
	var yi = evento.clientY;
	
	dibujarLinea(clr, xi-1, yi-1, xi+1, yi+1, papel);
	

}*/
