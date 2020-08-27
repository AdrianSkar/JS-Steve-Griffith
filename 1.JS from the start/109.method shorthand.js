let obj = {
	prop1: 123,
	prop2: 'abc',
	prop3: true,
	prop4: function () { // keeps the this context
		console.log(obj);
		console.log(this);
	},
	prop5: () => { // this refers to the global object because of the arrow function
		console.log(obj);
		console.log(this);
	},
	prop6() {//method shorthand: same as prop4 but shorter
		console.log(obj);
		console.log(this);
	}
};

obj.prop4();
obj.prop5();
obj.prop6();
