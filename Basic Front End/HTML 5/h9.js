function init(){
    var canvas = document.getElementById("canvas");
    if(canvas.getContext){
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "#aefcab";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle= "#abd6fc";
        ctx.fillRect(100,100,50,50);

        ctx.lineWidth=10;
        ctx.strokeStyle = "#e54464";
        ctx.strokeRect(100,100,50,50);

        ctx.fillStyle="#4d3eef";
        ctx.beginPath();
        ctx.arc(500, 300, 100, 0, Math.PI*2, true);
        ctx.fill();

        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.moveTo(10,200);
        ctx.lineTo(10,300);
        ctx.lineTo(30,250);
        ctx.lineTo(30, 200);
        ctx.closePath();
        ctx.fill();

        ctx.lineWidth=5;
        ctx.strokeStyle = "#ffffff";
        ctx.beginPath();
        ctx.moveTo(10,200);
        ctx.lineTo(10,300);
        ctx.lineTo(30,250);
        ctx.lineTo(30, 200);
        ctx.closePath();
        ctx.stroke();

        var lingrad = ctx.createLinearGradient(400, 100, 500, 500);

        lingrad.addColorStop(0, "#00e0f9");
        lingrad.addColorStop(0.5, "#40949e");
        lingrad.addColorStop(1, "#202121");

        ctx.fillStyle = lingrad;
        ctx.fillRect(400, 100, 100, 100);

        var lingrad = ctx.createLinearGradient(300, 50, 500, 500);

        lingrad.addColorStop(0, "#00e0f9");
        lingrad.addColorStop(0.5, "#40949e");
        lingrad.addColorStop(1, "#202121");

        ctx.fillStyle = "rgba(171, 252, 252, 0.5)"
        ctx.fillRect(300, 50, 100, 100);

        var radgrad = ctx.createRadialGradient(250, 250, 50, 275, 275, 75);

        radgrad.addColorStop(0, "white");
        radgrad.addColorStop(1, "red");

        ctx.fillStyle = radgrad;
        ctx.arc(250, 250, 50, 0, Math.PI*2, false);
        ctx.fill();

        ctx.font = "bold 50px Arial";
        ctx.fillStyle = "#f9d625";
        ctx.fillText("YO!", 100, 90);

        ctx.strokeStyle = "Black";
        ctx.lineWidth =1;
        ctx.strokeText("YO!", 100, 90);

        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 5;
        ctx.shadowColor = "black";
        ctx.fillText("YO!", 100, 90);

        ctx.lineWidth = 30;
        ctx.strokeStyle = "#d43ef9";
        ctx.beginPath();
        ctx.moveTo(600, 50);
        ctx.lineCap = "butt";
        ctx.lineTo(650, 150);
        ctx.stroke();

        
        ctx.lineWidth = 10;
        ctx.strokeStyle = "#d43ef9";
        ctx.beginPath();
        ctx.moveTo(700, 50);
        ctx.lineCap = "round";
        ctx.lineTo(750, 150);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(500, 50, 30, Math.PI/2, 3*(Math.PI/4), true);
        ctx.stroke();

        ctx.strokeStyle = "Blue";
        ctx.lineCap = "square";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.moveTo(100, 350);
        ctx.quadraticCurveTo(150, 300, 250, 390);
        ctx.stroke();

        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(700, 200);
        ctx.bezierCurveTo(750, 200, 650, 300, 780, 180);
        ctx.stroke();

        ctx.fillStyle = "purple";
        ctx.fillRect(30, 50, 60, 10)

        ctx.rotate(Math.PI/6);
        ctx.scale(0.5, 1);
        ctx.fillRect(400, 70, 100, 10);
    }
}
onload = init;