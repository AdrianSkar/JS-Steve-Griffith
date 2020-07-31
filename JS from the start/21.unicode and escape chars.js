// https://unicode.org/charts/
//String.fromCharCode(num [, numnj num])
//myString.charCodeAt(index)
// \0 \' \" \\ \n \r \t

let yesRu = '\u0434\u0430'; // Russian - yes
let milkDK = 'm\u00E6lk'; // milk
let breadNO = 'br\u00F8d'; // bread
let tomorrowES = 'ma\u00F1ana'; // tomorrow
let emojiJP = '\u3047\u3082\u3058'; // Hiragana - emoji 

console.log(yesRu);
console.log(milkDK, '\t', 'after');
console.log(breadNO, '\r', 'test');
console.log(tomorrowES, '\n', 'new');

const log = console.log;
log(emojiJP);

console.log('milkDK.charCodeAt(2)', milkDK.charCodeAt(2));

let s = String.fromCharCode(0x0434);// returns a string created from the specified sequence of UTF-16 code units
console.log(s);



