/*jshint esversion: 6*/

// Object.assign(target, sources...) method
// Used to copy objects OR to merge objects

let obj1 = { "arms": true, "armCount": 2 };
let obj2 = { "weapons": ['missile launcher', 'reciprocating saw'] };
let obj3 = { "canMove": true, "legs": 0, "treads": 2 };

let arms = Object.assign({}, obj1);
console.log(arms);

let arms2 = Object.assign(arms, obj2);
console.log(arms2);

let robot = Object.assign({}, obj1, obj2, obj3);
console.log(robot);

