/*jshint esversion: 6*/

//Array includes() method
//check ro see if something is inside an array
//returns boolean value

const dwarves = ['Grumpy', 'Sneezy', 'Happy', 'Bashful', 'Doc', 'Dopey', 'Sleepy'];

let name1 = 'Peter Dinklage';
let name2 = 'Kenny Baker';
let name3 = 'Happy';

// function check(val) {
// 	return dwarves.includes(val);
// }
const check = (val, pos) => dwarves.includes(val, pos);

console.log('Contains Peter', check(name1));
console.log('Contains Kenny', check(name2));
console.log('Contains Happy', check(name3));
console.log('Contains Happy from index 3', check(name3, 3));

