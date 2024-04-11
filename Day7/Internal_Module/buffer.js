const b = new Buffer.from('abcsxyz');

console.log(b);
console.log(b.toString());

b.write("other");
console.log(b);
console.log(b.toString());
