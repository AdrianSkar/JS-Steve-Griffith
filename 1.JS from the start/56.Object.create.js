// Object.create(prototype, propertiesObject) method
// propertiesObject same as 2nd arg from Object.defineProperties()

let obj = {
	name: "The dude"
};

let obj2 = Object.create(obj, {});

console.log(obj2.name); // The dude

let obj3 = Object.create(obj2, {
	fullName: {
		configurable: true,
		writable: true,
		enumerable: true,
		value: 'Jeff Lebowski'
	},
	canBowl: {
		configurable: true,
		writable: true,
		enumerable: true,
		value: true
	}
});

console.log(obj3); // {fullName: 'Jeff Lebowski', canBowl: true}
console.log(obj3.name); // The dude

