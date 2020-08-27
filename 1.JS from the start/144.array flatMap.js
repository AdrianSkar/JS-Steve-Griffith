// Equivalent: arr.map.flat(1)

let movies = [
	'Dog soldiers',
	['In Bruges', 'From Paris with love', 'Layer cake'],
	'The big Lebowski',
	'',
	'    ',
	'Memento, The platform, Fight club',
	'Hotel Rwanda, Moon, Under the skin',
	'Lady bird',
	['Platoon', 'Wall-E'],
];

let arrA = movies.flatMap(entry => {
	return (typeof entry === 'string' && entry.trim() === '') ? [] :
		(Array.isArray(entry) ? entry : entry.split(',').map(entry3 => entry3.trim()));
});

console.log(arrA);
// let arr = movies.flatMap(entry => {
// 	if (Array.isArray(entry)) {
// 		return entry;
// 	}
// 	else if (typeof entry === 'string' && entry.trim() === '') {
// 		return []; // remove the empty strings
// 	} else {
// 		//other strings
// 		return entry.split(',').map(entry => entry.trim());
// 	}
// });

// console.log(arr);