

// console.log("Hello");


// const arr = [10, 22, 34];
// const arrs = [10.34, 22.2, 34.34];

// // const ans = arr.forEach((a) => {
// //     console.log(a);
// // });

// // const ans = arr.map(a =>  Math.pow(a,2))
// const ans = arr.map(a => a ** 2)
// const anss = arrs.map(a => parseInt(a))

// console.log(ans);
// console.log(anss);



// const arr = [10, 22, 34];

// const arr2 = arr.push(99);

// console.log(arr);



// const arr = [10, 22, 34];
// const ans = arr.filter((a) => {
//     if (a > 20) return true;
//     else return false;

// })

// console.log(arr);
// console.log(ans);  //sirf true vala value aayega


// const arr = [
//     'Delhi',
//     'Mumbai',
//     'Chennai',
//     'Pune',
//     'kolkata',
//     'India',
//     'Indore',
// ]

// const ans = arr.filter((a) => {
//     if ((a.includes('I')) || (a.includes('i'))) return true;
//     else return false;

// })


// const arr22 = [
//     'Delhi, India',
//     'Mumbai, India',
//     'Chennai, India',
//     'Pune, India',
//     'kolkata, India',
//     'Indore, India',
//     'Dubai ,UAE',
//     'Abu Dhabi,UAE',
//     'Sharjah,UAE'

// ]

// const an = arr22.filter((a) => {
//     const ns = a.toLowerCase();
//     if (ns.includes('india')) return true;
//     else return false;

// })

// console.log(an);

// ----------------------------------
// Reduce


// const arr = [2, 4, 9, 10];

// // const obj={};

// const sum = arr.reduce((acc, curr) => {
//     // console.log(a, b, c, d)/;
//     console.log(acc + ' ' + curr);
//     return acc + curr;


// });


// console.log(sum);




const names = ["ab", "cd", "ef", "gh"];

const sum = names.reduce((acc, curr) => {
    return acc + curr;
})

console.log(sum);
