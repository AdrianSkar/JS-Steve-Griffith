/* 
1. removing duplicates from an array
2. generating an array without duplicates
3. arr.reduce or filter?
*/

let names = ['Aaron', 'BByron', 'Jaquelin', 'Minsk'];

for (let i = 0, tmpnames = names, ln = names.length; i < ln; i++) {
	let rnd = Math.floor(Math.random() * tmpnames.length);
	console.log(tmpnames[rnd]);

	//remove element from temp array so it doesn't show up again
	tmpnames = tmpnames.filter(item => item != tmpnames[rnd]);
	console.log(tmpnames);
	// tmpnames.splice(rnd, 1);
}


