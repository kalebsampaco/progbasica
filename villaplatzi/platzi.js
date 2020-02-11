/*var z;

for (var i = 0; i < 10; i++) {
	z = aleatorio(-5, 5);
	document.write(z + ", ");
}*/
var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGTH:39
};
document.addEventListener("keydown", dibujarTeclado);
var vp = document.getElementById('villaplatzi');
var papel = vp.getContext('2d');
var xc = aleatorio(0, 400);
var yc = aleatorio(0, 400);
fondo = {
	url:"tile.png",
	cargaOK: false
}
var vaca = {
	url:"vaca.png",
	cargaOK: false
};

var cerdo = {
	url:"cerdo.png",
	cargaOK: false
};

var pollo = {
	url:"pollo.png",
	cargaOK: false
};

var cant = aleatorio(5, 10);
fondo.imagen = new Image();
fondo.imagen.src = "tile.png";
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = "vaca.png";
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = "cerdo.png";
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = "pollo.png";
pollo.imagen.addEventListener("load", cargarPollo);

function cargarFondo() {
	fondo.cargaOK = true;
	dibujar();
}
function cargarVacas() {
	vaca.cargaOK = true;
	dibujar();
}

function cargarCerdo() {
	cerdo.cargaOK = true;
	dibujar();
}

function cargarPollo() {
	pollo.cargaOK = true;
	dibujar();
}
function dibujar() {
	if (fondo.cargaOK) 
	{
		papel.drawImage(fondo.imagen, 0, 0);
	}

	if (vaca.cargaOK) 
	{
		
		for (var i = 0; i < cant; i++) 
		{
			var x = aleatorio(0, 9);
			var y = aleatorio(0, 9);
			var x = x * 60;
			var y = y * 60;
			papel.drawImage(vaca.imagen, x, y);	
		}
		
	}

	if (pollo.cargaOK) 
	{
		for (var i = 0; i < cant; i++) 
		{
			var x = aleatorio(0, 7);
			var y = aleatorio(0, 7);
			var x = x * 40;
			var y = y * 40;
			papel.drawImage(pollo.imagen, x, y);
		}
		
	}
	if (cerdo.cargaOK) 
	{
		papel.drawImage(cerdo.imagen, xc, yc);
	}
	
}



function dibujarTeclado(evento) 
{
	var clr = "red";
		var movimiento = 1;
		console.log(evento.keyCode);
		switch(evento.keyCode)
		{
			
			case teclas.UP:
			console.log("arriba");
			papel.drawImage(cerdo.imagen, xc, yc);
			yc = yc - movimiento;
			break;
			case teclas.DOWN:
			console.log("abajo");
			papel.drawImage(cerdo.imagen, xc, yc);
			yc = yc + movimiento;
			break;
			case teclas.LEFT:
			console.log("izquierda");
			papel.drawImage(cerdo.imagen, xc, yc);
			xc = xc - movimiento;
			break;
			case teclas.RIGTH:
			console.log("derecha");
			papel.drawImage(cerdo.imagen, xc, yc);
			xc = xc + movimiento;
			break;
		}

		
}
/*
function dibujarVacas() {
	papel.drawImage(vaca, 10, 10);
}

function dibujarCerdo() {
	papel.drawImage(cerdo, 10, 300);
}

function dibujarPollo() {
	papel.drawImage(pollo, 300, 150);
}*/

function aleatorio(min, maxi) 
{
	var resultado;
	resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;	
}