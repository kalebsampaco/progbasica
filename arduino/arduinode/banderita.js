var cinco = require("johnny-five");
var circuito = new cinco.Board();
var bombillo, motor, celda;
var turno = 0;

circuito.on("ready", prender);

function prender() 
{
	var configuracion = {pin:"A0", freq: 50};
	celda = new cinco.Sensor(configuracion);
	bombillo = new cinco.Led(13);
	bombillo.on();

	motor = new cinco.Servo(9);
	motor.to(90);

	ondear()
	
}

function ondear()
{

	console.log("Luz " + celda.value)
	var luz = celda.value;
	if (luz > 800) 
	{
		if(turno == 1)
		{
			turno = 0;
			motor.to(70);
		}else
		{
			turno = 1;
			motor.to(100);
		}
	}
	else
	{
		motor.to(30);
	}
	setTimeOut(ondear, 1000);
}