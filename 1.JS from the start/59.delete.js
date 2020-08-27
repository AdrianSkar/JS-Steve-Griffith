// delete keyword; remove properties from objects

let obj = {
	prop1: 42,
	prop2: "Meaning of life",
	prop3: function () { }
};

obj.prop1 = null;
obj.prop2 = undefined;
delete obj.prop3;

for (let p in obj) {
	console.log(p); // prop1, prop2
}