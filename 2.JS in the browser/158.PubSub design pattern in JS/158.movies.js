import { pubsub } from './158.pubsub.js';

export const movies = {
	list: [],
	render: container => {// container = main
		let template = document.querySelector('#movie_list_template'),
			div = template.content.cloneNode(true);

		// div2 would avoid the DocumentFragment pitfall if you wanted to add 
		// event listeners to it https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#avoiding_documentfragment_pitfall
		// let	div2 = template.content.firstElementChild.cloneNode(true);

		container.appendChild(div);
		let ul = document.querySelector('.movie_container ul');
		
		// Delete movie on click:
		ul.addEventListener('click', movies.delete);

		//Listen for movieAdded messages and run `movieAdded` if so:
		console.log('MOVIES: want to know if a movie is added.');
		pubsub.subscribe('movieAdded', movies.movieAdded);
	},
	delete: ev =>{ // Delete list item, target could be a <span> so use .closest():
		let item = ev.target.closest('li'),
			name = item.textContent;
		// Update list:
		movies.list = movies.list.filter(mv => mv !== name);
		// Publish (evName, data):
		pubsub.publish('movieDeleted', movies.list);
		// Remove item from list:
		item.remove();
	},
	movieAdded: title => {
		console.log(`MOVIES: I hear that ${title} was added.`);
		// use Set to avoid/remove duplicates:
		let list = new Set(movies.list);
		list.add(title);
		// Order list:
		movies.list = Array.from(list).sort();

		// Publish evt
		console.log('MOVIES: just updated the movies list');
		pubsub.publish('moviesUpdated', movies.list);

		//Update UI with the new list:
		let ul = document.querySelector('.movie_container ul');
		let df = new DocumentFragment();
		movies.list.forEach(movie =>{
			let li = document.createElement('li');
			li.innerText = movie;
			df.appendChild(li);
		});
		ul.innerHTML = ''; // Clean old list.
		ul.appendChild(df);
	}
};
