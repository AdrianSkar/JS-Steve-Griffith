//Array map() method

let dwarves = ['Bifur', 'Bofur', 'Bombur', 'Fili', 'Kili', 'Oin', 'Gloin', 'Thorin', 'Balin', 'Dwalin', 'Nori', 'Dori'];

//determine the length of each name and save it in a new array

// const lengths = dwarves.map(function (item) {
// 	// lengths.push(item.length); if you separate the assignment from the function
// 	return item.length;
// });

const lengths = dwarves.map(item => item.length);
console.log(lengths);

