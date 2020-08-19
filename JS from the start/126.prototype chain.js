/* Linking prototype objects to build a prototype chain
		__proto__ vs Object.getPrototypeOf(obj) & Object.setPrototypeOf(obj)
*/

/// 1. obj --> otherProto.prototype --> Object.prototype --> null

let otherProto = function () {
	this.prop1 = 456; // "this" means the instance of the object we are creating
	this.inner = function () { console.log('inner method on instance'); };
	//automatically returns the instance of the object
};

otherProto.prototype.someMethod = function () { // we can do that because otherProto is a constructor, not an instance
	console.log('this is otherProto');
};

let obj = new otherProto();
console.log(obj.prop1);
obj.inner();
obj.someMethod();
let test = obj.toString();
console.log(test);
console.log(obj);
// obj.prototype.newMethod = function () { console.log('test'); }; //Fails because obj is an instance; cannot set prop of undefined
// obj.__proto__.inner();//fails
// Object.getPrototypeOf(obj).inner();//fails; defined on the constructor for instances as this.inner, not a property or function. Inner only exists inside of obj (instance).
Object.getPrototypeOf(obj).someMethod();//works; defined as a method 
console.log(Object.getPrototypeOf(obj).someMethod());

/// 2. protoObj --> Object.prototype --> null

let protoObj = {
	prop1: 456,
	someMethod: function () { console.log('this is someMethod'); }
}; // == let protoObj = new Object(); protoObj.prop1 = 456; protoObj.prop2 = function(){}

// protoObj.__proto__.otherMethod = function () { console.log('this is otherMethod'); }; //deprecated syntax
Object.getPrototypeOf(protoObj).otherMethod = function () {
	console.log('this is otherMethod');
};
protoObj.otherMethod();

/// 3. childObj --> protoObj --> Object.prototype --> null

let childObj = {};
Object.setPrototypeOf(childObj, protoObj);
console.log(childObj, protoObj);
// childObj.someMethod();
// childObj.otherMethod();
// childObj.nonmethod();

/// 4. childObj2 --> protoObj --> Object.prototype --> null
let childObj2 = Object.create(protoObj); //same as 45 + 46
console.log(childObj2.prop1); // 456 comming from protoObj
childObj2.prop1 = 777; // created a new property inside childObj2 called prop1
// console.log(childObj2.prop1, childObj2.__proto__.prop1);
console.log(childObj2.prop1, Object.getPrototypeOf(childObj2).prop1);

childObj2.someMethod();
childObj2.someMethod = function () {
	console.log('new method inside childObj2');
};
childObj2.someMethod();  //logs the new method created inside childObj2
Object.getPrototypeOf(childObj2).someMethod();// logs the old someMethod at protoObj 