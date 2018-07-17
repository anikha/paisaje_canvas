 var frame=window.requestAnimationFrame||
		  window.mozRequedAnimationFrame||
		  window.webkitRequestAnimationFrame||
		  window.msRequesAnimationFrame;

var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext('2d');                         
//=======IMAGEN 6======
var sprite=new Image();
sprite.src="img/opcion3.png";
var numero2=0;
var ubicacionx =0;
/*var varmovimiento= new Object({
numero3:0;
ubicacionxxo3:0;
})
numero3:0;
ubicacionxxo3:0;*/
var numero3=0;
var ubicacion1=0;
function movimiento(){
	if(numero2>=918) {numero2=0}else{numero2+=10}
		for (var i = 0; i <= numero2; i+=160) {
			if(numero2>=i) {ubicacionx=i}
		}
	if(numero3>=1000) {numero3=0}else{numero3+=5}
		for (var a = 0; a <= numero3; a+=10) {
			if(numero3>=a) {ubicacion1=a}
		}
	//ctx.draw(imagen, x1,y1,recortex, recortey,x2,xy2);
ctx.clearRect(ubicacion1,100,100,100);

//=============================================
//					CIELO1
//=============================================
var objeto1=new Object({
	color:"blue",
	//color:"white",
	valorx:0,
	valory:0,
	ancho:1000,
	alto:500
})
ctx.fillStyle=objeto1.color;
//ctx.fillStyle=objeto1.color1;
//ctx.fillrect(x,y,x1,y2);
ctx.fillRect(objeto1.valorx,objeto1.valory,objeto1.ancho,objeto1.alto);

//=============================================
//					rio
//=============================================
var objeto1=new Object({
	color:"cyan",
	color1:"white",
	valorx:0,
	valory:400,
	ancho:1000,
	alto:200
})
//ctx.fillrect(x,y,x1,y2);
ctx.beginPath();
ctx.fillStyle=objeto1.color,objeto1.color1;
ctx.moveTo(objeto1.valorx,objeto1.valory);
ctx.lineTo(objeto1.ancho,objeto1.alto);
ctx.fill();

/*var grd = ctx.createLinearGradient(400,400,400,500);
grd.addColorStop(0,"cyan");
grd.addColorStop(1,"white");
ctx.fillStyle=grd;
ctx.fillRect(0,400,1000,200);*/
//=============================================
//					MONTAÑA 1
//=============================================
var objeto1={
	color:"palevioletred",
	valorx:0,
	valory:400,
	base:200,
	ancho:100,
	alto:400,
	alto2:400
}
ctx.beginPath();
ctx.fillStyle = objeto1.color; //a(100,0,255,100)';
ctx.moveTo(objeto1.valorx,objeto1.valory);
ctx.lineTo(objeto1.base,objeto1.ancho);
ctx.lineTo(objeto1.alto,objeto1.alto2);
ctx.fill();
//=============================================
//					MONTAÑA 2
//=============================================
ctx.beginPath();
ctx.fillStyle = "indigo"; //a(100,0,255,100)';
ctx.moveTo(200,400);
ctx.lineTo(400,100);
ctx.lineTo(600,400);
ctx.fill();
//=============================================
//					MONTAÑA 3
//=============================================
ctx.beginPath();
ctx.fillStyle = "purple"; //a(100,0,255,100)';
ctx.moveTo(400,400);
ctx.lineTo(600,100);
ctx.lineTo(800,400);
ctx.fill();
//=============================================
//					MONTAÑA 4
//=============================================
ctx.beginPath();
ctx.fillStyle = "indigo"; //a(100,0,255,100)';
ctx.moveTo(600,400);
ctx.lineTo(800,100);
ctx.lineTo(1000,400);
ctx.fill();
//=============================================
// circulo 2
//=============================================
ctx.beginPath();
//ctx.arc(x1,y1,r,iniciaangulo,finalangulo);
ctx.arc(900,550,200,0,2*Math.PI);
//relleno
ctx.fillStyle="green";
ctx.fill();
//=============================================
//sol
//=============================================
ctx.beginPath();
//ctx.arc(x1,y1,r,iniciaangulo,finalangulo);
ctx.arc(25,25,50,0,2*Math.PI);
//relleno
ctx.fillStyle="yellow";
ctx.fill();

//===================================
//             	NEVADO 1
//===================================
ctx.beginPath();
ctx.fillStyle = "white"; //a(100,0,255,100)';
ctx.moveTo(132,200);
ctx.lineTo(200,100);
ctx.lineTo(200,280);
ctx.fill();
//===================================
//             	NEVADO 1
//===================================
ctx.beginPath();
ctx.fillStyle = "#A9D0F5"; //a(100,0,255,100)';
ctx.moveTo(268,200);
ctx.lineTo(200,100);
ctx.lineTo(200,280);
ctx.fill();
//===================================
//             	NEVADO 2
//===================================
ctx.beginPath();
ctx.fillStyle = "white"; //a(100,0,255,100)';
ctx.moveTo(332,200);
ctx.lineTo(400,100);
ctx.lineTo(400,280);
ctx.fill();
//===================================
//             	NEVADO 2
//===================================
ctx.beginPath();
ctx.fillStyle = "#A9D0F5"; //a(100,0,255,100)';
ctx.moveTo(466,200);
ctx.lineTo(400,100);
ctx.lineTo(400,280);
ctx.fill();
//===================================
//             	NEVADO 3
//===================================
ctx.beginPath();
ctx.fillStyle = "white"; //a(100,0,255,100)';
ctx.moveTo(532,200);
ctx.lineTo(600,100);
ctx.lineTo(600,280);
ctx.fill();
//===================================
//             	NEVADO 3
//===================================
ctx.beginPath();
ctx.fillStyle = "#A9D0F5"; //a(100,0,255,100)';
ctx.moveTo(666,200);
ctx.lineTo(600,100);
ctx.lineTo(600,280);
ctx.fill();
//===================================
//             	NEVADO 4
//===================================
ctx.beginPath();
ctx.fillStyle = "white"; //a(100,0,255,100)';
ctx.moveTo(732,200);
ctx.lineTo(800,100);
ctx.lineTo(800,280);
ctx.fill();
//===================================
//             	NEVADO 2
//===================================
ctx.beginPath();
ctx.fillStyle = "#A9D0F5"; //a(100,0,255,100)';
ctx.moveTo(868,200);
ctx.lineTo(800,100);
ctx.lineTo(800,280);
ctx.fill();

//					tallo
var objeto1=new Object({
	color:"brown",
	valorx:115,
	valory:190,
	ancho:23,
	alto:100
})
ctx.fillStyle=objeto1.color;
//ctx.fillrect(x,y,x1,y2);
ctx.fillRect(objeto1.valorx,objeto1.valory,objeto1.ancho,objeto1.alto);
/*ctx.fillStyle="brown";//a(900,550,220,0,2)';
ctx.fillRect(115,190,23,100);*/
var objeto1=new Object({
	color:"brown",
	valorx:900,
	valory:254,
	ancho:20,
	alto:100
})
ctx.fillStyle=objeto1.color;
//ctx.fillrect(x,y,x1,y2);
ctx.fillRect(objeto1.valorx,objeto1.valory,objeto1.ancho,objeto1.alto);
/*ctx.fillStyle="brown";//a(900,550,220,0,2)';
ctx.fillRect(900,252,20,100);*/
//=============================================
// circulo 1
//=============================================
ctx.beginPath();
//ctx.arc(x1,y1,r,iniciaangulo,finalangulo);
ctx.arc(50,500,230,0,2*Math.PI);
//relleno
ctx.fillStyle="#64dd17";
ctx.fill();
//=============================================
//					pino1
//=============================================
ctx.beginPath();
ctx.fillStyle="#259b24";//a(900,550,220,0,2)';
ctx.moveTo(800,300);
ctx.lineTo(900,200);
ctx.lineTo(1000,300);
ctx.fill();
//=============================================
//					pino2
//=============================================
ctx.beginPath();
ctx.fillStyle="#5af158";//a(900,550,220,0,2)';
ctx.moveTo(800,260);
ctx.lineTo(900,150);
ctx.lineTo(1000,260);
ctx.fill();
//=============================================
//					pino3
//=============================================
ctx.beginPath();
ctx.fillStyle="green";//a(900,550,220,0,2)';
ctx.moveTo(800,200);
ctx.lineTo(900,100);
ctx.lineTo(1000,200);
ctx.fill();
//=============================================
//arbol 1
//=============================================
ctx.beginPath();
ctx.arc(150,150,35,0,2*Math.PI);
ctx.fillStyle="lime";
ctx.fill();
//=============================================
//arbol 2
//=============================================
ctx.beginPath();
ctx.arc(80,170,35,0,2*Math.PI);
ctx.fillStyle="lime";
ctx.fill();
//=============================================
//arbol 3
//=============================================
ctx.beginPath();
ctx.arc(120,180,55,0,2*Math.PI);
ctx.fillStyle="green";
ctx.fill();
//=============================================
//arbol 4
//=============================================
ctx.beginPath();
ctx.arc(150,225,35,0,2*Math.PI);
ctx.fillStyle="green";
ctx.fill();
//=============================================
//pasto1
//=============================================
ctx.beginPath();
ctx.arc(10,500,30,0,2*Math.PI);
ctx.fillStyle="green";
ctx.fill();
//=============================================
//psto2
//=============================================
ctx.beginPath();
ctx.arc(70,500,30,0,2*Math.PI);
ctx.fillStyle="green";
ctx.fill();
//=============================================
//pasto3
//=============================================
ctx.beginPath();
ctx.arc(130,500,30,0,2*Math.PI);
ctx.fillStyle="green";
ctx.fill();
//=============================================
//pasto4
//=============================================
ctx.beginPath();
ctx.arc(190,500,30,0,2*Math.PI);
ctx.fillStyle="green";
ctx.fill();
//=============================================
//pasto4
//=============================================
ctx.beginPath();
ctx.arc(250,500,30,0,2*Math.PI);
ctx.fillStyle="green";
ctx.fill();

ctx.drawImage(sprite,ubicacionx,0,100,200,ubicacion1,380,100,150);
frame(movimiento);
}
movimiento();