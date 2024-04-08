


// setTimeout(function(),time );


function printPretty(elem) {
    console.log(':', elem);
    console.log("Hellow ");

}

// setTimeout(printPretty,1000) , "Hello World";   // SyntaxError: Invalid or unexpected token

setTimeout(printPretty, 8000);  // prints after 10