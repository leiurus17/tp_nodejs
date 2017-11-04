/**
 * http://usejsdoc.org/
 */
var buffer1 = new Buffer('ABCD');
console.log("buffer1 content: " + buffer1.toString());

var buffer2 = new Buffer(3); // Need to initial buffer length? // If no value, error

//copy a buffer
console.log("Copying buffer1 to buffer2...");

buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());
console.log("The contents will only be copied up to the size of the buffer.")
