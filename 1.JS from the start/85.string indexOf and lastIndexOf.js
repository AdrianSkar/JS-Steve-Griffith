let word = 'Excalibur';
let sentence = 'In the end, we decided to sell the children and go on vacation.';

console.log(word.toLowerCase().indexOf('e'));
//word = word.toLowercase(); // changes the original

console.log(word.toLowerCase().lastIndexOf('E'));

console.log(sentence.toLowerCase().indexOf('e'));
console.log(sentence.toLowerCase().lastIndexOf('e'));

console.log(sentence.indexOf('the c'));

console.log(sentence.indexOf('e', 13));

console.log(sentence.indexOf('the', sentence.indexOf('we ')));