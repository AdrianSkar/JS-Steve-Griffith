/*
document.getElementById(id) - returns 1 element node
document.querySelector(css) - returns 1 element node
document.querySelectorAll(css) - returns NodeList
*/

let foot = document.getElementById('foot');
let p = document.getElementById("para");
p.textContent = 'First paragraph';

// let p2 = document.querySelector(".some");
let p2 = document.querySelector("main p.some");
p2.textContent = "Second paragraph";

let ps = document.querySelectorAll('.main p');
// ps.textContent = 'asdf'; //Wouldn't work because ps is a NodeList not an individual node.
for (let i = 0; i < ps.length; i++) {
	ps[i].textContent += " Looped using querySelectorAll";
}

