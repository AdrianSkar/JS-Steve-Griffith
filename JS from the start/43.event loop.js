console.log('Hi');

setTimeout(function () {
	console.log('Last');

}, 0); //Even though its 0 this resides in the event loop until the stack is empty. 

console.log(' there.');

// Time for the task queue (event loop)
// Result: Hi there. Last