// var elementToChange = document.querySelector('#myDiv p');

// // Create a new element with the desired tag name
// var newElement = document.createElement('h1');

// // Copy the content from the old element to the new one
// newElement.textContent = elementToChange.textContent;

// // Replace the old element with the new one
// elementToChange.parentNode.replaceChild(newElement, elementToChange);
// console.log(newElement);


const ne = document.createElement("h3")
console.log(ne);

ne.innerText = "Dynamic Text";
const firstDiv = document.getElementsByTagName('div');
firstDiv[0].appendChild(ne);
firstDiv[1].setAttribute("style", "color:blue");
// let rem = document.getElementById('p11')
// rem = rem.remove();
firstDiv[1] = firstDiv[1].remove();