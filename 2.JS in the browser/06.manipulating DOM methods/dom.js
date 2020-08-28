/*
node.insertBefore(newNode, referenceNode) - Insert a node
parent.replaceChild(new, old) = Replace one node inside parent with another node
node.cloneNode(true) - Copy a node and optionally its children
*/

let ul = document.querySelector('.main ul');
let lis = ul.children;

let ele = document.createElement('li');

let AN = lis[5];
// let newNode = document.createElement('li');
// newNode.textContent = "The sixth sense";
let newNode = ele;
ele.textContent = "The sixth sense";
ul.insertBefore(newNode, AN);

// let jp = document.createElement("li");
// jp.textContent = "Jurassic park";
let jp = ele;
ele.textContent = "Jurassic park";
ul.replaceChild(jp, lis[0]);

let f = lis[0].cloneNode(false);
let t = ul.cloneNode(true);

console.log(f);
console.log(t);


