//1- Get a object
//2- Get a Parameter/properties
//3 - make shapes/lines

function makeCanvas(){
//canvas1	
	//get object
	
	var PI_TWO=Math.PI*2;
	var canvas1 = document.getElementById('canvas1');
	var ctx1 = canvas1.getContext('2d');

	//set properties

	ctx1.font = '32pt Arial';
	ctx1.fillStyle = 'DeepSkyBlue';
	ctx1.strokeStyle = 'Black';

	//Action to shape and line
	ctx1.fillText("I Love HTML5",45,150);
	ctx1.strokeText("I Love HTML5",45,150);

//canvas2
	var canvas2 = document.getElementById('canvas2');
	var ctx2 = canvas2.getContext('2d');
	
	ctx2.fillStyle = 'Red';
	ctx2.strokeStyle= 'Black';
	ctx2.lineWidth=10;

	ctx2.fillRect(45,5,135,135);
	ctx2.strokeRect(45,5,135,135);

	ctx2.fillStyle = 'Gray';
	ctx2.fillRect(200,5,135,135);

	ctx2.fillStyle = 'Gray';
	ctx2.fillRect(45,150,135,135);

	ctx2.fillStyle = 'Red';
	ctx2.strokeStyle= 'Black';
	ctx2.lineWidth=10;

	ctx2.fillRect(200,150,135,135);
	ctx2.strokeRect(200,150,135,135);


//canvas3

	var canvas3 = document.getElementById('canvas3');
	var ctx3 = canvas3.getContext('2d');
	
	ctx3.fillStyle = 'Red';
	ctx3.strokeStyle= 'Gray';
	ctx3.lineWidth=5;

	ctx3.beginPath();
	ctx3.moveTo(100,100);
	ctx3.lineTo(150,200);

	ctx3.lineTo(200,200);
	
	ctx3.lineTo(200,290);

	ctx3.lineTo(290,290);

	ctx3.lineTo(290,100);

	ctx3.lineTo(100,100);

	ctx3.stroke();
	ctx3.fill();
	ctx3.closePath();	

//canvas4

	var canvas4 = document.getElementById('canvas4');
	var ctx4 = canvas4.getContext('2d');
	
	ctx4.fillStyle = 'Blue';

	ctx4.beginPath();
	ctx4.arc(200,30,25,0 , PI_TWO);
	ctx4.fill();

	ctx4.fillStyle = 'Red';

	ctx4.beginPath();
	ctx4.arc(200,100,45,0 , PI_TWO);
	ctx4.fill();

	ctx4.fillStyle = 'Black';

	ctx4.beginPath();
	ctx4.arc(200,220,75,0 , PI_TWO);
	ctx4.fill();


///canvas5

	var canvas5 = document.getElementById('canvas5');
	var ctx5 = canvas5.getContext('2d');
	var posX=0;
	var posY=0;
	

	setInterval(function(){
		posX += 1;
		posY += 1;
		ctx5.fillStyle= 'Black';
		ctx5.fillRect(0,0,canvas5.width,canvas5.height);
		
		ctx5.fillStyle= 'White';
		ctx5.beginPath();
		ctx5.arc(posX,120,55,0,PI_TWO);
		ctx5.fill();
		
		ctx5.fillStyle= 'Red';
		ctx5.beginPath();
		ctx5.arc(150,posY,55,0,PI_TWO);
		ctx5.fill();

		ctx5.fillStyle= 'Blue';
		ctx5.beginPath();
		ctx5.arc(350,posY,55,0,PI_TWO);
		ctx5.fill()

	},30)





	


	








	
	


}
