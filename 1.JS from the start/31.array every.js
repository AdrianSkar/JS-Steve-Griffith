// Array every()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// checks every element to see if it returns true

const numbers = [40, 16, 67, 345, 22, 23, 142, 63, 59, 283];

const testA = numbers.every(function (val) {
	return val > 1;
});
console.log(testA);

const testB = numbers.every(val => val > 100);
console.log(testB);

const testC = numbers.every(function (val, index) {
	console.log(index, ':', val);
	return val > 2;
});
console.log(testC);


