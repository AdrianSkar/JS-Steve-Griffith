// creating private variables in JS with functions
// IIFE - immediately invoked function expression

let obj = (function () {
	let _prop1 = 'Starman';
	return {
		prop2: 1981,
		get prop1() {
			return 'Movie: ' + _prop1;
		},
		set prop1(_val) {
			_prop1 = _val;
		}
	};
})();

for (let prop in obj) {
	console.log(prop);
}

console.log(obj.prop2);
console.log(obj.prop1);
obj.prop1 = 'The big Lebowski';
console.log(obj.prop1);
console.log(obj._prop1);


