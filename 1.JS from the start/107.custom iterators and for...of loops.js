let myObj = {
	prop1: 123,
	prop2: 'bob',
	prop3: true
};

myObj[Symbol.iterator] = function () {
	let counter = -1;
	return {
		next: function () {
			counter++;
			switch (counter) {
				case 0:
					return { value: myObj.prop3, done: false };
				case 1:
					return { value: myObj.prop2, done: false };
				case 2:
					return { value: myObj.prop1, done: false };
				default:
					return { value: undefined, done: true };
			}
		}
	};
};

let iter = myObj[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

for (const prop of myObj) {
	console.log(prop);
}