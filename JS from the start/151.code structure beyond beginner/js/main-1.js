/// Start using namespaces so your code doesn't conflict with other libraries

const APP = {
	today: new Date(),
	key: 'jgj3245gj23h42j34',
	init: function () {
		//function to start things of
		console.log(APP.today.toLocaleDateString());
		//add some event listeners
		APP.addListeners();
		//make a call to an API with a callback
		let url = `https://jsonplaceholder.typicode.com/posts?key=${APP.key}`;
		APP.getData(url, APP.afterFetch);
	},
	addListeners: function () {
		console.log('adding listeners to the page');
	},
	abc: () => { console.log('abc'); }, //arrow functions get a different this context
	getData(url, cb) {//modern syntax; no need for getData(): function(){}
		//do fetch call
		fetch(url)
			.then((res) => res.json())
			.then(content => {
				//call function to add content
				//call the callback
				if (cb) { cb(); }
			})
			.catch((err) => console.error);
	},
	afterFetch() { console.log('data fetch completed'); }
};

document.addEventListener('DOMContentLoaded', APP.init);

const CONTACT = {};

const CART = {};

const MAPPING = {};