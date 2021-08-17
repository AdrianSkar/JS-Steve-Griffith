// EvalError, InternalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError

// throw 'test';
// console.log("Hello"); // Unreachable code after throwing error

try {
	// throw 'ErrorMessage';
	// throw {name: 'Bubba', message: 'Salmon'};
	throw new Error('A stick');
	// console.log('Hello'); // Doesn't run because an error ocurred before
} catch (err) {
	// console.log('Caught', err.name, err.message); 
	console.log('Caught', err.name, err.message);
} finally {
	console.log('Log this regardless of errors.');

}

console.log('End'); // This runs because try...catch doesn't stop the program from running, it 'catches' the error