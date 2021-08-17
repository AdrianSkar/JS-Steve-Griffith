// typeof operator

let str = 'Winchester';
let num = 14;
let bool = true;

[str, num, bool].forEach((val) => console.log(typeof val));
// string, number, boolean

let obj = { prop: 'Dean' };
let arr = [1, 2, 3];

console.log(typeof obj);
console.log(typeof arr); //obj; use Array.isArray(arr);

let today = new Date();
let dt = Date();
let f = function () { };

console.log(typeof today); //obj
console.log(typeof dt); //string
console.log(typeof f); //function
