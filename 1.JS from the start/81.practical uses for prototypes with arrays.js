let names = ['Tony', 'Pam', 'Cyril', 'Lana', 'Robert', 'Orsha'];
let nums = [1, 6, 7, 3, 2];

let sorted = names.sort();
console.log(sorted);
console.log(names); //also sorted

Array.prototype.shuffle = function () {
	let len = this.length;
	for (let i = 0; i < len; i++) {

		let pos = Math.floor(Math.random() * len); // Random position
		// let temp = this[i];
		// let other = this[pos];
		// this[i] = other;
		// this[pos] = temp;

		//* You can use destructuring instead:
		[this[i], this[pos]] = [this[pos], this[i]];

	}
	return this;
};

nums.sort();
console.log(nums);

let shuffledNums = nums.shuffle();
console.log(shuffledNums);
let shuffledNames = names.shuffle();
console.log(shuffledNames);
