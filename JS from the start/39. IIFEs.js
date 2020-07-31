// IIFE - Immediately invoked function expressions

(function doSomething() {
	// function declaration
	console.log('Hello');

})();

const somethingElse = (function (nm) {
	// function expression
	return {
		name: nm,
		id: 123,
		x: function () {
			console.log('Inner function');

		}
	};

})('Bob');

console.log(somethingElse.name, somethingElse.id);
somethingElse.x();

// doSomething;			// Like shouting out a name - does nothing.
// doSomething();		// Actually runs the function and waits for a return value.

// somethingElse;
// somethingElse();	// Actually runs the function and waits for a return value.

