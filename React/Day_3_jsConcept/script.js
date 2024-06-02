
// JS Debouncing


// function useDebounce(fn, time) {
//     let timeOutID
//     return function (...args) {
//         clearTimeout(timeOutID)
//         timeOutID = setTimeout(()=>{fn(...args)}, time)
//     }
// }


// async function getPoducts(text) {
//     const res = await fetch(`https://dummyjson.com/products/search?q=${text}`)
//     const data = await res.json()
//     console.log(data);
// }


// const deboucedGetProduct = useDebounce(getPoducts, 600)


// const input = document.getElementById('search-box')
// input.addEventListener('keyup', (e) => {    
//     deboucedGetProduct(e.target.value)
// })


// Implement a function to add number

// Test Cases


// const addNumber =(...arr)=>{

//     const res = arr.reduce((acc, item)=>acc+item,0)
//     console.log(res);
// }


// console.log(addNumber(33));
// console.log(addNumber(43,23));
// console.log(addNumber(43,23,12,567));
// console.log(addNumber(43,23,12,567, 89, 45, 67,43));



// ------------------------------


// const Joope ={
//     id:'1',
//     name:'Joe joe',
//     courses:['C++','Wen D','Computer netword']
// }


// // const roy = Joe;
// const roy = {...Joe};
// roy.courses[0]='java'


// roy.name = 'Roy Roy'
// console.log(Joe);
// console.log(roy);









