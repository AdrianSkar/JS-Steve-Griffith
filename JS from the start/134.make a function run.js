function rick() {/// function declaration
	console.log("Let's get Schwifty!");
}
let morty = function () { /// function expresssion
	// console.log("I don't think that this is such a good idea Rick.");
	console.log(this);
};
let summer = f1 => { /// arrow function
	console.log("About to call another function");
	f1(); //f1.call(), f1.apply()
};

// morty(); // parentheses makes it run
// rick.call(null); /// 2. Using call, apply, bind
// rick.apply(global);
let o = {};
let m = morty.bind(o); // m is a copy of morty with o bound to it
// m();

// summer(m); /// 3. Passing along function references as parameters
// summer(rick);

function Meeseeks() { /// Constructor function
	console.log("I'm Mr. Meeseeks");
	this.hello = function () { console.log('Hello'); };
	this.goodbye = () => { console.log('Goodbye'); };
}
Meeseeks.prototype.help = function () {//objects of type Meeseeks will be able to use this function
	console.log('What can I help you with?');
};
let me = new Meeseeks(); /// 4. Call a constructor using new
console.log(me);
me.help(); /// 5. Call a method on the prototype of an object
me.hello(); /// 6. Call a method on an object
me.goodbye();

/// 7 . Event listener on Node with EventEmitter and listener to call a function
const EventEmitter = require("events");
const Schwift = new EventEmitter();
Schwift.on("schwifty", msg => {
	console.log("SCHWIFTY:", msg);
});
setTimeout(function () {
	Schwift.emit("schwifty", "we got schwifty");
}, 2000);

/// 8. Event listener on browsers to call a function

// let Schwift = new CustomEvent("schwifty");
// class myObj extends EventTarget { //allowed to receive/listen for events
// 	constructor() {
// 		super();
// 	}
// 	log(ev) {
// 		console.log("Event", ev); // Schwift event object
// 	}
// }

// let obj = new myObj;
// obj.addEventListener("schwifty", obj.log);
// obj.addEventListener("schwifty", ev => console.log(ev.type)); //"schwifty"
// setTimeout(function () {
// 	obj.dispatchEvent(Schwift); //trigger the two event listeners for "schwift"
// }, 1000);