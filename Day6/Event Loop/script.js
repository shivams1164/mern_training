

// console.log('Start');

// setTimeout(() => { console.log('Timeout....') }, 5000)

// console.log('end');


setTimeout(() => { console.log('timeout 1 ..'); }, 5000)
console.log('start');
setTimeout(() => { console.log('timeout 2 ..'); }, 4999)
console.log('intermediant');
console.log('end');

