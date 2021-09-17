let test = [1, 2, 3];
let test2 = [...test];

console.log(test, test2);

const arrow = () => {
	console.log('hey');
};
arrow();

let obj = {
	testFn() {
		console.log('test');
	},
};
obj.testFn();
