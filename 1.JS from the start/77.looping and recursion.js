
let fetch = require('node-fetch');
const { format } = require('path');
let url = 'http://jsonplaceholder.typicode.com/comments?postId=42l/';
let count = 0;
let size = 12;

//Looping

console.log('Starting the loop');
for (let i = 0; i < 10; i++) {
	console.log('inside the loop', i);
}
console.log('End of loop');

//Recursion

let recur = function () {
	console.log('Inside recur', count);
	count++;
	if (count < 10) {
		recur();
	}
};
console.log('Before recursion');
recur();
console.log('End of recursion');

//Recursion for countdowns

let countD = function () {
	console.log('x'.repeat(size));
	size = Math.floor(size * 0.95);
	if (size > 2) {
		countD();
	}
};
countD();

//Asynchronous methods; Ajax, DBs, Promises, Timers...

console.log('about to fetch');
for (let c = 0; c < 2; c++) {
	let d = fetch(url)
		.then(response => response.json())
		.then(data => console.log('data', JSON.stringify(data)));
	console.log(c, d);
}
console.log('after fetch??');

/* This would log:

about to fetch
0 Promise { <pending> }
1 Promise { <pending> }
after fetch??
data {'the requested data'};
data {'the requested data'};

Because its an asynchronous request/process and happens outside the main thread even if assigned to a variable inside a loop.
*/