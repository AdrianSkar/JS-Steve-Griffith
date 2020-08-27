/*
[ toString, valueOf, isPrototypeOf, hasOwnProperty...]
obj
obj ==> obj.prototype (Object prototype) ==> null: end of chain
*/

let obj1 = {
	prop1: () => console.log('prop1')
};

let obj2 = {
	prop2: _ => console.log('prop2')
};
Object.setPrototypeOf(obj2, obj1);

// obj1.prop1();
// obj2.prop2();
// obj1.toString();
Object.getPrototypeOf(obj2).prop1();

console.log(Object.getOwnPropertyNames(obj2));
console.log(Object.getOwnPropertyNames(obj1));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj1)));

for (let prop in obj2) {
	console.log(prop); //enumerable props only
}