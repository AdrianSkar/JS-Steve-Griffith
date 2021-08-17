// padStart

let name = 'Sterling';
let longname = '      Sterling Archer      ';

let ltrim = longname.trim();

console.log(longname.trim());
console.log(longname.trimLeft());
console.log(longname.trimRight());

console.log(name.padStart(10)); // name has now 10 chars (spaces added by default)
console.log(name.padStart(12, '*')); // same but using *
console.log(name.padStart(12, 'asdf')); // same but using asdf
console.log(name.padEnd(12, 'asdf')); // same at the end of the string



