/* trim, trimStart, trimEnd
space, tab, no-break space, LF, CR
*/

let nbsp = '\u00A0';
let cr = '\u000D';
let lf = '\u000A';
let tab = '\t';

let sentence = `  This is not the sentence you are looking for. ${nbsp}${cr}${lf}${tab}asdf.   `;
let trimmed = sentence.trim();

console.log('1:|' + sentence + '|');
console.log('1:|' + trimmed + '|');
console.log('1:|' + sentence.trimStart() + '|');
console.log('1:|' + sentence.trimEnd() + '|');