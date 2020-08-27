// == vs === and != vs !==

let a, b, obj, obj2, copy1, copy2, html1, html2;
a = 5;
b = 5;

if (a == b) {
	console.log('a b are double equal');
} else {
	console.log('a b are not double equal');
}

if (a === b) {
	console.log('a b are triple equal');
} else {
	console.log('a b are not triple equal');
}


obj1 = { prop: 'value' };
obj2 = { prop: 'value' };

if (obj1 == obj2) {
	console.log('obj1 and obj2 are double equal');
} else {
	console.log('obj1 and obj2 are not double equal'); // two different objects
}

if (obj1 === obj2) {
	console.log('obj1 and obj2 are triple equal');
} else {
	console.log('obj1 and obj2 are not triple equal'); // two different objects
}
copy1 = obj1;
copy2 = obj1;


if (copy1 == copy2) {
	console.log('copy1 and copy2 are double equal'); // They are equal (they point to the exact same variable/object)
} else {
	console.log('copy1 and copy2 are not double equal');
}
if (copy1 === copy2) {
	console.log('copy1 and copy2 are triple equal'); // They are equal (they point to the exact same variable/object)
} else {
	console.log('copy1 and copy2 are not triple equal');
}

html1 = document.querySelector('h1');
html2 = document.querySelector('h1');


if (html1 == html2) {
	console.log('html1 and html2 are double equal'); // They are equal (two pointers to the same HTML tag)
} else {
	console.log('html1 and html2 are not double equal');
}

if (html1 === html2) {
	console.log('html1 and html2 are triple equal'); // They are equal (two pointers to the same HTML tag)
} else {
	console.log('html1 and html2 are not triple equal');
}