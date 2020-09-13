// DocumentFragment constructor

const movies = ['The shawshank redemption', 'Pulp fiction', 'Fight club', 'Forrest gump', 'The usual suspects', 'Apocalypse not', 'Reservoir dogs', 'Toy story', 'Monty Python and the holy grail', 'Die hard', 'The bridge on the river Kwai', 'Boondock saints'];

let movieList;

document.addEventListener('DOMContentLoaded', init);

function init() {
	movieList = document.getElementById('movies');

	// "Bad"/non-preforming approach (add one movie at a time)
	// movies.forEach(function (movie) {
	// 	let li = document.createElement('li');
	// 	li.textContent = movie;
	// 	li.className = 'bad';
	// 	movieList.appendChild(li);
	// });

	// "Good" approach, take advantage of DocumentFragment's constructor and use it to add every movie at once
	let frag = new DocumentFragment();
	movies.forEach(movie => {
		let li = document.createElement('li');
		li.textContent = movie;
		li.classList.add('good');
		frag.appendChild(li);
	});
	movieList.appendChild(frag);
}
