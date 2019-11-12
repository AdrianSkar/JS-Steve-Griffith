/*jshint esversion: 6*/


// Keyboard events in the browser
// ev.char || ev.charCode || ev.which
// keydown, keyup, keypress

document.addEventListener('DOMContentLoaded', init);

function init() {
	let txt = document.getElementById('txt');
	txt.addEventListener('keydown', anyKey);
	document.body.addEventListener('keydown', anyKey);
}

function anyKey(ev) {
	// console.log(ev.type, ev.target);
	let target = ev.currentTarget;
	let tag = target.tagName;
	let char = ev.char || ev.charCode || ev.which; // assigns the first one existing (truthy) to 'char'
	let s = String.fromCharCode(char);
	console.log(target, tag, char, s);

	switch (char) {
		case 37:
			console.log('Left');

			break;
		case 38:
			console.log('Up');

			break;
		case 39:
			console.log('Right');

			break;
		case 40:
			console.log('Down');

			break;

	}
}