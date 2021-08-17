// Using the in operator to test for properties

if ('toString' in {}) {
	//window has a property named document
	console.log('toString exists in Object');
}

let obj = {
	prop1: 1,
	prop2: 2,
	prop3: undefined,
	prop4: null
};

let test = ('prop1' in obj);
console.log(test);

delete obj.prop2;

if ('prop1' in obj) {
	console.log('obj.prop - 1');
} else {
	console.log('NO obj.prop1');
}

if ('prop2' in obj) {
	console.log('obj.prop2');
} else {
	console.log('NO obj.prop2 - deleted');
}

if ('prop3' in obj) {
	console.log('obj.prop3 - undefined');
} else {
	console.log('NO obj.prop3');
}

if ('prop4' in obj) {
	console.log('obj.prop4 - null');
} else {
	console.log('NO obj.prop4');
}

///////////////////////////////////////////////////////////

let obj2 = Object.create(obj, { prop5: { value: 5 } });
//obj2 will have prop1, prop3, prop4 and prop5. 1,3 and 4 inherited from the prototype/parent.
if ('prop1' in obj2) {
	console.log('obj2.prop1 - on the prototype chain');
} else { console.log('No obj2.prop1') };

if ('prop5' in obj2) {
	console.log('obj2.prop5 - 5');
} else { console.log('no obj2.prop5'); }


let arr = ['a', 'b', 'c'];

if (0 in arr) {
	console.log('arr has index 0');
} else { console.log('no index 0 in arr'); }


//add a property that is not enumerable to obj2
Object.defineProperty(obj2, 'prop6', {
	value: 6,
	enumerable: false,
	configurable: false,
	writable: false
});

if ('prop6' in obj2) {
	console.log('obj2.prop6 logs even though its not enumerable, configurable or writable');
} else { console.log('No prop6 in obj2'); }

for (let prop in obj2) {
	console.log(prop);
}