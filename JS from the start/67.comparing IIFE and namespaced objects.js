// Comparing Immediately Invoked Function Expressions (IIFE)
// and namespaces as wrappers for your code

let objNS = {
	name: 'Object namespace',
	init: function () {
		//start the ball rolling
		objNS.name = 'New value';
		objNS.action();
		this.action();
	},
	action: function () {
		console.log('objNS.name');
	}
};
objNS.init();

//////////////////////////////////////////////////////

let objIIFE = (function () {
	let privateVar = 'private variable';
	let privateFun = function () {
		console.log('private function running');
	};
	let x = function () {
		//start the ball rolling
		console.log(privateVar);
	};
	x();
	return {
		name: 'Object IIFE',
		init: x,
		action: function () {
			privateFun();
		}
	};
})();
//Up to this point x() was run and objIIFe returned the return object

objIIFE.init();
objIIFE.action();