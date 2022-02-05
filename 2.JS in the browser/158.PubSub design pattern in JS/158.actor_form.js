import { pubsub } from './158.pubsub.js';
import { actors } from './158.actors.js';

export const actorForm = {
	render: container => {
		let template = document.querySelector('#actor_form_template'),
			form = template.content.cloneNode(true);
		form.querySelector('button').addEventListener('click', actorForm.add);
		form.querySelector('#unsubs').addEventListener('click', actorForm.unsubscribe);
		container.appendChild(form);

	},
	add: ev => {
		ev.preventDefault();
		let input = document.querySelector('.actor_form input'),
			title = input.value;

		// Publish/announce evt:
		console.log(`ACTOR FORM: actorAdded ${title}`);
		pubsub.publish('actorAdded', title);

		input.value = ''; // Clear the form
	},
	unsubscribe: ev =>{// Unsubscribe actors:
		ev.preventDefault();
		console.log('unsubscribe');
		pubsub.unsubscribe('actorAdded', actors.actorAdded);
	}
};
