/*jshint esversion: 6*/

// String split and Array join methods
// Converting strings to arrays and arrays to strings
// str.split()
// arr.join()

const sentence = 'Hello there';
const abc = 'b c a';
const arr = sentence.split('');

console.log(sentence.split(' ').join(','));
console.log(arr.sort());

console.log(arr);
console.log(arr.join('-'));

console.log(sentence.split('o'));

const newStr = arr.join('|');
console.log(newStr);

const sortedNew = abc.split('').sort().join('');
console.log(sortedNew);




