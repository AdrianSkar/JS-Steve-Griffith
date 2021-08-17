// Event-driven programming: your program waits for events and uses them as triggers to run the next function(s)

// object.addEventListener(event, function)

// myDiv.addEventListener('click', doSomething);

// function doSomething(ev) {
// 	console.log(ev.type); // Click
// 	console.log(ev.target);
// 	return 7;
// }
document.addEventListener('DOMContentLoaded', init);

function init() {
	let btn = document.getElementById('btn');
	let lnk = document.getElementById('lnk');
	let txt = document.getElementById('txt');

	btn.addEventListener('click', btnClicked);
	function btnClicked(ev) {
		console.log(ev.type, ev.target, ev.currentTarget);

	}

	lnk.addEventListener('click', lnkClicked);
	function lnkClicked(ev) {
		event.preventDefault(); // Prevents the link to redirect/follow when clicked
		console.log(ev.type, ev.target, ev.currentTarget);
	}

	txt.addEventListener('input', ev => {
		console.log(ev.target, ev.target.value, 'input');
	});

	txt.addEventListener('change', ev => { console.log(ev.target.value, 'change'); });
	txt.addEventListener('blur', ev => { console.log(ev.type, 'blur'); });
}


