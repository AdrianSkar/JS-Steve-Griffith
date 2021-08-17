let retVal = 42;
let obj = { 'prop1': 'foo', 'prop2': 'bar' };

// 1. One parameter, with and without curly braces
const f1 = (param) => { return param };
console.log(f1(7));

const f2 = param => param;
console.log(f2(4));

// 2. No parameters
const f3 = () => retVal;
console.log(f3());

const f4 = _ => retVal;
console.log(f4());

// 3. returning parameters
const f5 = (param) = obj; // no difference
console.log(f5);

// const f6 = (param) => {prop1: 'foo', prop2: 'bar'};
// console.log(f6); // Fails, braces alone expect a return statement in arrow functions

const f7 = (param) => ({ prop1: 'foo', prop2: 'bar' });
console.log(f7());