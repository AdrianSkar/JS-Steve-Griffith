// null means nothing, void, emptiness and is intentionally set

// undefined means the container exists but hasn't been given a value yet
// functions with no return statement will return undefined by default

console.log(typeof null);								// 'object'
console.log(typeof undefined);  				// 'undefined'

console.log(null === undefined);				// 'false'
console.log(null == undefined);				// 'true'

console.log(null === null);							// 'true'
console.log(null == null);							// 'true'

console.log(undefined === undefined);		// 'true'
console.log(undefined == undefined);		// 'true'

console.log(!null);											// 'true'
console.log(isNaN(1 + null));						// 'false'
console.log(isNaN(1 + undefined));			// 'true'

console.log(1 + null);
console.log(1 + undefined);


let x;
console.log(x);

function abc() {
	// return null;
}
console.log(abc());

console.log(global.blah); //undefined property of existing object
// console.log(asdf.blah); //throws an exception error; undefined property of non-existent object

const a = null;
console.log(a);



