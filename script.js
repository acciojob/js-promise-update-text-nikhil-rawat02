//your JS code here. If required.
let output = document.getElementById("output");

let p = new Promise((resolve,reject) =>{
	setInterval(resolve("change html"),1000);
})
p.then((value)=>{
	output.innerHTML = value;
})