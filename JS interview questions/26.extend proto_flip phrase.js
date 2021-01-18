// https://www.youtube.com/watch?v=2jpAEz-hUKY&feature=youtu.be

/**
 * Finish the following script to extends the built-in
 * JavaScript String Object
 * so it has a method which will reverse the order of
 * characters in a string and return the resulting reversed string.
 * It should run with code provided.
 *
 * Bonus marks if it ignores punctuation at the end of the String.
 */

String.prototype.flip = function () {
	let str = this, punctuation = /[!?,.:;]$/, char, match = str.match(punctuation);
	if (str.endsWith(match[0])) {
		char = match[0];
		str = str.replace(punctuation, '');
	}
	return str.split('').reverse().join('').concat(char);
};

let str = "Can I use Google? And during the interview?";
console.log(str.flip());

//* Steve's solution (more succinct but would replace chars in the middle too)
String.prototype.flipS = function () {
	let str = this, end = '', punctuation = /[?.!]/, matches = str.match(punctuation);
	if (matches) {
		end = matches[0];
		str = str.replace(end, "");
	}

	return str.split('').reverse().join('') + end;
};
console.log(str.flipS());