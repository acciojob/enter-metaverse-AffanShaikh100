//your JS code here. If required.
let button = document.getElementById("enterBtn");
let text = document.getElementById("status");
 function remove(){
	text.remove();
	 let heading = document.createElement("h1");
	 heading.innerText ="Entered Metaverse";
	 document.body.insertBefore(heading, button);
 }
button.addEventListener("click",remove);