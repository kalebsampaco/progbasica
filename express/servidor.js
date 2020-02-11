var cafecito = require("express");

var aplicacion = cafecito();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado)
{
		resultado.send("<strong>este es el home genial </strong>");
}

function cursos(peticion, resultado)
{
		resultado.send("<strong>estos son los cursos </strong>");
}

aplicacion.listen(8989);