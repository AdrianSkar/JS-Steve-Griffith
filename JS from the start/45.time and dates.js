/*jshint esversion: 6*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let d = new Date();
console.log(d);

// approx 40 years
// ms * sec * min * hs * day * year * x
let num = 1000 * 60 * 60 * 24 * 365.25 * 40;

let str = '20 July 2012 14:05:00';

let d1 = new Date(0);
console.log(d1); //unix Epoch

let d2 = new Date(num);
console.log(d2);

let d3 = new Date(str);
console.log(d3);

let d4 = new Date(2017, 0, 2, 10, 11, 12, 123);
console.log(d4);

d.setFullYear(2020);
d.setHours(23);//setMinutes(), setMonth(), setSeconds()
console.log(d);

let t = d.getMinutes();
let tD = d.getDay();
console.log(t, tD);

// Output
/*
d5.toDateString() - date portion UTC time
d5.toTimeString() - date portion UTC time
d5.toISOString() - date simplified
d5.toJSON() - date for use in JSON string. UTC

d5.toLocaleString() - local time and date
d5.toLocaleString('en-CA') - local time and date with specified formatting
d5.toUTCString()
*/

let d5 = new Date();
console.log(d5.toDateString());
console.log(d5.toTimeString());
console.log(d5.toISOString());
console.log(d5.toJSON());
console.log(d5.toLocaleString());
console.log(d5.toLocaleString('en-CA'));








