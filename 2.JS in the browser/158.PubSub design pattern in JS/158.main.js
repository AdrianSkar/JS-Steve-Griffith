import { movies } from './158.movies.js';
import { movieForm } from './158.movie_form.js';
import { actors } from './158.actors.js';
import { actorForm } from './158.actor_form.js';
import { stats } from './158.stats.js';

document.addEventListener('DOMContentLoaded', () => {
	let main = document.querySelector('main'),
		aside = document.querySelector('aside');

	// Add modules:
	movies.render(main);
	movieForm.render(aside);
	actors.render(main);
	stats.render(aside);
	actorForm.render(aside);
	
});
