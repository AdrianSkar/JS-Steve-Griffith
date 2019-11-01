/*jshint esversion: 6*/

// nested loops and multidimensional objects
// we can use nested loops to access all the elements inside multidimensional
// arrays or objects

const twoD = [[1, 2, 3, 4, 5, 6, 7], [8, 10, 5, 7, 3, 22, 6, 42], [123, 54, 12, 11, 9, 15]];


// nested for loops
// let rows = twoD.length;
// for (let i = 0; i < rows; i++){
// 	let items = twoD[i].length;
// 	console.log(i, items);

// 	for (let y = 0; y < items; y++){
// 		console.log(twoD[i][y]);
// 	}
// }


const bigHero = {
	characters: [
		{ name: 'Hiro', voice: 'Ryan Potter' },
		{ name: 'Baymax', voice: 'Scott Adsit', prop: 12 },
		{ name: 'Go Go Tamago', voice: 'Jamie Chung' },
		{ name: 'Fred', voice: 'T.J. Miller' }
	]
};

let chars = bigHero.characters;
for (let i = 0; i < chars.length; i++) {
	// console.log(chars[i].name);
	// console.log(chars[i].voice);
	for (const prop in chars[i]) {
		console.log(prop, chars[i].prop, chars[i][prop]);
	}
}
