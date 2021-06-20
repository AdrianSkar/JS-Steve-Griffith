const slideshow = {
	items: [],
	timmy: 0,
	delay: 3000,
	init: function () {
		// check for the slideshow container div
		if (document.querySelector('.slideshow')) {
			// create content div (eg: you might need to add buttons, links or other content)
			let divC = document.createElement('div');
			divC.className = 'content';
			document.querySelector('.slideshow').appendChild(divC);

			// load the CSS file for the slideshow
			let link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = './slideshow.css';
			document.head.appendChild(link);

			// get the slideshow content
			fetch('./slideshow.json')
				.then(response => response.json())
				// the json object is then passed to then next function
				.then(slideshow.loadContents) // as in then(data => slideshow.loadContents(data))
				.catch(err => console.log('Error', err));
		}
	},
	loadContents: function (data) {
		let df = new DocumentFragment();
		data.items.forEach((item, idx) => {
			// Add each item to the slideshow div
			let div = slideshow.createItem(item, idx);
			df.appendChild(div);
		});
		// Add the slideshow items to the page
		document.querySelector('.slideshow .content').appendChild(df);
		// Make the first one current
		document.querySelector('.slideshow-item').classList.add('current');
		// Save the array of items
		slideshow.items = document.querySelectorAll('.slideshow-item');
		// Start the slideshow moving
		slideshow.start();
	},
	createItem: function (item, index) {
		let div = document.createElement('div');
		div.classList.add('slideshow-item');
		// In case we need to target it
		div.setAttribute('data-index', index);

		let title = document.createElement('h1');
		title.textContent = item.title;
		div.appendChild(title);

		let p = document.createElement('p');
		p.textContent = item.msg;
		div.appendChild(p);

		return div;
	},
	switchItem: function (index, ev) {
		if (ev) {// In case we use buttons, links or other events
			ev.preventDefault();
		}
		let current = document.querySelector('.current');
		current.classList.remove('current');
		current.classList.add('leaving');
		setTimeout(() => {
			current.classList.remove('leaving');
		}, 800);
		slideshow.items[index].classList.add('current');
	},
	start: function () {
		slideshow.timmy = setInterval(() => {
			// Destructure slideshow.items to change order and switch them
			let [first, ...rest] = slideshow.items;
			slideshow.items = [...rest, first];
			slideshow.switchItem(0);
		}, slideshow.delay);
	}
};

document.addEventListener('DOMContentLoaded', slideshow.init);