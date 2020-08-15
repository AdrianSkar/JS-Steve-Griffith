/*
Polyfill
*/

if (!Array.prototype.justLetter) {
	// console.log('justLetter method missing');
	Array.prototype.justLetter = function (letter) {
		let arr = this.filter((item) => {
			if (typeof item !== 'string') return false;
			return item.indexOf(letter) > -1;
		});
		return arr;
	};
}

let names = ['abc', 'def', 'ghi', { 'a': 1 }, 'cab', 'dac'];
console.log(names);
console.log(names.justLetter('d'));
let names2 = ['Adrian', 'Pepe', 'Pepita'];
console.log(names2.justLetter('i'));

if (!Date.prototype.f$$kingDay) {
	// console.log('f$$kingDay method missing');
	Date.prototype.f$$kingDay = function () {
		switch (this.getDay()) {
			case 0: return 'Today is f$$king Sunday';
				break;
			case 1: return 'Today is f$$king Monday';
				break;
			case 2: return 'Today is f$$king Tuesday';
				break;
			case 3: return 'Today is f$$king Wednesday';
				break;
			case 4: return 'Today is f$$king Thursday';
				break;
			case 5: return 'Today is f$$king Friday';
				break;
			case 6: return 'Today is f$$king Saturday';
				break;

		}
		return this.getDay();
	};
}

console.log(new Date().f$$kingDay());