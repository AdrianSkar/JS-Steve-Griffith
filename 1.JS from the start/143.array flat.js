let nums = [1, 2, [3, 4, 5], [6, 7], 8, 9, [[10, 11], [12, 13]]];

let arr = nums.flat();
console.log(arr);
let arr2 = nums.flat(2);
console.log(arr2);