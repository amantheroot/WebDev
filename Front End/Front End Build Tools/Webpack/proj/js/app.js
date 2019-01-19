import string from "./module1.js";
import string2 from "./module2.js";

var demo = document.getElementById("demo");

demo.innerHTML = "THIS IS MAIN IT!";
demo.innerHTML += "<br>"+string;
demo.innerHTML += "<br>"+string2;

