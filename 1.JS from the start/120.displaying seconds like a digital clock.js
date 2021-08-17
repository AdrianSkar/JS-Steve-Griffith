// 00:00:00


let seconds = 3590;

function showTime() {
	//update the time as hours, minutes and seconds as 00:00:00
	seconds++;
	let hours = Math.floor(seconds / 3600);
	let minutes = Math.floor((seconds / 60) - (hours * 60));
	let secs = Math.floor(seconds % 60);

	let display = (val => val.toString().padStart(2, '0'));
	let output = display(hours) + ':' + display(minutes) + ':' + display(secs);

	console.log(output);
}

let timmy = setInterval(showTime, 1000);