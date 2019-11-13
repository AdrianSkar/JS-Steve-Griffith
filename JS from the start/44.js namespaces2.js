/*jshint esversion: 6*/

let steve = {
	colorDiv: function (ev) {
		let target = ev.currentTarget;
		target.style.backgroundColor = 'purple';
		target.style.color = 'white';
	},
	init: function () {
		let divA = document.getElementById('output');
		divA.addEventListener('mouseout', steve.colorDiv);
	}
};

steve.init();


// let colorDivB = function (ev) {
// 	let target = ev.currentTarget;
// 	target.style.backgroundColor = 'olive';
// 	target.style.color = '#333';
// };

// let divB = document.getElementById('output');

// divB.addEventListener('mouseover', colorDivB);

//Both variables were renamed to avoid conflict with the other script file using the same

