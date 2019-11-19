/*jshint esversion: 6*/

// load the sample weather JSON data
// build a grid of temps over the news 24 hours
// blue background in hours where precipitation possibility ir higher than 70%

let uri = 'http://files.adrianskar.com/test/49.darksky%20data%20sample.json';
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
				div.classList.add('hour');

				//show the time
				let span = document.createElement('span');
				span.textContent('00:00');

				div.appendChild(span);
				df.appendChild(div);
			});
			container.appendChild(df);

			//highlight the times when it'll be raining

			// highest temp
		})
		.catch((err) => {
			console.log(err.message);

		});
}