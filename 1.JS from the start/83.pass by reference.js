// let x = 'a';
// let z = x;
// console.log(x);
// console.log(z);
// z = 'b';
// console.log(x);
// console.log(z); //Doesn't change because it's a primitive value (pass by value), but with objects vars are really just pointers (pass by reference)

let names = ['Bob', 'Kata', 'Tom', 'Gene', 'Tina'];

let f = function (arr) {
	let a = Array.from(arr);
	let r = [].concat(arr);
	arr.push('Mort');
	a.push('Belcher');
	console.log(arr);
	console.log(names);
	console.log(a);
	console.log(r);
};

// f(names);

let archer = {
	characters: ['Sterling', 'Pam', 'Lana', 'Mallory'],
	info: {
		inner: true,
		nums: [1, 2, 3]
	}
};

let g = (obj) => {
	let o = Object.assign({}, obj); //shallow copy of archer 
	obj.characters = ['Slater', 'Sterling', 'Lana'];
	obj.characters.push('Cheryl');

	// obj.info = { inner: false, nums: [1, 5, 6] } // this makes 'o' keep all original values at 43
	obj.info.inner = false;
	obj.info.nums = [4, 5, 6]; // these 4 change values for obj AND archer and 'deeper' values inside 'o'

	console.log('Obj is', obj);
	console.log('Archer is', archer);
	console.log('o is', o); // chars still point to line 25, other pointers do to the new values

	return o;
};

console.log(archer); // here you haven't modified anything yet (the function is called at 48);

let newObj = g(archer); // returns o; not obj
newObj.characters.push('Cyril');
newObj.info.nums.push(8);
console.log('New obj is', newObj);
console.log('Archer is now', archer);
