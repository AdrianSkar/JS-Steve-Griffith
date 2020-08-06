/* 
1. removing duplicates from an array
2. generating an array without duplicates
3. arr.reduce or filter?
*/

let names = ['Aaron', 'BByron', 'Jaquelin', 'Minsk'];
let nums = [63, 69, 72, 88, 92, 93, 96, 98];

for (let i = 0, ln = names.length; i < ln; i++) {
	let rnd = Math.floor(Math.random() * ln);
	//gives duplicates
	console.log(names[rnd]);
}

for (let i = 0, tmpnames = names, ln = names.length; i < ln; i++) {
	let rnd = Math.floor(Math.random() * tmpnames.length);
	console.log(tmpnames[rnd]);
	//remove element from temp array so it doesn't show up again
	tmpnames.splice(rnd, 1);
}

/////////////////////////////////////////////

let min = 50;
let max = 100;
let range = max - min;

for (let i = 0; i < 9; i++) {
	let rnd = Math.floor((Math.random() * range) + min);
	// nums.push(rnd);
	// console.log(nums.sort());
}

while (nums.length < 17) {
	let rnd = Math.floor((Math.random() * range) + min);
	if (!nums.includes(rnd)) {
		nums.push(rnd);
		console.log(nums.sort());
	} else { console.log('skipped dupe'); }
}
