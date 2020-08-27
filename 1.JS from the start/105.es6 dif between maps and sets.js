/*
///Maps - like objects they have keys and values
* Unique keys
	.size
	.set(key, value)
	.delete(key)
	.get(key)
	.has(key)
	.keys() - returns Iterator with array of keys
	.values() - returns Iterator with array of values
	.entries() - returns Iterator with array of [key, value]
	.clear()
	.forEach()
///Sets - Like arrays they have values
* Unique values (also helpful to remove non-unique values from arrays)
	.size()
	.add(value)
	.delete(value)
	.entries() - returns Iterator with array of [value, value]
	.values() - returns Iterators with array of values
	.has(value)
	.clear()
	.forEach()
*/

let obj = {
	prop1: 123,
	prop2: 'abc'
};
obj.prop2 = 'def';
console.log(obj);

let map = new Map();
map.set('prop1', 123);
map.set('prop2', 'abc');
map.set('prop2', 'def');
console.log(map);

let names = ['Rob', 'Bran', 'Arya', 'Sansa', 'Rickard'];
names.push('Rob');
let set1 = new Set(names); // removes duplicates
console.log(names);
console.log(set1);