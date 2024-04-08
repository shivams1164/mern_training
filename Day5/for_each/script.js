let arr = [2, 10, 21, 32, 56];

function printPretty(elem) {
    console.log(':', elem);
}


function printArray(arr) {
    // for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i]);
    // }

    //Call Back function

    // arr.forEach(printPretty);

    // Single Element

    // arr.forEach((a) => {
    //     console.log(':', a);
    // });

    //Multiple Element foreach

    // arr.forEach((a, b, c, d) => {
    //     console.log(':', a, b, c, d);
    // });

    //Map  - Create new array with same length as original but elements are the results of calling callback on every

    arr.map((a, b, c) => {
        console.log(':', a, b, c);
    });

    arr.map



}

printArray(arr);