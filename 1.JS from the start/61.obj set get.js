// es6 object methods
// getter and setters for object properties

let x = 7;

let obj = {
	_prop1: 1979, // hidden/private prop
	get prop1() {
		return this._prop1;
	},
	set prop1(_val) {
		this._prop1 = _val;
	},
	prop2: "Alien",
	x, // ES6: if not defined inside scope, takes the value of the outer one: 7
	prop3() {
		console.log('called prop3'); // ES6: no longer need for prop3: function(){}
	}
};

obj.prop3();
console.log(obj.x);

console.log(obj.prop1); // 1979, user access obj property without knowing about _prop1
obj.prop1 = 1980; // uses sets property as usual without knowing about _prop1
console.log(obj.prop1); // 1980
