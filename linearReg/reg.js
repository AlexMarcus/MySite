function plot() {

	var CANVAS = {
		id: "regCanvas",
		width: 650,
		height: 650,
	};

	var canvas = document.getElementById(CANVAS.id);
	var ctx = canvas.getContext('2d');

	ctx.clearRect(0, 0, CANVAS.width, CANVAS.height);
	drawAxes(ctx);
	

	var coords = document.getElementsByClassName("coords");
	var i;
	var Xs = [];
	var Ys = [];
	for(i = 0; i < coords.length; i++){
		coord = coords[i];
		
		var x_y = coord.getElementsByClassName("coord");
		var rawX = parseFloat(x_y[0].value);
		var rawY = parseFloat(x_y[1].value);
		Xs.push(rawX);
		Ys.push(rawY);
		plotPoint(ctx,rawX,rawY,CANVAS.height,CANVAS.width);
	};

}

function drawAxes(ctx){
	ctx.beginPath();
	ctx.moveTo(0,325);
	ctx.lineTo(650,325);
	ctx.moveTo(325,0);
	ctx.lineTo(325,650);
	ctx.lineWidth = 2;
	ctx.stroke();
	

}

function plotPoint(ctx,rawX,rawY,height,width){
	var x = (width/2) + rawX;
	var y = height - rawY - (height/2);
	ctx.moveTo(x,y);
	ctx.arc(x,y,1,0,Math.PI*2,true);
	ctx.strokeStyle = 'black';
	ctx.lineWidth = 1;
	ctx.stroke();
}

function addCoord(){
	var count = document.getElementsByClassName("coords").length;
	count = count + 1;
	if(count > 22){
		error("You cannot have more than 22 data points...for now");
		return null;
	}
	var element = document.getElementById("cont");
	var coord = document.getElementById("orderedPair1");
	var cln = coord.cloneNode(true);
	var newId = "orderedPair" + count;
	cln.getElementsByClassName("coord")[0].value = null;
	cln.getElementsByClassName("coord")[1].value = null;
	cln.setAttribute("id",newId)
	element.appendChild(cln);


}




