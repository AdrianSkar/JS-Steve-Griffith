/*
Math.round(), Math.floor(), Math.ceil(), Number.parseInt() and Number.parseFloat(): return Number
Number.toFixed(), Number.toExponential, Number.toPrecision(): return String
*/

let number1 = 1111.567;
let str1 = '1111.567 tonnes of apple sauce';
let dec1 = 0.000161;

console.log(Math.round(number1));
console.log(Math.floor(number1));
console.log(Math.ceil(number1));

console.log(number1.toFixed(2));
console.log(number1.toFixed(1));
console.log(number1.toExponential(2)); // 1.11 * 10^3
console.log(number1.toExponential(6));
console.log(dec1.toPrecision(2)); // first x digits starting at the first significant (non-zero) one

// These work because str1 starts with a number
console.log(parseInt(str1));
console.log(parseFloat(str1));