//your JS code here. If required.
let button = document.getElementById("enterBtn");
let text = document.getElementById("status");
 function remove(){
	text.remove();
 }
button.addEventListener("click",remove);