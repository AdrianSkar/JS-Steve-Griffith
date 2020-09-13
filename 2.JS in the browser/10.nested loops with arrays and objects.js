let twoD = [[1, 2, 3, 4, 5, 6, 7],
[8, 10, 5, 7, 3, 22, 6, 42],
[123, 54, 12, 11, 9, 15]];

let bigHero = {
	characters: [
		{ name: 'Hiro', voice: 'Ryan Potter' },
		{ name: 'Baymax', voice: 'Scott Adsit' },
		{ name: 'Go go tamago', voice: 'Jamie Chung' },
		{ name: 'Fred', voice: 'T.J. Miller' },
	]
};

// nested for loops
let rows = twoD.length;
for (let i = 0; i < rows; i++) {
	let items = twoD[i].length;
	console.log(i, items);
	for (let n = 0; n < items; n++) {
		console.log(n, twoD[i][n]);
	}
}

let chars = bigHero.characters; //bigHero.['characters']
for (let i = 0, len = chars.length; i < len; i++) {
	// console.log(i, chars[i]);
	// console.log(chars[i].name);
	// console.log(chars[i].voice);
	for (let prop in chars[i]) {
		console.log(chars[i].prop); // Error/undefined: chars[i].prop is a non-existent property of the characters object, you have to use square notation
		console.log(prop, chars[i][prop]);
	}
}
