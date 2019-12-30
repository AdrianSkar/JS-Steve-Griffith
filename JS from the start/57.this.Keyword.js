/*jshint esversion: 6*/

// "use strict";

let box = document.querySelector('.box');

let myFunc = function () {
	console.log('1', this);

};
let myFunc2 = function () {

};

box.addEventListener('mousedeown', Myfunc);
box.addEventListener('mouseup', myFunc2);


