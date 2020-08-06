/* JS bitwise operators
AND &
OR  |
XOR ^
NOT ~
Shift left <<
Shift right >>
*/

let n = 10;   //1010
let i = 6;		// 110

console.log(n.toString(2), i.toString(2));

console.log('AND & ', n & i);
/*
1010
 110

0010 -> 2
*/

console.log('OR | ', n | i);
/*
1010
 110

1110 -> 14
*/

console.log('XOR ^ ', n ^ i);
/*
1010
 110

1100 -> 12
*/

console.log('NOT ~ ', ~n);
/*
~ 1010
	0101

x = -(x+1)
*/


/*Permissions
	read, write, delete
*/
console.log(7 & 3);

let perm = 6;

let allowedToRead = (perm & 4) ? true : false;
let allowedToWrite = (perm & 2) ? true : false;
let allowedToDelete = (perm & 1) ? true : false;
console.log(allowedToRead, allowedToWrite, allowedToDelete);

for (let a = 0; a < 10; a++) {
	if (a & 1) {
		console.log('Odd');
	}
	else { console.log('Even'); }
}

/*  101010 >> 4 = 10
       111 >> 1 = 11
*/
console.log(7 >> 1);

/*   7 << 1 = 1110 -> 14
	   8 << 1 = 10000 -> 16
	Shifting to the left is the same as multiplying a decimal number by 2
*/
console.log(7 << 1);
console.log(8 << 1);



/* FF3300 - 24 bit values (8 bits per color)
	 to get green: Shift 8 >>, AND 11111111 (255)
		111111110011001100000000 >> 8 = 1111111100110011
		1111111100110011
		0000000011111111
		        00110011
*/

let color = 0xFF3300;
let noBlue = color >> 8;
let green = noBlue & 255;
console.log(green.toString(16));




/**********************
counting in decimal, binary
0		  	 0
1		  	 1			2^0
2		    10			2^1
3		    11
4		   100			2^2
5		   101
6		   110
7		   111
8	 		1000			2^3
9	 		1001
10 		1010
11 		1011
12 		1100
13 		1101
14 		1110
15 		1111
16	 10000			2^4
 *********************/