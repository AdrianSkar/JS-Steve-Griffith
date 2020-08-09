/*
str.substring(from, to)

str.substr(from, length)
*/

let str = "Nobody calls me Lebowski, you got the wrong huy, I'm the Dude, man";

console.log(str.substring(16, 24));
console.log(str.substring(16));
console.log(str.substring(16, 0));

console.log(str.substr(16, 0));
console.log(str.substr(16, 1));
console.log(str.substr(16, 10));
console.log(str.substr(-16, 10));
console.log(str.substr(-17));

