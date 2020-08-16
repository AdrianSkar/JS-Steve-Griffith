let counter = 0;
let names = ['Bob', 'Rina', 'Gene', 'Mort', 'Louise', 'Ollie'];

//closure so we are good
names.forEach(looper);

//closure so we are good
for (let i = 0; i < names.length; i++) {
	looper(names[i], i, names);
}

//closure so we are good
for (var i = 0; i < names.length; i++) {
	looper(names[i], i, names);
}

function looper(item, index, arr) {
	setTimeout(function () { console.log(index, item); }, 1000 * index);
	//this function creates the closure
	if (counter < 6) {
		console.log('forEach', index, item);
	}
	else if (counter > 5 && counter < 12) {
		console.log('for let', index, item);
	} else {
		console.log('for var', index, item);
	}

	counter++;
}

//no closure; fails
for (var i = 0; i < names.length; i++) {//undefined, var is global and already reached 6 when setTimeout content gets processed. No closure. Use let to create a local scope
	setTimeout(function () {
		console.log('SAD', i, names[i]);
	}, 1000 * i);
}

//"rework" to create closure
for (var i = 0; i < names.length; i++) {
	//version one - works
	setTimeout((function (num) {
		console.log('ONE', num, this[num]);
	}).bind(names, i), 1000 * i);

	//version two - works
	setTimeout((num) => {
		console.log('TWO', num, names[num]);
	}, 1000 * i, i);
	//the key is to pass a copy of i into the function to be used later... the closure
}
