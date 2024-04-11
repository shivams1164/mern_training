// callback in file system

const fs = require('fs')

fs.readFile('test.txt', { encoding: 'utf-8' }, (err, data) => {
    console.log(data);
})

