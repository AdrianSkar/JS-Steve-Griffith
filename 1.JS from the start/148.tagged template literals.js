let num = 41;
let str1 = `"\t" and "\n" are escape sequences. ${num}`;
let str2 = `"\\t" and "\\n" are escape sequences. ${num}`;
let str3 = String.raw`"\t" and "\n" are escape sequences. ${num}`;
let str4 = `The meaning of life is ${num + 1}`;

console.log(1, str1);
console.log(2, str2);
console.log(3, str3);
console.log(4, str4);

let first = 'ham';
let second = 'pineapple';
let txt = f`I don't like pizza with ${first} and ${second}.`;

console.log(txt);

function f(strings, ...expressions) {
	return expressions.reduce((acc, exp, idx) => {
		return acc + exp.toUpperCase() + strings[idx + 1];
	}, strings[0]);
}