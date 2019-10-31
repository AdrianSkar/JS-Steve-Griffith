/*jshint esversion: 6*/

//Promises basics 
// wrappers for anything async
// ajax calls, reading files, timeouts, geolocation, talk to a database or anything that would use a callback function
// use them to get rid of callback hell
// fetch() returns a Promise.

// const result = multiplyTwoNumbers(5, 10);
// console.log(result); // 50 synchronous task

// const photo = downloadPhoto('http://localhost/cat.jpg');
// //photo would be undefined (asynchronous task)

const rand = () => Math.floor(Math.random() * 10) + 1;

let p1 = new Promise((resolve, reject) => {
	let x = 5;
	//resolve(x); //calling this will call then()
	// reject(x);
	let num = rand();
	setTimeout(resolve, 1500, num);
});

p1.then((ex) => {
	console.log(ex);
	return ex * 2;
}).then((x) => {
	console.log(x);
	return x + 3;
}).then((y) => {
	console.log(y);
}).catch((exx) => {
	console.log('caught', exx);
});