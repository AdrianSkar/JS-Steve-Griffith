// built-in callback functions
// setTimeout, Arr.forEach, geolocation.getCurrentPosition
// make your own callback functions

function doThing(other) {
	let x = 7;
	//do other things.
	//..
	let name = 'Steve';

	other(name);
}

function hello(nm, idx, arr) {
	console.log('Hello', nm);
}

hello("stever");
doThing(hello);


setTimeout(hello, 2000, 'Bob'); //hello is the callback function

let names = ['Inga', 'Tom', 'Mattias', 'Carlos'];

names.forEach(hello);//forEach calls hello one time for each element in the array; hello('Inga'), hello('Tom'), etc

// navigator.geolocation.getCurrentPosition(gotPosition, positionError, {});

// function gotPosition(pos){

// }

// function positionError(err){

// }


