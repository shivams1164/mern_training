

// const fs = require('fs');
const fs = require('node:fs');

// const data = fs.readFileSync('myReadme.txt'); 

const data = fs.readFileSync('myReadme.txt', { encoding: 'utf-8' });
console.log(data);   //data packet comes from the file show in the form of buffer


// to convert the buffer to string
// console.log(data.toString());


