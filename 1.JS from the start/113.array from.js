/// Array.from() - create a shallow copy array

let primitives = ['Bart', 'Maggie', 'Homer', 'Marge', 'Lisa'];
let deepArr = [123, 'Apu',
	{ Smithers: 'Mr. Burns' },
	['Futurama', 'Disenchantment']];

let prim2 = Array.from(primitives);

prim2[2] = 'Flanders'; //Doesn't change primitives
console.log(prim2);
console.log(primitives);

let deep2 = Array.from(deepArr);

deep2[2].Smithers = 'Not Mr. Burns'; //Changes deepArr too because non-primitives are passed by reference (pointer)
console.log(deep2);
console.log(deepArr);