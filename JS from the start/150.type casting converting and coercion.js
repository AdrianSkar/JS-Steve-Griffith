/*
String(), +, Number(), +, -, Boolean(), !, !!
toString(), valueOf()
parseInt(), parseFloat()
unary plus, logical NOT, addition operator, comparison operators
*/

let n = '56';
console.log(-n, +n);

///													  String,							Number,		Boolean

let obj = { a: 1, b: 2 };//  '[object Object]			NaN				true
let emptyObj = {};		   //	 '[object Object]			NaN				true
let arr = [1, 2, 3];		 //	 '1,2,3'							NaN				true // If there is only one number in the array, then, that becomes the numeric conversion. [1] -> 1
let emptyArr = [];			 //	  '' 									0					true
let str = 'Hello';			 //   'Hello'							NaN				true
let emptyStr = '';			 //		''									NaN				false ('43' -> 43, '0' -> 0)
let num = 1; 						 // 	'1'									1					true
let zero = 0;						 //		'0'									0					false
let t = true;						 //		'true'							1					true
let f = false;					 //		'false'							0					false
let x = null;						 //		'null'							0					false
let y = undefined;			 //		'undefined'					NaN				false
let z = NaN;						 //		'NaN'								NaN				false

/*
/// Plus vs concatenation
exp1 + exp2

If either exp1 or exp2 is a string then treat the '+' as a concatenation.
Coerce both values to String as needed.

If neither exp1 or exp2 is a string then treat the '+' as an addition operation.
Coerce both values to Number as needed.
*/

console.log(str + num);
console.log(f + num);

/*
Falsy values: false, 0, '', null, undefined, NaN
Truthy values: Everything else.

Boolean() != new Boolean(), String() != new String(), Number() != new Number()
Boxing of primitives
Boolean() == !! (! will flip truthiness too)
Number() == + (- will flip sign too)
String() == .toString() unless null was set as the prototype of the Object
*/

console.log(Boolean(234), Boolean(0), new Boolean(0));
console.log(true && Boolean(new Boolean(0)));
console.log(true && new Boolean(0));

// && compares the two operands and, then, returns the second if the first is truthy

console.log(!arr < +t || !!arr > emptyArr);
/* 	
	unary plus 17, logical NOT 17, less than 12, greater than 12, logical OR 6
					 (false < 1 || true > 0 )
					 (    0 < 1 ||    1 > 0)
					 ( true     || )           no need to evaluate after ||
					 true
*/

console.log(1 + - + + - + 1);