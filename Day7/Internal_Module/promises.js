

const fsPromises = require('fs/promises');
console.log("start");
const pr = fsPromises.readFile('test.txt', { encoding: 'utf-8' });
pr.then((res) => {
    console.log(res);
})
// .catch((err)=>{
//     console.log(err);
// })

console.log("end");