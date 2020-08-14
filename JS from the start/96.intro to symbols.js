/* 
Primitive data type
Every symbol value returned from Symbol() is unique.
A symbol value may be used as an identifier for object properties; this is the data type's only purpose.
*/

const s1 = Symbol();
const s2 = Symbol(123); // 123 is a description and has no functional purpose; maybe debugging
const s3 = Symbol('steve');

console.log(s1);
console.log(s2);
console.log(s3);
console.log(typeof s2);
console.log(s3.toString());

console.log(Symbol() === Symbol());
console.log(Symbol() == Symbol());
console.log(Symbol(42) == Symbol(42));

console.log(Symbol.for(123) === Symbol(123));
console.log(Symbol.for(123) === Symbol.for(123));

console.log(Symbol.keyFor(s2));
let s5 = Symbol.for(555);
console.log(Symbol.keyFor(s5));

let obj = {};
obj['prop1'] = 'value1';
obj['prop2'] = 'value2';
obj[Symbol()] = 'value3'; // won't log
// obj['prop4'] = Symbol();

for (const p in obj) {
	console.log(p, obj[p]); // Err; cannot convert a Symbol to a string (prop4)
}
console.log(JSON.stringify(obj)); // no symbols

let s4 = Symbol.for('fred');
console.log(s4); // Symbol(fred) where fred looks like the descriptions we used at the beginning but fred here is actually the key
let k4 = Symbol.keyFor(s4);
console.log(k4);
