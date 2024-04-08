
console.log("GEC start");



function printPtetty(elem) {
    console.log('PrettyStart');

    let ans = 2 + 3;
    console.log(ans);
    console.log('Pretty End');
}

setTimeout(printPtetty, 8000);
console.log("GEC end");