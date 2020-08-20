let str = "Ragnar Lothbrok";

console.log(str[0], str[1]);
console.log(str.charAt(0), str.charAt(1));

let arr = str.split('');
let arr2 = Array.from(str);
console.log(arr, arr2);
console.log(arr[0], arr2[1]);
// concat() = combine two arrays or combine two strings
console.log(arr[0].concat(arr2[1]));
console.log(str.concat('asdf'));
console.log(arr.concat(arr2));
console.log(str.indexOf("g"));
console.log(arr.indexOf("R"));
console.log(str.includes('Loth'));
console.log(str.slice(1, 5)); // extract / shallow copy of part of the array or string
console.log(arr.slice(1, 5));

for (const char of str) {
	console.log(char);
}
for (const char of arr) {
	console.log(char);
}
