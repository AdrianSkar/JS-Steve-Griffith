import { pubsub } from './158.pubsub.js';

export const actors = {
	list: [],
	render: container => {
		// container = main
		let template = document.querySelector('#actor_list_template'),
			div = template.content.cloneNode(true);

		// div2 would avoid the DocumentFragment pitfall if you wanted to add
		// event listeners to it https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#avoiding_documentfragment_pitfall
		// let div2 = template.content.firstElementChild.cloneNode(true);

		container.appendChild(div);
		let ul = document.querySelector('.actor_container ul');

		// Delete actor on click:
		ul.addEventListener('click', actors.delete);

		//Listen for actorAdded messages and run `actorAdded` if so:
		console.log('ACTORS: want to know if a actor is added.');
		pubsub.subscribe('actorAdded', actors.actorAdded);
	},
	delete: ev => {
		// Delete list item, target could be a <span> so use .closest():
		let item = ev.target.closest('li'),
			name = item.textContent;
		// Update list:
		actors.list = actors.list.filter(act => act !== name);
		// Publish (evName, data):
		pubsub.publish('actorDeleted', actors.list);
		// Remove item from list:
		item.remove();
	},
	actorAdded: title => {
		console.log(`ACTORS: I hear that ${title} was added.`);
		// use Set to avoid/remove duplicates:
		let list = new Set(actors.list);
		list.add(title);
		// Order list:
		actors.list = Array.from(list).sort();

		// Publish (evName, data):
		console.log('ACTORS: just updated the actors list');
		pubsub.publish('actorsUpdated', actors.list);

		//Update UI with the new list:
		let ul = document.querySelector('.actor_container ul');
		let df = new DocumentFragment();
		actors.list.forEach(actor => {
			let li = document.createElement('li');
			li.innerText = actor;
			df.appendChild(li);
		});
		ul.innerHTML = ''; // Clean old list.
		ul.appendChild(df);
	},
};
