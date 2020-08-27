//Array filter() method

const numbers = [23, 45, 14, 66, 94, 33, 4, 9];
const breakPoint = 30;

let smallNumbers = numbers.filter(item => item < breakPoint);

let bigNumbers = numbers.filter(function (item) {
	return item > breakPoint;
});

// let oddNumbers = numbers.filter(item => ((item % 2) !== 0));
let oddNumbers = numbers.filter(item => ((item % 2))); //Same as before (returns true)
// let oddNumbers = numbers.filter(item => ((item & 1))) //Bitwise operator returning only binary numbers ending in 1, that happen to be odd ones.

console.log('\nSmaller than 30: ', smallNumbers);
console.log('\n Larger than 30: ', bigNumbers);
console.log('\n Odd numbers: ', oddNumbers);

