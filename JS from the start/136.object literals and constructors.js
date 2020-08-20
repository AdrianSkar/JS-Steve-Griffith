let obj1 = {
	a: "this",
	b: "is",
	c: "an",
	d: "object",
	e: "literal"
};
let obj2 = new Object(["object", "constructor", "one"]); // == new Array("object", "constructor", "array");
let obj3 = new Object({ an: "object", literal: "again" });
let obj4 = new Object(obj1.a); // == new Object("this") | new String("this")
let obj5 = new Object(); // == new Object(null) | new Object(undefined)
let obj6 = new Object(true); // == new Boolean(true)

console.log('Obj1', obj1, typeof obj1, obj1 instanceof Object, obj1.constructor, '\n');
console.log('Obj2', obj2, typeof obj2, obj2 instanceof Object, obj2 instanceof Array, Array.isArray(obj2), obj2.constructor, '\n');
console.log('Obj3', obj3, typeof obj3, obj3 instanceof Object, obj3.constructor, '\n');
console.log('Obj4', obj4, typeof obj4, obj4 instanceof Object, obj4 instanceof String, obj4.constructor, '\n');
console.log('Obj5', obj5, typeof obj5, obj5 instanceof Object, obj5.constructor, '\n');
console.log('Obj6', obj6, typeof obj6, obj6 instanceof Object, obj6 instanceof Boolean, obj6.constructor, '\n');
console.log('steve', String('steve'), new String("steve"), typeof "steve", typeof String("steve"), typeof new String("steve"));