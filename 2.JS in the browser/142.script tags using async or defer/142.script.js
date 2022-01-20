document.addEventListener('DOMContentLoaded', ()=>{
	// Runs after DCL event; meaning on normal execution and when using defer but not when using async (triggered before execution).
	// Generate a random char 1000 long string and put it in .output:
	let output = document.querySelector('.output');
	for(let i = 0; i < 1000; i++){
		output.textContent += String.fromCharCode(Math.floor(Math.random() * 60) + 65);
	}
});

// Independent from DCL, generate a 50000 rand char string:
let str = '';
for (let i = 0; i<50000; i++){
	// Add random char to str:
	str += String.fromCharCode(Math.floor(Math.random()* 60) + 65)
}
console.log(str.substring(49500)); // last 500 chars