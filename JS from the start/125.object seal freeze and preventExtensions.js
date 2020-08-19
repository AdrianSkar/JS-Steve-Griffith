/* 	Differences among
			Object.seal()                - check with Object.isSealed()
			Object.freeze()							 - check with Object.isFrozen()
			Object.preventExtensions()	 - check with Object.isExtensible()

*/

"use strict"; // make sure error messages appear. Prevent silent failures

//create an obj to use as the prototype
let parentObj = {
	prop1: 123,
	someMethod: function () { console.log('hello'); }
};

//create an object and assign the prototype
let obj = Object.create(parentObj, {
	prop2: {
		value: 'I am prop2',
		writable: true,
		configurable: true,
		enumerable: true
	}
});

//add a method to the object directly
obj.innerMethod = function () { console.log("obj's inner method"); };

//add a property to the object and define its property descriptors
Object.defineProperty(obj, 'prop3', {
	value: true,
	writable: true,
	configurable: true,
	enumerable: true
});

//create another object to use as an alternative prototype
let otherProto = {};

// Object.seal(obj);
// Object.freeze(obj);
// Object.preventExtensions(obj);

// Object.setPrototypeOf(obj, otherProto);
// console.log(Object.getPrototypeOf(obj));
// console.log(obj.prop1);

// obj.prop4 = 'test';
// obj.prop3 = 'newProp3';
// console.log(obj);

/*
After calling the method can you...

													seal()		freeze()		preventExtensions()
	Add new prop							no					no											no
	Edit prop value					 yes					no										 yes
	Delete a prop							no					no										 yes
	Change descriptors				no					no										 yes
	Reassign __proto__				no					no											no

	__proto__ is the old non-standard property equivalent of Object.getPrototypeOf(obj). You can also set a prototype using Object.setPrototypeOf() instead of
	obj.__proto__ = otherProto;
*/