/*
document.createElement(tagname) - returns 1 element node
document.createTextNode(text) - returns 1 text node
parent.appendChild(node) - adds child to parent
parent.removeChild(node) - removes node from parent

element.innerHTML
element.textContent
*/

let main = document.querySelector("main");
let h2 = main.querySelector('h2');
h2.textContent = 'Loading movies';

let p = main.querySelector('p');
p.innerHTML = 'And now a list of <b>movies</b>.';

let ul = document.createElement('ul');
main.appendChild(ul);

movies.forEach(ele => {
	let li = document.createElement('li');
	let txt = document.createTextNode(ele);
	li.appendChild(txt);
	ul.appendChild(li);
});

// movies.forEach(function (element) {
// 	let li = document.createElement('li');
// 	let txt = document.createTextNode(element);
// 	li.appendChild(txt);
// 	ul.appendChild(li);
// });

// main.removeChild(ul);