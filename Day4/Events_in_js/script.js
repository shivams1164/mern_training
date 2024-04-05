
// const btn = document.querySelector("button");
// function random(number) {
//     return Math.floor(Math.random() * (number + 1));
//   }
// function changeBackground() {
//     const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//     document.body.style.backgroundColor = rndCol;
// }
// btn.addEventListener("click", changeBackground);



// function getInfo() {
function getInfo(e) {
    console.log("BTN click");
    console.log(e);
    e.target.style.backgroundColor = 'red';
    e.target.style.color = 'white';
    // const d = document.querySelector('div');
    // const el = document.createElement('h1');
    // el.innerText = "My name is";
    // // d.append(el);
    // d.prepend(el);

}