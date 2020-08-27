//Array forEach loop

let dwarves = ['Bifur', 'Bofur', 'Bombur', 'Fili', 'Kili', 'Oin', 'Gloin', 'Thorin', 'Balin', 'Dwalin', 'Nori', 'Dori'];

// Convert all the names to lowercase except Thorin
// anonymous function

// dwarves.forEach(output);

// function output(item, index, array) {
// 	if (item === 'Thorin') {
// 		console.log(item, index);
// 	}
// 	else {
// 		dwarves[index] = item.toLowerCase();
// 	}
// }

// dwarves.forEach(function (item, index) {
// 	if (item === 'Thorin') {
// 		console.log(item, index);
// 	}
// 	else {
// 		dwarves[index] = item.toLowerCase();
// 	}
// });

// dwarves.forEach(function (item, index) {
// 	if (item !== 'Thorin') {
// 		dwarves[index] = item.toLowerCase();
// 	}
// });

// console.log(dwarves);

dwarves.forEach((item, index) => (item !== 'Thorin') ? dwarves[index] = item.toLowerCase() : '');

console.log(dwarves);
