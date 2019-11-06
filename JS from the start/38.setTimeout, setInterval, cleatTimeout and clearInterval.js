/*jshint esversion: 6*/

function log(msg) {
	console.log('Message', msg);
	clearInterval(tommy);// clears tommy
}

let timmy = setTimeout(log, 2000, 'Hello', 12, true); // 2 secs, runs once
clearTimeout(timmy); //clears timmy before it reaches 2sec

let tommy = setInterval(log, 5000, 'Goodbye');// Runs every 5sec



