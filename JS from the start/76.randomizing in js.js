/*
Random numbers in JS
Not 'real' random numbers; don't use this for security

Math.floor(Math.random() * (range + 1)) + min
*/

let classes = ['highlight', 'sale', 'active'];
let people = ['John Boham', 'Robert Plant', 'John Paul', 'Jimmy Page'];

//Num between 1 and 3
let num = Math.floor(Math.random() * (2 + 1)) + 1;
console.log(num);

//Random person
let maxP = people.length - 1; // 0 based index
let minP = 0;
let numP = Math.floor(Math.random() * (maxP + 1)); // + minP; = 0 so not needed
console.log(people[numP]);

//Random CSS class
let maxC = classes.length - 1;
let minC = 0;
let numC = Math.floor(Math.random() * (maxC + 1)) + minC;
console.log(classes[numC]);

//Random between 500 and 1000
let rnd5 = Math.floor(Math.random() * (500 + 1)) + 500;
console.log(rnd5);

//remember its about range not really about maxes. 
//I.E.: Math.floor(Math.random() * (range + 1) + min/starting point);

