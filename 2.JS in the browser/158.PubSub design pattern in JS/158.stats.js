import { pubsub } from './158.pubsub.js';

export const stats = {
	render: container => {
		// Build stats container and default content:
		let d = document.createElement('div');
		d.className = 'stats_container';
		container.appendChild(d);
		let pm = document.createElement('p');
		pm.className = 'movie_count';
		pm.textContent = '0 movies in list';
		let pa = document.createElement('p');
		pa.className = 'actor_count';
		pa.textContent = '0 actors in list';
		d.append(pm, pa);

		// Subscribe to movie updates/deletions:
		pubsub.subscribe('moviesUpdated', stats.moviesUpdated);
		pubsub.subscribe('movieDeleted', stats.moviesUpdated);
		console.log('STATS: listening for moviesUpdated.');

		// Subscribe to actor updates/deletions:
		pubsub.subscribe('actorsUpdated', stats.actorsUpdated);
		pubsub.subscribe('actorDeleted', stats.actorsUpdated);
		console.log('STATS: listening for actorsUpdated.');

	},
	moviesUpdated: list =>{
		console.log(`STATS: I hear that the movie list now has ${list.length} items, updating...`);
		document.querySelector('.movie_count').textContent = `${list.length} movies listed.`;
	},
	actorsUpdated: list =>{
		console.log(`STATS: I hear that the actor list now has ${list.length} items, updating...`);
		document.querySelector('.actor_count').innerText = `${list.length} actors listed.`;
	}
};
