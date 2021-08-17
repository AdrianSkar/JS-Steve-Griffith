/*
Primitives: boolean, null, undefined, number, string, symbol

Objects: everything else (objects, arrays, functions)
*/

let nm = 'Bob'; // String literal, primitive value (gets a place in memory)
//String
console.log(nm.toUpperCase()); // temporary autobox to perform the operation

let nm2 = new String('bob'); // Passing a primitive value into the wrapper to create an object; a String object
nm2.toUpperCase();
console.log(nm2);

let nm3 = nm.toUpperCase();
console.log(nm3);


let o = new Object(); // Object constructor
let o2 = {
	prop: 1,
	prop2: false,
	prop3: 'string',
	prop4: function () { } // method (obj property that resolves to type function)
}; // Object literal syntax

/// When you put a method on a primitive JS does auto-boxing - putting a primitive value into a wrapper of the correct type 
