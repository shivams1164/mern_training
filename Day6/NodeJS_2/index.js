// var figlet = require("figlet");

// figlet("Hello !", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });


// fetch('https://api.github.com/users/shivams1164').then((res) => {
//     returnres.json();
// })
//     .then((data) => {
//         console.log(data);
//     })



// console.log("start");
// async function getApi() {
//     console.log("api calling");
//     const pr = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=HHF73PNR4YE3THCLV8D3GNAZU')
//     console.log("fetching");
//     const data = await pr.json();
//     console.log("fetch the data");
//     // console.log(data);


//     // .then((res) => {
//     //     return res.json();
//     // })
//     // .then((data) => {
//     //     console.log(data);
//     // });        

// }
// getApi();
// console.log("end");


console.log("start");

async function callAPI() {
    const pr1 = await new Promise((res, req) => {
        console.log('Promise 1 ');
        setTimeout(() => {
            console.log("timeout 1....");
        }, 3000);
    })
    const pr2 = await new Promise((res, req) => {
        console.log('Promise 2 ');
        setTimeout(() => {
            console.log("timeout 2....");
        }, 5000);
    })

}

callAPI();

console.log("end");