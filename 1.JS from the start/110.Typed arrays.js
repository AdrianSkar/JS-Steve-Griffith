/***********************************
Typed Arrays in JavaScript
Int8Array - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array
-128 to 127
Uint8Array - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
0 - 255
Uint8ClampedArray - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
0 - 255
Int16Array - like Int8Array but 16 bits in length
-32768 to 32767
Uint16Array - like Uint8Array but 16 bits in length
0 to 65535
Int32Array - like Int8Array but 32 bits in length
-2147483648 to 2147483647
Uint32Array - like Uint8Array but 32 bits in length
0 to 4294967295
Float32Array - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array
1.2x10-38 to 3.4x10 38
Float64Array - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array
5.0x10 -324 to 1.8x10 308
ArrayBuffer - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
- used to represent a generic, fixed-length raw binary data buffer.
DataView - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView
Typed Arrays are used by: WebGL, Canvas, Web Audio API, XMLHttpRequests, Fetch API,  WebSockets, Web Workers, Media Source API and File APIs.
***********************************/

//new Int8Array(length(bytes) | buffer | TypedArray);
// array of 8-bit integers
// most Array methods are available on TypedArrays too

//create a 16 byte buffer
let buffer = new ArrayBuffer(16);

//creat a DataView to be able to access/set the whole buffer
let dv1 = new DataView(buffer);
//start at slot 10, get 3 bytes
let dv2 = new DataView(buffer, 10, 3);

//put "42" into slot 11 of the buffer through view1
dv1.setInt8(11, 42);
dv1.setInt8(10, 127);

let num = dv2.getInt8(1);

//retrieve the 42 from the wnd byte in view2 which was the 11th byte in the buffer
console.log(num);

console.log(dv2.getInt8(0));
console.log(dv2.getInt8(2));