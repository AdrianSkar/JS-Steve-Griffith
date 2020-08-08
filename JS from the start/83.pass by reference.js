// let x = 'a';
// let z = x;
// console.log(x);
// console.log(z);
// z = 'b';
// console.log(x);
// console.log(z); //Doesn't change because it's a primitive value (pass by value), but with objects vars a really just pointers (pass by reference)

let names = ['Bob', 'Kata', 'Tom', 'Gene', 'Tina'];

let f = function (arr) {
	let a = Array.from(arr);
	let r = [].concat(arr);
	arr.push('Mort');
	a.push('Belcher');
	console.log(arr);
	console.log(names);
	console.log(a);
	console.log(r);
};

f(names);

//Unfinished