/* How to use short circuiting 
falsy - 0, false, null undefined, "", '', NaN
*/

let obj = { prop: 42, bool: true };
let num = 42;
let f = () => { return num; };
let g = () => { console.log(42); };

console.log(0 && 1);

// if (00 && 11) { console.log('yes'); } else { console.log('no'); }

let test = (1 && 1) ? 'yes' : 'no';
console.log(test);

let test2 = (obj.bool === true && obj.prop > 40) ? 'yes' : 'no';
console.log(test2);

let test3 = (obj.bool === true && f) ? 'yes' : 'no';
console.log(test3);

let test4 = (obj.bool === true && g()) ? 'yes' : 'no';
console.log(test4);// console.log does count as a return statement -> undefined = falsy

