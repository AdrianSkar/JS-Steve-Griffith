let greeting = "Howdy";
let name = "Buzz";
let str;

/// 1. Concatenation operator

str = greeting + " " + name + '.';

/// 2. String.prototype.concat method

str = greeting.concat(' ', name, '.');

/// 3. ES6 template strings

str = `${greeting} ${name}.`;

console.log(str);