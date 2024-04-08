

function printPtetty(elem) {
    console.log('PrettyStart');

    let ans = 2 + 3;
    console.log(ans);
    console.log('Pretty End');
    var x = document.createElement("BUTTON");
    var t = document.createTextNode("Click me");
    x.appendChild(t);
    document.body.appendChild(x);

}

// while (true) {
//     open("https://www.google.com")
// }

const btn = document.getElementById('btn');

btn.addEventListener("click", printPtetty);