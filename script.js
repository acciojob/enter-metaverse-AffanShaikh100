//your JS code here. If required.
let button = document.getElementById("enterBtn");
let text = document.getElementById("status");
 function remove(){
	text.remove();
	 let heading = document.createElement("h1");
	 heading.innerText ="Entered Metaverse";
	 document.body.appendChild(heading);
 }
button.addEventListener("click",remove);