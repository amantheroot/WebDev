var scoretab = document.getElementById("score");
var bestscoretab = document.getElementById("bestscore");

var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

setInterval(game,1000/15);

score=0;
bestscore=0;
xv=yv=prevxv=prevyv=0;
px=py=12;
gs=tc=25;
ax=Math.floor(Math.random()*tc);
ay=Math.floor(Math.random()*tc);
trail = [];
tail = 5;

function game() {
	if (xv == 1) {
		if (prevxv == -1) {
			xv = -1;
		}
	}else if (xv == -1) {
		if (prevxv == 1) {
			xv = 1;
		}
	}else if (yv == 1) {
		if (prevyv == -1) {
			yv = -1;
		}
	}else if (yv == -1) {
		if (prevyv == 1) {
			yv = 1;
		}
	}

	prevxv = xv;
	prevyv = yv;

	px = px+xv;
	py = py+yv;

	if (px < 0) {
		px = tc -1;
	}
	if (px > tc-1) {
		px = 0;
	}
	if (py < 0) {
		py = tc -1;
	}
	if (py > tc-1) {
		py = 0;
	}

	ctx.fillStyle = "#383838";
	ctx.fillRect(0,0,canvas.width,canvas.height);

	ctx.fillStyle = "lime";
	for (i=0;i<trail.length;i++) {
		ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
		if (trail[i].x ==  px && trail[i].y == py) {
			tail = 5;
			score = 0;
			scoretab.innerHTML = "Score: "+score;
		}
	}

	trail.push({x:px,y:py});

	while (trail.length > tail) {
		trail.shift();
	}

	if (px==ax && py==ay) {
		ax=Math.floor(Math.random()*tc);
		ay=Math.floor(Math.random()*tc);
		tail++;
		score++;
		scoretab.innerHTML = "Score: "+score;
		if (score >= bestscore) {
			bestscore = score;
			bestscoretab.innerHTML = "Best Score: "+bestscore;
		}
	}

	ctx.fillStyle = "#ff0800";
	ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);
}

document.addEventListener("keydown",keypress);
function keypress(event) {
	switch(event.keyCode) {
		case 65:
		case 37:
			xv=-1;yv=0;
			break;
		case 87:
		case 38:
			xv=0;yv=-1;
			break;
		case 68:
		case 39:
			xv=1;yv=0;
			break;
		case 83:
		case 40:
			xv=0;yv=1;
			break;
	}
}
