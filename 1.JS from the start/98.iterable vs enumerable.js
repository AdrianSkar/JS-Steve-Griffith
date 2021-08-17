/*
for...of vs for...in
iterable vs enumerable
*/

let names = ['Gandalf', 'Bilbo', 'Aragorn', 'Gimli'];
names.elf = 'Legolas';
Object.defineProperty(names, 'ent',
	{
		value: 'Treebeard',
		enumerable: false
	});

let middleEarth = {
	'towns': ['Hobbiton', 'Rivendell'],
	'races': ['Elves', 'Hobbits', 'Men']
};
middleEarth.creator = 'J.R.R. Tolkien';
Object.defineProperty(middleEarth, 'age',
	{
		value: '3rd',
		enumerable: false
	});

for (const p in names) { //loops through enumerable props
	console.log('in names', p);
}
for (const p in middleEarth) { //loops through enumerable props
	console.log('in middleEarth', p);
}

for (const p of names) {//loops trough values of iterable (won't get access to elf nor ent)
	console.log(' names prop', p);
}
for (const p of middleEarth) {//objects (middleEarth) is not iterable 
	console.log(' middleEarth prop', p);
}