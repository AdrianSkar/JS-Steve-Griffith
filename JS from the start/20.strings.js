/*jshint esversion: 6*/

//All about strings

const str1 = new String("Toy story");
const str2 = String('Wall-e');
const str3 = 'Cars';

const result = str1.toUpperCase(); //Doesn't modify str1
const result2 = 'Monsters Inc'.toLowerCase();

console.log(str1, result);
console.log(result2); //monsters inc

console.log(str2.substring(0, 2)); //returns a portion (start index[,end]) -> Wa
console.log(str2.substring(3)); //l-e (start from 3, end is optional)

console.log(str2.substr(0, 2));//Deprecated

console.log(str2.slice(0, 2));//Returns a section of a string without modifying it, (start index[,end]) -> Wa
console.log(str3.indexOf('r'));// Returns the index of the first occurrence of the specified value and -1 if not found. -> 2
console.log(str1.lastIndexOf('o'));//
console.log('Con'.concat('cate', 'nate'));





