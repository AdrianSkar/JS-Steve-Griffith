/*/ Date.now() vs. date.valueOf()
 Jan 1, 1970 12:00:00 
 number of milliseconds that have passed
*/

console.log(Date.now()); //class method, static method


console.log(new Date());
let today = new Date();
let timestamp = today.valueOf(); //instance method

console.log(timestamp);
