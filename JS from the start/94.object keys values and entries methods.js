/*
Object.keys(obj), Object.values(obj), Object.entries(obj) create an iterable object from the Object
*/

let westeros = {
	cersei: 'Lannister',
	arya: 'Stark',
	jon: 'Snow',
	brienne: 'Tarth',
	daenerys: 'Targaryen',
	then: 'Greyjoy',
	jorah: 'Mormont',
	margaery: 'Tyrell',
	sandor: 'Clegane',
	samwell: 'Tarly',
	ramsay: 'Bolton'
};

// for...of, forEach(), filter(), map(), reduce() can be used on iterables only

let keys = Object.keys(westeros);
console.log(keys);
let vals = Object.values(westeros);
console.log(vals);
let entries = Object.entries(westeros);
console.log(entries);
console.log(entries[2][1]);