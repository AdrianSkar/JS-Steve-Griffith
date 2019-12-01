/*jshint esversion: 6*/

// load the sample weather JSON data
// build a grid of temps over the news 24 hours
// blue background in hours where precipitation possibility ir higher than 70%

let uri = './49.darksky%20data%20sample.json';
let req = new Request(uri, { method: 'GET' });
let container, df;


document.addEventListener('DOMContentLoaded', init);

function init() {
	container = document.getElementById('container');
	df = new DocumentFragment();

	fetch(req)
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			else { throw new Error('Bad HTTP'); }
		})
		.then((json) => {
			//create the weather grid
			json.hourly.data.forEach((hour) => {
				//show temp
				let div = document.createElement('div');
				div.classList.add('hour');  // A div for each hour
				let timestamp = hour.time;
				div.id = 'ts_' + timestamp.toString(); // Add the timestamp to each div as an ID
				let temp = parseInt(hour.temperature);
				div.textContent = temp.toString().concat('\u00B0');
				div.title = hour.summary;
				//show the time
				let span = document.createElement('span');
				let timmy = new Date(timestamp * 1000);
				span.textContent = timmy.getHours().toString().concat(':00');

				div.appendChild(span);
				df.appendChild(div);
			});
			container.appendChild(df);

			//highlight the times when it'll be raining
			json.hourly.data.filter((hour) => {
				if (hour.precipProbability > 0.5) { // filter input by precipProb
					return true;
				}
			}).map((hour) => { // Create an array including just the time properties
				return hour.time;
			}).forEach((timestamp) => {
				let id = 'ts_'.concat(timestamp);
				document.getElementById(id).classList.add('precip'); // Add the correspondent class to IDs matching the timestamp
			});

			// Same with temps
			// PREVIOUS WAY
			// json.hourly.data.filter((hour) => {
			// 	if (hour.temperature > 18) {
			// 		return true;
			// 	}
			// }).map((hour) => {
			// 	return hour.time;
			// }).forEach((timestamp) => {
			// 	let id = 'ts_'.concat(timestamp);
			// 	document.getElementById(id).classList.add('hot');
			// });

			// MY ATTEMPT
			json.hourly.data.reduce((acc, curr) => {
				if (curr.temperature > 18) {
					let id = 'ts_'.concat(curr.time);
					document.getElementById(id).classList.add('hot');
				}
			});

			// highest temp

			let highObj = json.hourly.data.reduce((acc, curr) => {
				if (curr.temperature > acc.temperature) {
					return curr;
				}
				else {
					return acc;
				}
			}, { temperature: -100 });
			console.log(highObj);

			let hotestId = 'ts_'.concat(highObj.time);
			document.getElementById(hotestId).classList.add('hotest');
		})
		.catch((err) => {
			console.log(err.message, err);

		});
}