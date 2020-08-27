/*
parent.children - nodeList of elements
parent.firstElementChild - 1 element node
parent.lastElementChild - 1 element node
node.nextElementSibling - 1 element node
node.previousElementSibling - 1 element node
node.parentNode - 1 element node
parent.contains(node) - returns Boolean
*/

let main = document.querySelector("main");

let c = main.children;
let c2 = main.childNodes;
// console.log('children', c.length);//2
// console.log('childNodes', c2.length); //5 (including carriage returns)

let ul = main.children[1];
let h2 = main.firstElementChild;
let ul2 = h2.nextElementSibling;
console.log(ul2);
let h2a = ul2.previousElementSibling;
console.log(h2a); 