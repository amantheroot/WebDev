import "../css/style.scss";
import "../index.html";

let size = document.getElementsByClassName("clock__display")[0].clientHeight;

let r = size / 2;
let hr = r - 100;
let mr = r - 30;
let sr = r - 20;

let tor = r - 10;
let tir = r - 40;

var canvas = document.getElementById("display");
canvas.height = size;
canvas.width = size;
var ctx = canvas.getContext("2d");

const drawTicks = () => {
  for (let i = 0; i < 360; i += 6) {
    let angle = (i * Math.PI) / 180;
    console.log(i);
    ctx.beginPath();
    ctx.moveTo(r - Math.cos(angle) * tir, r - Math.sin(angle) * tir);
    ctx.lineWidth = i % 30 == 0 ? 5 : 2;
    ctx.lineTo(r - Math.cos(angle) * tor, r - Math.sin(angle) * tor);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
  }
};

const displayTime = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawTicks();

  let d = new Date();
  let h = d.getHours();

  let hoursAngle = h > 11 ? h - 12 : h;
  hoursAngle *= 30;
  let minutesAngle = d.getMinutes() * 6;
  let secondsAngle = d.getSeconds() * 6;

  hoursAngle += 90;
  minutesAngle += 90;
  secondsAngle += 90;

  hoursAngle = (Math.PI * hoursAngle) / 180;
  minutesAngle = (Math.PI * minutesAngle) / 180;
  secondsAngle = (Math.PI * secondsAngle) / 180;

  ctx.beginPath();
  ctx.moveTo(r, r);
  ctx.lineWidth = 8;
  ctx.lineTo(r - Math.cos(hoursAngle) * hr, r - Math.sin(hoursAngle) * hr);
  ctx.strokeStyle = "#000000";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(r, r);
  ctx.lineWidth = 6;
  ctx.lineTo(r - Math.cos(minutesAngle) * mr, r - Math.sin(minutesAngle) * mr);
  ctx.strokeStyle = "#000000";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(r, r);
  ctx.lineWidth = 2;
  ctx.lineTo(r - Math.cos(secondsAngle) * sr, r - Math.sin(secondsAngle) * sr);
  ctx.strokeStyle = "#ff0000";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(r, r, 8, 0, 2 * Math.PI);
  ctx.fillStyle = "#000000";
  ctx.fill();
};

displayTime();
setInterval(() => {
  displayTime();
}, 1000);
