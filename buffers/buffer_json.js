/**
 * http://usejsdoc.org/
 */
buf = new Buffer(26);

for (var i = 0; i < 26; i++) {
	buf[i] = i + 97;
}

console.log(buf.toJSON());

var json = buf.toJSON(buf);

console.log(json);

console.log(json.toString());
console.log(buf.toString());