/*jshint esversion: 6*/

// "use strict"; // Prevents global context from being infered at myFunc, myFunc()
// has to be 'explicit'.

let box = document.querySelector('.box');

let myFunc = function () {
	console.log('1', this); // box on addEventListener triggered this action
	setTimeout(() => {
		console.log('3', 'timed out', this);

	}, 250);
};
let myFunc2 = () => {
	console.log('2', this);
	// When using arrow functions `this` no longer gets the
	// context, it gets the lexical scope version of the keyword `this` (myFunc2 
	// was declared on the global context).

	setTimeout(() => {
		console.log('3', 'timed out', this);

	}, 250);
};

box.addEventListener('mousedown', myFunc); // `this` points to box
box.addEventListener('mouseup', myFunc2);

// myFunc(); // Hasn't context (box.eventListener) so it behaves as myFunc2
// myFunc.call(window.document.title); // Provides window.document.title as context 
// myFunc.call(box); //  Provides box as context

// myFunc(); // Hasn't context (box.eventListener) so it behaves as myFunc2
// myFunc.apply(window.document.title); // Provides window.document.title as context 
// myFunc.apply(box); //  Provides box as context

// myFunc2(); // Window
// myFunc2.call(window.document.title); // Window
// myFunc2.call(box); //  Window (where myFunc2, it's parent, was declared)
