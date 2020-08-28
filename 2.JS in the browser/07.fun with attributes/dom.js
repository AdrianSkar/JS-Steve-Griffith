/*
element.getAttribute(name);
element.setAttribute(name, value);

element.dataset.prop = value;
*/

let main = document.querySelector('.main');

let test = main.getAttribute('id');
let test2 = main.getAttribute('title');

console.log(test, test2);

main.setAttribute('title', 'my movies');
console.log(main.getAttribute('title'));

let li = main.querySelector('ul li');
console.log(li.getAttribute('data-year'));

console.log(li.dataset);
console.log(li.dataset.year);
li.dataset.year = 3000;
console.log(li.dataset.year);

