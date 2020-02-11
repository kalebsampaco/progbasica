
class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image();
	this.imagen.src = imagenes[this.valor];
  }

  mostrar()
	{
		"<br />";
		document.body.appendChild(this.imagen)  + "<br />";
		 "<br />";
		 setTimeout("location.reload(true);",10000);
	}

}

function entregarDinero()
	{
	  var t = document.getElementById("dinero");
	  dinero = parseInt(t.value);
			  for(var bi of caja)
			  {

				    if(dinero > 0)
				    {
				      div = Math.floor(dinero / bi.valor);

				      if(div > bi.cantidad)
				      {
				        papeles = bi.cantidad;
				      }
				      else
				      {
				        papeles = div;
				      }

				      entregado.push( new Billete(bi.valor, papeles) );
				      dinero = dinero - (bi.valor * papeles);
				      bi.cantidad = bi.cantidad - papeles;
				    }
				     
			  }

			  if(dinero > 0)
			  {
			    resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";
			  }
			  else
			  {
			    for(var e of entregado)
			    {

			    
			      if(e.cantidad > 0)
			      {
			      							
						resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
						for  ( var i = 0; i < e.cantidad; i++){
						"<br />";
						 e.mostrar();
						 "<br />";
						}
						 	
						 
						 
			      }

			    
			      
			    }
			  }
	}

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);