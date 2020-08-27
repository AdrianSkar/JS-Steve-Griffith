/*
///Deep copy methods
- JSON.parse(JSON.stringify())
- Service workers postMessage() on message
- History API history.pushState(obj, title) history.state
- Notification API new Notification("title", {data:obj}).data
- Build a custom recursive function
*/



let shallowArr = [
	123,
	'bob',
	true,
	null,
	undefined];
let deepArr = [123, 'bob', true,
	['Hank', 'Brent', 'Lacy'], {
		'Rouleau': 'Dog river',
		'Wilcox': 'Woolerton'
	}];
let deepObj = {
	'characters': ['Wanda', 'Davis', 'Emma', 'Karen'],
	'places': ['Corner gas', 'Ruby', 'Foo mart'],
	'grad68': false,
	'seasons': 5
};

// let newObj = { ...deepObj };
// newObj.places[0] = 'Ottawa'; //changed inside ref.
// newObj.places = ['Ottawa', 'Calcutta']; // new ref
// console.log(newObj, deepObj);
let otherObj = JSON.parse(JSON.stringify(deepObj));
otherObj.places[0] = 'Ottawa';
console.log(otherObj, deepObj);

/*
///Shallow copy methods
- arr1.slice(0)
- [].concat(arr1)
- Spread operator
- Object.create({}, obj)
- Object.assign({}, obj)
- Array.from(arr1)
*/

let s = 'steve';
let g = s;
s = 'new value';
console.log(s, g);// primitives

let arr = Array.from(shallowArr);
let arr1 = [...shallowArr];
console.log(arr1);
shallowArr[0] = 456;
console.log(arr, shallowArr);