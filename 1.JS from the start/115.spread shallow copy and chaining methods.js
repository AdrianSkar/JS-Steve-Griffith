let a = [[1], [2], [3]];
let b = [...a];
console.log('1a', a);
console.log('1b', b);

// let c = b.shift().shift();
// console.log(c);

let d = b.shift();
console.log(d);
console.log('2a', a);
console.log('2b', b);

let e = d.shift();
console.log(e);
console.log('3a', a);
console.log('3b', b);

d.push(123);
console.log(d);
console.log(a);
