console.log("app js");

// const parent = document.getElementById('root')
// parent.innerHTML = `
// <h1> Hello from html</h1>
// <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
// </ul>
// `

// const parent = document.getElementById('root')
// const heading = document.createElement('h1');
// heading.innerText = 'hello from js dom';
// parent.appendChild(heading);
// const list = document.createElement('ul')
// const listItem1 = document.createElement('li');
// listItem1.innerText = 'Item 1';
// const listItem2 = document.createElement('li');
// listItem2.innerText = 'Item 2';
// list.appendChild(listItem1);
// list.appendChild(listItem2);
// parent.appendChild(list)
// console.log(React);


// ----------------------------------------------


// const parent = document.getElementById('root')
// const root = ReactDOM.createRoot(parent);

// // const heading = React.createElement('h1', {}, "Hello From React");
// // root.render(heading)


// const listItem1 = React.createElement('li', {
//     key: 'li1',
//     className: 'li-c-1',
//     id: "id1",
//     style: {
//         backgroundColor: 'red',
//         color: 'white',
//         fontSize: '20px',
//     }
// }, "Item1");
// const listItem2 = React.createElement('li', { key: 'li2' }, "Item2");
// const list = React.createElement('ul', {}, [listItem1, listItem2]);


// // const parent2 = document.getElementById('root2')
// // const root2 = ReactDOM.createRoot


// root.render(list)


// ---------------------------------------------------------------------
// JSX or JS XML

// const parent = document.getElementById('root')
// const root = ReactDOM.createRoot(parent);

// const heading = <h1>Hello from react</h1>
// const li1 = <li>Item1</li>
// const li2 = <li>Item2</li>
// // const list = <ul>{'hellow'}</ul>
// // const list = <ul>{li1}{li2}</ul>
// const arr = [li1, li2];
// // const list = <ul>{[li1, li2]}</ul>
// const list = <ul>{arr.map((elem) => { return elem; })}</ul>
// root.render(heading)
// root.render(list)


const parent = document.getElementById('root')
const root = ReactDOM.createRoot(parent);

const heading = <h1>Hello from react</h1>


// const str = "shivam singh"

const str = {
    name: 'shivam singh',
    age: 20,

};

const s1 = {
    backgroundColor: 'red',
    color: 'white',

}

// const li1 = <li className="li-c-1" name={str} style={s1}>Item1</li >

const li1 = <li className="li-c-1" name={str} style={{
    backgroundColor: 'red',
    color: 'white',

}}>Item1</li >
const li2 = <li>Item2</li>
const arr = [li1, li2];
const list = <ul>{arr.map((elem) => { return elem; })}</ul>
root.render(heading)
root.render(list)