let obj = {
	name: 'Walter',
	last: 'Sobchak',
	age: 50,
	angry: true,
	bestscore: 200,
	armed: true
};
let str;

str = JSON.stringify(obj);
console.log(str);

str = JSON.stringify(obj, ['age', 'angry', 'last']); // only those keys
console.log(str);

function replaceFun(key, val) {
	if (typeof val === 'number') { //replaces num values with the word 'number'
		return 'number';

	} else { return val; }
}

str = JSON.stringify(obj, replaceFun);
console.log(str);

str = JSON.stringify(obj, null, 4); //adds 4 spaces to each output
console.log(str);

str = JSON.stringify(obj, null, '\t\t\t\t'); // adds 4 tabs
console.log(str);