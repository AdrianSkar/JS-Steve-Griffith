let tony = {
	colorDiv: function (ev) {
		let target = ev.currentTarget;
		target.style.backgroundColor = 'olive';
		target.style.color = '#333';
	},
	init: function () {
		let divA = document.getElementById('output');
		divA.addEventListener('mouseover', this.colorDiv);
	}
};

tony.init();

// Base:
// let abc = {
// 	a: 123,
// 	b: 'string',
// 	c: true,
// 	d: function () {
// 		console.log('d');
// 	}
// };

// abc.d();

// What you can avoid using namespaces:

// let colorDiv = function (ev) {
// 	let target = ev.currentTarget;
// 	target.style.backgroundColor = 'purple';
// 	target.style.color = 'white';
// };

// let divA = document.getElementById('output');

// divA.addEventListener('mouseout', colorDiv);

