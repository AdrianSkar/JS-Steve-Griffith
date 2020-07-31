// Tips for debugging JS
const DEBUG_MODE = true;

var R = "Ricky";
let B = "Bobbie";
console.count(R); //1 Ricky
if (DEBUG_MODE) {
	debugger;
}

function x(nm) { console.count(nm); return true; }

console.count(B); //1 Bobbie
x(R); //2 Ricky

console.count(R); //3 Ricky
x(B); //2 Bobbie

console.count(R); // Ricky

console.time(R);
console.group();
console.log('Log');
console.group();
console.info('Info');
console.groupEnd();
// console.error('Error');
console.groupEnd();
console.timeEnd(R);