(function f1() {
	var a = 1, b = 1;
	var x = y = 2;
})();
(function f2() {
	let j = 1, k = 1;
	let r = s = 2;
})();

/* What are the values for a, b, x, y, j, r, s in the global scope?
	 Which of these variables will exist on the window/global object?
*/


console.log(y, s);

/*
* a, b, x, j, k and r are declared using the keywords var and let so they are scoped/limited to the function boundaries and do not exist outside
* y and s are assigned but not declared using a keyword so JS, 'just in case', puts them on the next available scope (global in this case).
*/