
const chars = ["One", "two", "three", "four"];
console.log(chars);

//Remove one item from position 0 and add another instead
chars.splice(0, 1, "five");
console.log(chars);

//Remove two from the middle and add one in its place
chars.splice(1, 2, "six");
console.log(chars);

//Remove 'six' and add 'seven' and 'eight
chars.splice(1, 1, 'seven', 'eight');
console.log(chars);

//Remove 'seven' and 'eight'
chars.splice(1, 2);
console.log(chars);

//Push a couple more
chars.push('nine', 'ten');
console.log(chars);

//Reverse items
chars.reverse();
console.log(chars);

//Sort
chars.sort();
console.log(chars);

//indexof
const found = chars.indexOf("fodur");
console.log(found);  //not found

const found2 = chars.indexOf("four");
console.log(found2);  //found at 1

const found3 = chars.lastIndexOf('nine');
console.log(found3); //the last one found if there is more than one 
