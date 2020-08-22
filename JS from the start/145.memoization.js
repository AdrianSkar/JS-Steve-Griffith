/// Memoization: save the results of your function to improve performance

// const myFunc = (function buildFunc() {
// 	const memo = {};

// 	const getKey = ([a, b]) => {
// 		//we are always expecting to get two values
// 		let key = `${a}-${b}`;
// 		return key;
// 	};

// 	return (args) => {
// 		//this is the function that will be myFunc
// 		let key = getKey(args);
// 		if (memo[key]) {
// 			return memo[key];
// 		} else {
// 			let sum = 0;
// 			for (let i = args[0]; i > 0; i--) {
// 				sum += args[0] *= args[1];
// 			}
// 			memo[key] = sum;
// 			return sum;
// 		}
// 	};
// })();


const myFunc = (() => {
	const memo = {};

	const getKey = ([a, b]) => {
		//we are always expecting to get two values
		let key = `${a}-${b}`;
		return key;
	};
	return (args) => {
		//this is the function that will be myFunc
		let key = getKey(args);
		if (memo[key]) {
			return memo[key];
		} else {
			let sum = 0;
			for (let i = args[0]; i > 0; i--) {
				sum += args[0] * args[1];
			}
			memo[key] = sum;
			return sum;
		}
	};
})();

let start = Date.now();
let result1 = myFunc([9000008, 100001]);
let result2 = myFunc([9000008, 100001]);
let result3 = myFunc([9000008, 100001]);
let result4 = myFunc([9000008, 100001]);
let result5 = myFunc([9000008, 100001]);
let result6 = myFunc([9000008, 100001]);
let result7 = myFunc([9000008, 100001]);
let end = Date.now();
console.log(end - start);

start = Date.now();
result1 = myFunc([9000001, 100001]);
result2 = myFunc([9000007, 100001]);
result3 = myFunc([9000006, 100001]);
result4 = myFunc([9000005, 100001]);
result5 = myFunc([9000004, 100001]);
result6 = myFunc([9000002, 100001]);
result7 = myFunc([9000003, 100001]);
end = Date.now();
console.log(end - start);