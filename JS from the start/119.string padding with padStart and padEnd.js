/* Padding strings
padStart(len [, filler])
padEnd(len [, filler])

Some use cases:
	- Create an id that needs to be a specific length
	- Tab delimited values
	- Hex value random colours (#F10F0F)
*/

//1. id numbers that have to be 9 digits

let id = 432177;
console.log(id.toString().padStart(9, '0'));

//2. fixed length file format
let userid = 123456; //6 tabs
let user = 'Bob';		//10 chars
let email = 'bob@work.org'; //final 30 chars

let fullLine = '|' + userid.toString().padStart(6, '\t') + user.padStart(10) + email.padStart(30);

console.log(fullLine);

//3.random hex colours

for (let i = 0; i < 25; i++) {
	let red = Math.floor(Math.random() * 255).toString(16);
	let green = Math.floor(Math.random() * 255).toString(16);
	let blue = Math.floor(Math.random() * 255).toString(16);
	let colour = '#' + red.padStart(2, '0') + green.padStart(2, '0') + blue.padStart(2, '0');
	console.log(red, green, blue, colour);
}