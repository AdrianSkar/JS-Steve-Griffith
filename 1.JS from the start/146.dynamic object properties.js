/// Dynamic properties using square brackets

let beverage = 'Beer';

const myObj = {
	a: 1,
	b: 2,
	c: 3,
	food: 'cheese',
	propName: 'cheese',
	beverage: 'Heineken', // beverage: 'Heineken'
	[beverage]: 'corona' // Beer: corona
};

let addProp = (obj, propName, propValue) => {
	// obj.food = 'cheese';
	obj[propName] = propValue;
	obj.propName = propValue; // = 10

};
addProp(myObj, 'food', 'cheese');