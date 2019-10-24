/*jshint esversion: 6*/

//variable scope, create some global variables

var ranger = 'Aragorn';
let elf = 'Legolas';
const DWARF = 'Gimli';
let hobbit = 'Sam';

function goToMountDoom() {
	for (var i = 0; i < 100; i++) {
		//i is a local scope variable inside this function
	}
	for (let c = 0; c < 100; c++) {
		//c is a block scope variable and only exists inside the loop
	}
	console.log('i', i);
	// console.log('c', c);//ERR c is not defined
	let hobbit = 'Frodo';
}

function visitLothLorien() {
	console.log(elf);
	elf = 'Galadriel';
	console.log(elf);

	ranger = 'Strider';
	console.log(hobbit);

	// DWARF = 'Gloin';//ERR Assignment to constant var
	// let hobbit = 'Bilbo'; TDZ for the previous console.log and ERRs for being used before declared, doesn't behave as reasignment
	console.log(hobbit);

}

goToMountDoom();
visitLothLorien();
