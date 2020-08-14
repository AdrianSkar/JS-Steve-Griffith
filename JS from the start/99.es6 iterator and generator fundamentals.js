/* 
Arrays, strings, maps, sets, nodelists - built-in iterators

{Object} => Iterator => Generator
*/

let characters = ['Finn', 'Poe', 'Rey', 'Kylo', 'Luke', 'Leia'];

function* genny() {
	yield characters[0];
	yield characters[1];
	yield characters[2];
	yield 'b';
	return false;
	yield 'c';
	yield 'd';
}

let iter = genny();
console.log(iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

let starwars8 = {
	title: 'The last jedi',
	director: 'Rian Johnson',
	year: 2017,
	boxOffice: '1.3B'
};

let count = -1;
let SW8 = {
	[Symbol.iterator]: function (obj) {
		return {
			next: () => {
				count++;
				switch (count) {
					case 0:
						return {
							value: obj.title, done: false
						};
					case 1:
						return {
							value: obj.year, done: false
						};
					case 2:
						return {
							value: obj.director, done: false
						};
					case 3:
						return {
							value: undefined, done: true
						};
					default:
						return {
							value: undefined, done: true
						};
				}
			}
		};
	}
};

let data = SW8[Symbol.iterator](starwars8);
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());

//
//for(let p of starwars8){
//    for of loops are using the .next( ) method behind the scenes
//}