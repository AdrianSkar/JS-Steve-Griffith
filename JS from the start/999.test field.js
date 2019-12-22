var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1, o2, o3);  // { a: 1, b: 2, c: 3 }, target object itself is changed.
// var obj = Object.assign({}, o1, o2, o3); // doesn't change the objects

