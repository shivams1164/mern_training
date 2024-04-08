


console.log("Start");

// const response = fetch("https://www.programiz.com/c-programming/online-compiler")

// response.then(() => console.log("Fetched"));

// console.log(response);

// fetch('https://dummyjson.com/products')
//     .then(res => res.json())

// this print in json  format the data from this link: https://dummyjson.com/products

// .then(json => console.log(json))



// Another way


const req = fetch('https://dummyjson.com/products/1');

const res = req.then(res => res.json());

res.then(data => console.log(data));
res.catch(err => {
    console.log("error");
});
console.log("End");
