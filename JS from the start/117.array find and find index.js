let cities = ['Ankara', 'Istanbul', 'Antalya', 'Bursa', 'Trabzon'];
let city = 'Bursa';

// let match1 = cities.find(item => {
// 	if (city === item) {
// 		return true;
// 	}
// });
let match1 = cities.find(item => city === item);

console.log('.find match: ', match1);

let chars = 7;
let match2 = cities.find(item => chars === item.length);
console.log('.find item chars vs length: ', match2);

let index0 = cities.findIndex(item => item === city);
console.log(index0);

let index = cities.findIndex(item => item.toLocaleLowerCase().indexOf('t') > -1);
console.log(`letter "t" found in item at index ${index}`);

let person = {
	id: 123,
	name: 'Recep',
	town: 'Istanbul'
};

// //Original solution
let match3 = cities.find(function (item) {
	if (item === this.town) {
		return true;
	}
}, person);
console.log(person.name, 'lives in ', match3);

// //function without this (hardcoded object)
let match4 = cities.find(function (item) {
	if (item === person.town) { return true; }
});
console.log(person.name, 'lives in', match4);

// //arrow (no this, hardcoded object)
let match5 = cities.find(item => item === person.town);
console.log(person.name, 'lives in', match5);

