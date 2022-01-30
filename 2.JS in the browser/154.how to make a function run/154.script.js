/* eslint no-unused-vars: 'off', no-undef: 'off'*/

function declaredFn() {
	// Function declaration
	console.log('Ran declaredFn');
}
declaredFn(); // 1. Parenthesis make functions run

let fnExpr = function () {
	// Function expression
	console.log('Ran fnExpr');
	console.log(this); // Global obj. or spec. with bind
};
// fnExpr.call(null); // 2. using call, apply and bind
// fnExpr.apply(this); // global obj.

let obj = { name: 'Adrian' },
	boundFn = fnExpr.bind(obj);
// boundFn(); // {'name': 'Adrian'}

let paramFn = fn => {
	console.log('About to call function passed as parameter');
	fn();
};
paramFn(boundFn); // boundFn -> fnExpr.bind(obj) -> {'name':'Adrian'}

function Constructed() {
	// Constructor function
	console.log('Ran Constructed function');
	this.hello = function () {
		console.log('Hello');
	};
	this.goodbye = () => {
		console.log('Goodbye');
	};
}
Constructed.prototype.help = () => {
	// Objects of type Constructed will be able to use this function.
	console.log("Ran Constructed's help function");
};

let construct = new Constructed(); // 4. Call a constructor using `new`.
console.log(construct);
construct.help(); // 5. Call a method on the prototype of an object.
construct.hello(); // 6. Call a method on an object.

// 7. Events (node/browser)

/// NodeJS version with EventEmitter and listener to call a function
// const EventEmitter = require('events'),
// 	emitEvt = new EventEmitter();
// emitEvt.on('listenerName', msg => {
// 	console.log(`Triggered listenerName on emitEvt with msg: ${msg}`);
// });
// setTimeout(() => {
// 	emitEvt.emit('listenerName', 'Message content');
// }, 1000);

/// Browser version with EventListener to call a function
document.addEventListener('DOMContentLoaded', () => {
	let cusEvent = new CustomEvent('custEventName');
	class MyObj extends EventTarget {
		// Allowed to receive/listen for events
		constructor() {
			super();
		}
		log(ev) {
			console.log('Custom event: ', ev); // cusEvent event object
		}
	}

	let customObj = new MyObj();
	customObj.addEventListener('custEventName', customObj.log);
	customObj.addEventListener('custEventName', ev => console.log(ev.type)); // 2nd listener
	// setTimeout(() => {
	// 	customObj.dispatchEvent(cusEvent); // Trigger the two listeners for `custEventName`
	// }, 1000);

	let btn = document.getElementById('browser_evt');
	btn.addEventListener('click', () => {
		customObj.dispatchEvent(cusEvent);
	});
});
