/*
1. Object literals
2. Object.create() with descriptors
3. function + new
4. factory function with closures
5. JS Class
*/

/// 1.Object literals

let obj1 = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: function () {
		console.log(this.prop1);
	}
};
console.log(1, obj1);
obj1.prop3();

/// 2.Object.create

let proto = {
	prop3: function () { console.log(this.prop1); }
};

let obj2 = Object.create({}, { // or proto instead of {} to "avoid" line 37 declaration
	prop1: { enumerable: true, value: 'value1' },
	prop2: {
		writable: true,
		enumerable: false,
		configurable: true,
		value: 'value2'
	}
});

obj2.prop3 = function () { console.log(this.prop1); };

console.log(2, obj2);
obj2.prop3();


/// 3.new + function

let Obj = function (v1, v2) {
	this.prop1 = v1;
	this.prop2 = v2;
	this.prop3 = function () {
		console.log(this.prop1);
	};
};
let obj3 = new Obj('value1', 'value2'); //When using new the Obj function will return an object instead of undefined (lacks return statement)

console.log(3, obj3);
obj3.prop3();


/// 4.Factory function with closures

let ObjFF = function (v1, v2) {
	let _prop1 = v1;
	let _prop2 = v2;
	return {
		prop1: _prop1,
		prop2: _prop2,
		prop3: function () { console.log(_prop1); }
	};
	// return {
	// 	prop1: v1,
	// 	prop2: v2,
	// 	prop3: function () { console.log(v1); }
	// };
};

let obj4 = ObjFF('value1', 'value2');

console.log(obj4);
obj4.prop3();

/// 5. JS Class (does the same as 3 under the hood)

class ObjC {
	constructor(v1, v2) {
		this.prop1 = v1;
		this.prop2 = v2;
	}
	prop3() {
		console.log(this.prop1);
	}
}

let obj5 = new ObjC('value1', 'value2');
console.log(5, obj5);
obj5.prop3();