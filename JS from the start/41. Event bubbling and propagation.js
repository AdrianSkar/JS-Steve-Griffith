/*jshint esversion: 6*/
// element.addEventListener(type, func, useCapture);
// Capture: from outside 
// Bubbling: from inside (default, false)

let m = document.getElementById('m');
let d = document.getElementById('d');
let p = document.getElementById('p');
let s = document.getElementById('s');

let highlight = (ev) => {
	// Add CSS class gold to the clicked element
	let target = ev.currentTarget;
	target.className = 'gold';
	ev.stopPropagation(); // stops the bubbling 
	reset(target); // resets the background class after 2secs
};

let reset = (_element) => {
	setTimeout(() => {
		_element.className = '';
	}, 2000);
}

d.addEventListener('click', (ev) => {
	// ev.stopImmediatePropagation(); //stops other elements from listening to click events from this point, including the below ones
	console.log('Hi, I am a DIV');
});
p.addEventListener('click', (ev) => {
	// ev.stopImmediatePropagation(); //stops other elements from listening to click events from this point, including the below ones
	console.log('Hi, I am a paragraph');
});
s.addEventListener('click', (ev) => {
	// ev.stopImmediatePropagation(); //stops other elements from listening to click events from this point, including the below ones
	console.log('Hi, I am a span');
});

[m, d, p, s].forEach((element) => {
	element.addEventListener('click', highlight);
});
