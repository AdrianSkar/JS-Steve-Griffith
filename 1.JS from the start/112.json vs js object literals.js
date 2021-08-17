let obj2 = function () { console.log(obj1); };

let obj1 = {
	'prop1': "string",
	"prop2": 'string',
	prop3: 123,
	prop4: ['array', "value", obj2, 123],
	prop5: function () { console.log('message'); },
	prop6: null,
	prop7: true,
	prop8: {
		p1: "test",
		p2: "nested",
		p3: "object"
	}
};

console.log(JSON.stringify(obj1));
