//Variables globales para la EDO
var a="",b="",c="",d="";//   ay''+by'+cy=d
var raizone,raiztwo;
var  raizFir,raizSec,ee; 


//Variables de la solucion particular
			var Ya=0;
			var Yb=0;
			var Yc=0;
			
			var Ax="";//valores numericos del g(x) para A
			var Bx="";//valores numericos del g(x) para B
			var Cx="";//para lineal Cx sera sienpre cero



//variables para graficar
var Hse,Pse;// Hse(homogenea imaginaria,homegenea igual,homogenea diferente)  (1,2,3)
			//Pse(Particular lineal,Particular cuadratica,Particular Expotencial normal,
			// Paticular Expontencial superposicion , Particular trigonometrica,
			// Solo Particular ) (1,2,3,4,5,6)


//FIN VARIABLES GLOVALES
$(document).ready(function(){
        		$(".ejecutar").on("click",function(){
        			AsignarEdo();
        			CalFunHomojenea();
        			CalFunParticular();



        			//-_--------------------_>
        		(function mouse_drag(container) {
		              var
		                d1 = [],
		                d2 = [],
		                d3 = [],
		                options,
		                graph,
		                start,
		                i;
		                	/*
						for (i = -40; i < 40; i += 0.5) {
		                d1.push([i, Math.sin(i)+3*Math.cos(i)]);
		                d2.push([i, Math.pow(1.1, i)]);
		                //d3.push([i, 40 - i+Math.random()*10]);
		              	d3.push([i, Ya+Yb]);
		              }
		                	*/
			            if( Hse==1){
			              if( Pse==1){
			              	for (i = -40; i < 40; i += 0.5) {
			              		d3.push([i, ee*(Math.cos(raizSec*i)+Math.sin(raizSec*i)) + Ya*i+Yb]);
			              	}
			              }else if(Pse==2){
			              	for (i = -40; i < 40; i += 0.5) {
			              		d3.push([i, ee*(Math.cos(raizSec*i)+Math.sin(raizSec*i)) + Ya*i*i + Yb*i + Yc]);
			              	}
			              }else if(Pse==3){
			              	for (i = -40; i < 40; i += 0.5) {
			              		d3.push([i,ee*(Math.cos(raizSec*i)+Math.sin(raizSec*i)) + Ya*Math.pow(Math.E,Bx*i)]);
			              	}
			              }else if(Pse==4){
			              	for (i = -40; i < 40; i += 0.5) {
			              		d3.push([i, ee*(Math.cos(raizSec*i)+Math.sin(raizSec*i)) + Ya*i*Math.pow(Math.E,Bx*i) ]);
			              	}
			              }else if(Pse==5){
			              	for (i = -40; i < 40; i += 0.5) {
			              		d3.push([i, ee*(Math.cos(raizSec*i)+Math.sin(raizSec*i)) + Ya*Math.cos(i)+Yb*Math.sin(i)]);
			              	}
			              }else{
			              	for (i = -40; i < 40; i += 0.5) {
			              		d3.push([i, ee*(Math.cos(raizSec*i)+Math.sin(raizSec*i)) + Ya]);
			              	}
			              }
			          	}else if( Hse==2){
			          	  if( Pse==1){
			          	  	for (i = -40; i < 40; i += 0.5) {
			          	  		d3.push([i, Math.pow(Math.E,raizone*i) + i*Math.pow(raiztwo*i) + Ya*i+Yb]);
			              	}
			              }else if(Pse==2){
			              	for (i = -40; i < 40; i += 0.5) {
			              		d3.push([i, Math.pow(Math.E,raizone*i) + i*Math.pow(raiztwo*i) + Ya*i*i + Yb*i + Yc]);
			              	}
			              }else if(Pse==3){
			              	for (i = -40; i < 40; i += 0.5) {
			              		d3.push([i, Math.pow(Math.E,raizone*i) + i*Math.pow(raiztwo*i) + Ya*Math.pow(Math.E,Bx*i)]);
			              	}
			              }else if(Pse==4){
			              	for (i = -40; i < 40; i += 0.5) {
			              		d3.push([i, Math.pow(Math.E,raizone*i) + i*Math.pow(raiztwo*i) + Ya*i*Math.pow(Math.E,Bx*i) ]);
			              	}
			              }else if(Pse==5){
			              	for (i = -40; i < 40; i += 0.5) {
			              		d3.push([i, Math.pow(Math.E,raizone*i) + i*Math.pow(raiztwo*i) + Ya*Math.cos(i)+Yb*Math.sin(i)]);
			              	}
			              }else{
			              	for (i = -40; i < 40; i += 0.5) {
			              		d3.push([i, Math.pow(Math.E,raizone*i) + i*Math.pow(raiztwo*i) + Ya]);
			              	}
			              }
			          	}else{
			          	  if( Pse==1){
			          	  	for (i = -40; i < 40; i += 0.5) {
			          	  		d3.push([i, Math.pow(Math.E,raizone*i)+Math.pow(Math.E,raizone*i) + Ya*i+Yb]);
			              	}
			              }else if(Pse==2){
			              	for (i = -40; i < 40; i += 0.5) {
			              		d3.push([i, Math.pow(Math.E,raizone*i)+Math.pow(Math.E,raizone*i) + Ya*i*i + Yb*i + Yc]);
			              	}
			              }else if(Pse==3){
			              	for (i = -40; i < 40; i += 0.5) {
			              		d3.push([i, Math.pow(Math.E,raizone*i)+Math.pow(Math.E,raizone*i) + Ya*Math.pow(Math.E,Bx*i)]);
			              	}
			              }else if(Pse==4){
			              	for (i = -40; i < 40; i += 0.5) {
			              		d3.push([i, Math.pow(Math.E,raizone*i)+Math.pow(Math.E,raizone*i) + Ya*i*Math.pow(Math.E,Bx*i) ]);
			              	}
			              }else if(Pse==5){
			              	for (i = -40; i < 40; i += 0.5) {
			              		d3.push([i, Math.pow(Math.E,raizone*i)+Math.pow(Math.E,raizone*i) + Ya*Math.cos(i)+Yb*Math.sin(i)]);
			              	}
			              }else{
			              	for (i = -40; i < 40; i += 0.5) {
			              		d3.push([i, Math.pow(Math.E,raizone*i)+Math.pow(Math.E,raizone*i) + Ya]);
			              	}
			              }
			          	}
			                  
			              options = {
			                xaxis: {min: 0, max: 20},
			                  title : 'EDO'
			              };

			              // Draw graph with default options, overwriting with passed options
			              function drawGraph (opts) {

			                // Clone the options, so the 'options' variable always keeps intact.
			                var o = Flotr._.extend(Flotr._.clone(options), opts || {});

			                // Return a new graph.
			                return Flotr.draw(
			                  container,
			                  [ d1, d2, d3 ],
			                  o
			                );
			              }

			              graph = drawGraph();      

			              function initializeDrag (e) {
			                start = graph.getEventPosition(e);
			                Flotr.EventAdapter.observe(document, 'mousemove', move);
			                Flotr.EventAdapter.observe(document, 'mouseup', stopDrag);
			              }

			              function move (e) {
			                var
			                  end     = graph.getEventPosition(e),
			                  xaxis   = graph.axes.x,
			                  offset  = start.x - end.x;

			                graph = drawGraph({
			                  xaxis : {
			                    min : xaxis.min + offset,
			                    max : xaxis.max + offset
			                  }
			                });
			                // @todo: refector initEvents in order not to remove other observed events
			                Flotr.EventAdapter.observe(graph.overlay, 'mousedown', initializeDrag);
			              }

			              function stopDrag () {
			                Flotr.EventAdapter.stopObserving(document, 'mousemove', move);
			              }

			              Flotr.EventAdapter.observe(graph.overlay, 'mousedown', initializeDrag);

			            })(document.getElementById("grafico"));
            
					});//--->fin grafico
});




function AsignarEdo(){
	var elem = $(".immain").val();//tomando el valor del imput
	var cont=1;//contador para adsignar valores a A,B,C,D
	
		//OBTENIENDO DATOS PARA ay''+by'+cy=d  ---------------->
	var i = 0;
	var paraA=1;//si existe
	while( elem[i]!="y" && cont==1){
		a+=elem[i];
		i++;
		paraA++;
	}
			if(paraA==1){
				a=1;
			}
			a=parseInt(a);			
			cont++;
			i+=3;//como es de segundo orden ''
	//Buscando "B"
	while( elem[i]!="y" && cont==2){
		if(elem[i]!="+"){
			b+=elem[i];
			i++;
			
		}else{
			i++;
		
		}
	}			
			b=parseInt(b);
			cont++;
			i+=2;// primer orden '
	//Buscando "C"
	while( elem[i]!="y" && cont==3){
		if(elem[i]!="+"){
			c+=elem[i];
			i++;			
		}else{
			i++;
			
		}
	}		
			c=parseInt(c);			
			cont++;
			i++;
	//BUscando "D"
	
	while( elem[i]!="="){
		i++;
	}
		i++;//despues del "="
		for(i;i<elem.length;i++){
			d+=elem[i];
		}
//OBJETIVO : asignar los 4 valores para desarrollar la EDO	
}

function CalFunHomojenea(){
	
	//si es que "a" es diferente de 1 tendremos que darle forma a una EDO
	if(a!=1){
		b=b/a;
		c=c/a;
		d=d/a;
		a=1;
	}//ya tenemos en fomar de EDO
	
	
	//OPERACION ECUACION CARACTERISTICA----->
	
	if( (b*b-4*c) < 0 ){//para raices imaginarias-->
		Hse=1;//variable grafico
		  //m = alfa +- beta I(imaginarios)   y  ee = base logaritmo eniperiano
		raizFir = -b/2;       // m = alfa 
		raizSec = Math.sqrt((4*c)-(b*b))/2; // m = beta
		raizone = Math.cos(raizSec);//valores flotantes
		raiztwo = Math.sin(raizSec);//valores flotantes 
		ee=Math.pow(Math.E,raizFir);// base de logaritmo eniperaciona ala alfa
		
		console.log("Yh = "+ee+"( C1 cos"+raizSec+"x + C2 sin"+ raizSec+"x )");
		$(".homogenea").text("Yh = "+ee+"( C1 cos"+raizSec+"x + C2 sin"+ raizSec+"x )");
	}else{
		raizone = ((-b)+Math.sqrt((b*b)-(4*c)))/2;
		raiztwo = ((-b)-Math.sqrt((b*b)-(4*c)))/2;
		if(raizone==raiztwo){//raices iguales--->
			Hse=2;//variable grafico
			console.log("Yh = "+" C1 e^"+raizone+"x + C2 X e^"+raiztwo+"x");
			$(".homogenea").text("Yh = "+" C1 e^"+raizone+"x + C2 X e^"+raiztwo+"x");
		}else{//raices diferentes--->
			Hse=3;//variable grafico
			if(raizone>=raiztwo){
				console.log("Yh = "+" C1 e^"+raizone+"x + C2 e^"+raiztwo+"x");
				$(".homogenea").text("Yh = "+" C1 e^"+raizone+"x + C2 e^"+raiztwo+"x");
			}else{
				console.log("Yh = "+" C1 e^"+raiztwo+"x + C2 e^"+raizone+"x");
				$(".homogenea").text("Yh = "+" C1 e^"+raiztwo+"x + C2 e^"+raizone+"x");
			}
			
		}
	}
	//Se obtubo las dos raizes
	//probando con y''+0y'-16y  =>  Yh=C1 e^4x + C2 e^-4x
}

function CalFunParticular(){
	//buscar e identificar que forma tiene el g(x)
	var caso=0;// identificar que g(x)
	var trigo="";// variable para identificar si g(x) es "sin" "cos" 
	for(var j=0;j<d.length;j++){
		if(d[j]=="x" && d[j+1]!="^"){//cuando es "x" y si despues no encuentre nada
			console.log("el g(x) es lineal");
			caso=1;
			break;
		}else if(d[j]=="x" && d[j+1]=="^" && d[j+2]=="2"){
			console.log("el g(x) es cuadritica");
			caso=2;
			break;
		}else if(d[j]=="e"){
			console.log("el g(x) es espontencial");
			caso=3;
			break;
		}else if(d[j]=="s" ||d[j]=="c" ||d[j]=="t"){
			console.log("el g(x) es trigonometrica");
			caso=4;
			trigo=d[j];
			break;
		}
	}
	if(caso==0){
		console.log("es solo A (numero)");
		caso=5;
	}
	//ya sabemos que tipo de G(x) es hacemos un switch para cada caso
	switch(caso){
		case 1://cuando es lineal  Yp=Ax+B
				Pse=1;//variable grafico
				var i=0;
				for(i;d[i]!="x";i++){//hayando A-->
					Ax+=d[i];
				}
				/*while(d[i]!="x"){//hayando A-->
					Ax+=d[i];
					i++;
				}*/
				Ax=parseInt(Ax);//pasando a entero
				i++;//despues del "x"
				for(i;d[i]!=null;i++){//hayando b-->
					Bx+=d[i];
				}
				Bx=parseInt(Bx);//pasando a entero
				
				//OBTUBIMOS el valor de Ax y Bx de "d"
				/*
				Como Yp=Ax+b  , Yp'=A    y     Yp''=0
				entonces para resolver "c" multiplica a Yp y "b" multiplica a Yp' nos quedaria algo asi
				c.(Ax."x"+b) + b(A) = Ax."x" + Bx haciendo un analiziz
				a = Ax / c    ; b=  (Bx-a)/c  --> Despues se le da forma Yp = ax+b

				en la forma de las variables que asignamos es Yp= Yax + Yb
		 
				Probado con y'' + 1y' -6y = 2x+0 
				*/
				Ya= Ax/c;
				Yb= (Bx - B*Ya)/c;
				console.log("Yp = "+Ya+"x "+ Yb);
				$(".particular").text("Yp = "+Ya+"x "+ Yb);
			
			break;
		case 2://cuando es cuadratica Yp=Ax^2 + Bx + c			
				Pse=2;
				var i=0;

				for(i;d[i]!="x";i++){//hayando A-->
					Ax+=d[i];
				}

				
				if(Ax==" "||Ax=="  "||Ax=="   "||Ax=="    "){
					Ax="1";
					Ax=parseInt(Ax);//pasando a entero
				}
				Ax=parseInt(Ax);
				

				i+=3;//son 3 espacios que se abansa el mismo , el "^" y el "2"

				for(i;d[i]!="x";i++){//hayando b-->
					Bx+=d[i];
				}
				i++;//se abansa un espacio 
				Bx=parseInt(Bx);//pasando a entero

				for(i;d[i]!=null;i++){//hayando c-->
					Cx+=d[i];
				}
				Cx=parseInt(Cx);
				
				//OBTUBIMOS el valor de Ax , Bx y Cx de "d"
				/*
				Como Yp=Ax^2 +bx + c  , Yp'=2Ax+b    y     Yp''=2A
				entonces para resolver "c" multiplica a Yp y  "b" multiplica a Yp'  haciendo un analiziz
				a = Ax / c    ; b=  (Bx-2a)/c  ;c= ( Cx - 2*A - b*B )/ 2 --> Despues se le da forma Yp = Ax^2 +bx + c

				en la forma de las variables que asignamos es Yp= Yax^2 +Ybx + Yc
				
				Probado con y'' + 0y' +1y = 3x^2+0x +1
				*/
				Ya= Ax/c;
				Yb= (Bx-b*2*Ya)/Cx;
				Yc= ( Cx - b*Yb - 2*Ya)/c;

				console.log("Yp = "+Ya+"x^2 "+ Yb+"x "+Yc);
				$(".particular").text("Yp = "+Ya+"x^2 + "+ Yb+"x "+Yc);
			break;
		case 3://cuando es expontecial Yp= Ax"e"^Bx*"x"
				
				var i=0;

				for(i;d[i]!="e";i++){//hayando Ax-->
					Ax+=d[i];
				}
				Ax=parseInt(Ax);
				i+=2;
				for(i;d[i]!="x";i++){//hayando Bx-->
					Bx+=d[i];
				}
				Bx=parseInt(Bx);
				//OBTUBIMOS LOS VALORES DE Ax y Bx
				if( (Bx*Bx + c)==0 ){//verificamos si existe superpocicion
					//si se cumple esta condicion esporque hay superpoccion entonces
					//Yp= Ax"x""e"^Bx"x" || solo sirve cuando b=0
					Pse=4;//variable grafico
					Ya=(1/Bx);
					console.log("Yp = "+Ya+"xe^"+Bx+"x");
					$(".particular").text("Yp = "+Ya+"xe^"+Bx+"x");
					//probado con 1y''+0y'-25y=2e^5x
					//probado con 1y''+0y'-16y=2e^4x
				}else{   // no tiene superpocicion
					Pse=3;//variable grafico
					Ya=(Ax/(Bx*Bx+b*Bx+c));
					console.log("Yp = "+Ya+"e^"+Bx+"x");
					$(".particular").text("Yp = "+Ya+"e^"+Bx+"x");
					//probado con 1y''+0y'-35y=2e^6x
				}
			break;
		case 4://cuando es tringonometrica Yp= Acox + Bsenx
				//limitacion solo de esta forma Gx = "var""sen,cos,tan,sec,csc""x"
				Pse=5//variable grafico
				var i=0;


				if(trigo == "s"){//"s" representa cuando es seno
					for(i;d[i]!="s";i++){//hayando Ax-->
						Ax+=d[i];
						Ax=parseInt(Ax);
					}
					//OBTUBIMOS Ax 
					Ya= (b*Ax)/(-1*b*b -1*c*c +c+c-1);
					Yb= (Ya-c*Ya)/b;
					console.log("Yp = "+Ya+"cosx + "+Yb+"senx");
					$(".particular").text("Yp = "+Ya+"cosx + "+Yb+"senx");
					//PROBADO CON 1y''+1y'+2y=10senx
				}else{//si no cumple "s"(seno) entonces sera coceno
					for(i;d[i]!="c";i++){
						Ax+=d[i];
						Ax=parseInt(Ax);
					}
					//OBTUBIMOS Ax
					Ya= (Ax*c-Ax)/(c*c-c-c+1+b*b);
					Yb= (b*Ya)/(c-1);
					console.log("Yp = "+Ya+"cosx + "+Yb+"senx");
					$(".particular").text("Yp = "+Ya+"cosx + "+Yb+"senx");
					//PROBADO CON 1y''+1y'+2y=10cosx
				}
			break;
		case 5://solo Yp=A
				Pse=6;//variable grafico
				var i=0;

				for(i;d[i]!=null;i++){
					Ax+=d[i];
				}
				Ax=parseInt(Ax);
				//OBTUBIMOS Ax
				Ya=Ax/c;
				console.log("Yp = " + Ya);
				$(".particular").text("Yp = " + Ya);
			break;
	}
}
