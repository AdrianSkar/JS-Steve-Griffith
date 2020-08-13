let manager = {
	name: 'John',
	age: 37,
	job: 'software eng.'
};

let intern = {
	name: 'Ben',
	age: 23,
	job: 'dev'
};

function sayHi() {
	console.log('Hi, I am', this.name);
}

console.log('test');

console.log(sayHi(manager));
sayHi(manager);

manager.sayHi = sayHi;
manager.sayHi();

for (let index = 0; index < array.length; index++) {
	const element = array[index];

}