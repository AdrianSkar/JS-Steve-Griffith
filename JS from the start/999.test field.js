/// randColour from Steve Griggith's JS tutorial on optional chaining at https://youtu.be/G662_abEci0
const randColour = () => {
	let clr = Math.floor(Math.random() * Math.pow(2, 24));
	let red = (clr >> 16).toString(16).padStart(2, '0');
	let green = ((clr >> 8) & 255).toString(16).padStart(2, '0');
	let blue = (clr & 255).toString(16).padStart(2, '0');
	let alpha = Math.floor(Math.random() * 200 + 55)
		.toString(16)
		.padStart(2, '0'); //alpha is a value 0-100% but written as num 0-255
	// and in hex that means 00 - FF. 50% is 128 in decimal or 80 in Hex
	// https://codepen.io/chriscoyier/pen/XjbzAW - ref chart for percentages
	//console.log(red, green, blue, alpha);
	return `#${red}${green}${blue}${alpha}`;
};
console.log(randColour());

/// randColour function using just hex values

const randCol = () => {
	let col = '';
	while (col.length < 8) {
		col += Math.floor(Math.random() * 16).toString(16);
	}
	return ('#' + (col));
};
console.log(randCol());