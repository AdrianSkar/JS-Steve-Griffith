/*jshint esversion: 6*/

// NaN is a property of the globla object. It represents a value which is 
// Not A Number. It will be unequal !== to ANYTHING inside if()

// isNaN() first converts the value to a Number and tests it for NaN

let t = isNaN(true); // 1
let f = isNaN(false);// 0
let n = isNaN(null); // 0
let u = isNaN(undefined); // NaN

console.log(t, f, n, u); // false false false true

let a = Number(true);
console.log(a); // 1

let b = isNaN(23); // false
let c = isNaN('45'); // false (turns string into a number)
let d = isNaN('45.45'); // idem
let e = isNaN(new Date()); // timestamp false
let f2 = isNaN(''); // 0 false
let g = isNaN('   '); // 0 false
let h = isNaN(new Date('28 August 2017')); // true NaN string inside Date object

