/*
Call method and get a single value
Array.includes( searchElement [, fromIndex]) returns Bool
Array.indexOf( searchElement [, fromIndex]) returns -1 if not found or the index of the first match

Loop and return a single value
Array.some( callBack [, thisArg]) returns Bool
Array.find( callBack [, thisArg]) returns value from Array or undefined
*/

let names = ['Walter', 'Jesse', 'Saul', 'Gus', 'Skylar', 'Marie', 'Todd', 'Badger'];

let bool = names.includes('Jesse');
console.log(bool);

let inD = names.indexOf('test');
console.log(inD);

let som = names.some((name) => {
	if (name.indexOf('M') > -1) {
		return name;
	} // return false; // undefined will be returned
});
console.log(som);

let fin = names.find(val => {
	if (val.length > 5) {
		return true;
	}
});

console.log(fin);
