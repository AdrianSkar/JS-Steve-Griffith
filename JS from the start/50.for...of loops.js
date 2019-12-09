/*jshint esversion: 6*/

// for ... of loops vs for ... in loops

let supernatural = {
	'actors': ['Jared Padelecki', 'Jensen Ackles', 'Mark Sheppard', 'Misha Collins'],
	'characters': ['Sam Winchester', 'Dean Whinchester', 'Crowley', 'Castiel'],
	'seasons': 12
};


for (const prop in supernatural) {
	console.log(prop); // actors, characters, seasons
	console.log(Array.isArray(supernatural[prop]));	// true, true, false
}

for (const prop in supernatural.actors) {
	console.log(prop, supernatural.actors[prop]); // 1 Jared Padelecki, ` Jensen Ackles, etc
}

for (const chars of supernatural.characters) {
	console.log(chars);// Sam Winchester, Dean... 