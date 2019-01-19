import {string1, string2} from "./strings.js";
import "../css/main.scss";

var demo = document.getElementById("demo");

demo.innerHTML = "<h1>I am Alive!</h1>";
demo.innerHTML += string1;
demo.innerHTML += string2;
