'use strict';

var test = [1, 2, 3];
var test2 = [].concat(test);
console.log(test, test2);

var arrow = function arrow() {
	console.log('hey');
};

arrow();
var obj = {
	testFn: function testFn() {
		console.log('test');
	},
};
obj.testFn();
