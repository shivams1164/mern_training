
// console.log('Start');

// function createOrder(x, fn){

// //    it may take 2m,,4m time

//     console.log(x);
//   setTimeout(()=>fn('like345'),1000);
// //   setTimeout(()=>fn('like345'),1000);

// }
// function makePayment(orderID){
//     console.log(orderID);
// }

// createOrder('soap',makePayment);



const pr = new Promise((resolve, reject) => {
    // logix for resolve and reject--
    if (true) {
        // if (false) {
        setTimeout(() => {
            resolve("done");
        }, 4000)

    } else {

        reject();
    }

});

// console.log(pr);
// setTimeout(()=>{
//   console.log(pr);
// },5000)


pr.then((res) => {
    console.log(res);
}).catch((err) => {

    console.log(err);
})

console.log(pr);