/**
 * http://usejsdoc.org/
 */
var buffer1 = new Buffer("Naruto Shippuden");

//slicing a buffer
var buffer2 = buffer1.slice(7, 16);
console.log("buffer2 content: " + buffer2.toString());
//actually, no need to use .toString() because buffer2 is not really (???) a buffer but a string.
//because we did not invoke the new Buffer();
console.log("buffer2 content: " + buffer2);

var buffer3 = "Hello Buffer!";

console.log(Buffer.isBuffer(buffer1)); // true
console.log(Buffer.isBuffer(buffer2)); // true
console.log(Buffer.isBuffer(buffer3)); // false

//I am wrong. buffer2 is a buffer.