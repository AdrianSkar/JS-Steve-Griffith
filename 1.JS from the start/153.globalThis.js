let lll = 'declared with let';
var vvv = 'declared with var'; //undefined in node, logs in browsers

(function test() {
	nnn = 'declared without either';
	console.log(this);
	console.log(global);
	console.log(globalThis);
	// console.log(lll. globalThis.lll);
	// console.log(vvv. globalThis.vvv);
	// console.log(nnn. globalThis.nnn);
})();