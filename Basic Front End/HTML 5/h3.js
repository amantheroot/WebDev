function init(){
	var h1elements = document.getElementsByTagName("h1");
	h1elements[0].onclick = changecolor;
}

function changecolor(){
	this.innerHTML = "Click Again";

	var randcolor = '#'+ Math.floor(Math.random()*16777215).toString(16);

	this.style.color = randcolor;
}

function toggleimg(){
	var img = document.getElementsById("img1");
	var isimgvisible = img.style.visibility != "visible";
	img.style.visibility = isimgvisible ? "visible" : "hidden";
}

onload  = init;