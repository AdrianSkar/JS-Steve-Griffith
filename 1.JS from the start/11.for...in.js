// for...in

const monsters = {
	'Canada': 'Sasquatch',
	'Nepal': 'Yeti',
	'Scotland': 'Loch Ness monster'
};

console.log(monsters.length);
// No length properties in objects

for (const prop in monsters) {
	console.log(prop);
	console.log(monsters[prop]);
	console.log('In', prop, 'we have the', monsters[prop]);
	//When using commas in console.log you don't need extra spaces as they will be added  automatically
}

const pets = ['Woody', 'Roxy', 'Bob'];

for (const prop2 in pets) {
	console.log('In', prop2, 'we have', pets[prop2]);
	//Prop becomes the counter and pets is the array we are looping through

}