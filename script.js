var css = document.querySelector("h3");
var from = document.querySelector('#from');
var to = document.querySelector('#to');
var body = document.querySelector('body');

function changeGradient() {
	body.style.background = "linear-gradient(to right, " + from.value + " , " + to.value + ")";
	css.textContent = body.style.background + ';';
}

from.addEventListener("input", changeGradient)

to.addEventListener("input", changeGradient)
