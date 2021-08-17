const PIE = 3.14;

function f() {
	console.log('function f inside module a');
}

function f123() {
	//not accessible
	console.log('not accessible');
}

export { PIE, f };