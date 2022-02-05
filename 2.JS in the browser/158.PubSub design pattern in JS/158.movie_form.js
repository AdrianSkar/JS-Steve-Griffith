import { pubsub } from './158.pubsub.js';

export const movieForm = {
	render: container => {
		let template = document.querySelector('#movie_form_template'),
			form = template.content.cloneNode(true);
		form.querySelector('button').addEventListener('click', movieForm.add);
		container.appendChild(form);
	},
	add: ev => {
		ev.preventDefault();
		let input = document.querySelector('.movie_form input'),
			title = input.value;

		// Publish/announce evt:
		console.log(`MOVIE FORM: movieAdded ${title}`);
		pubsub.publish('movieAdded', title);

		input.value = ''; // Clear the form
	},
};
