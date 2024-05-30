// import React from 'react';
// import ReactDOM from 'react-dom';

// const parent = document.getElementById('root');
// const root = ReactDOM.createRoot(parent);

// // const heading = React.createElement('h1', {}, "hello from react using parcel");
// // const heading = <h1>React element</h1>;
// const Heading = () => {
//     return <h1>React element 1</h1>;
// };


// console.log(Heading());

// // root.render(heading());
// root.render(<Heading />);


// -------------------------------------------------------------

// const Card = (

//     <div>
//         <h1>Title</h1>
//         <p>Descrition</p>

//     </div>);



// const obj = {
//     title: 'Laptop',
//     description: 'this is a laptop'
// };


const arr = [
    {
        title: 'Asus',
        description: 'price is 54000'
    },
    {
        title: 'Hp',
        description: 'price is 55000'
    },
    {
        title: 'Apple',
        description: 'price is 99000'
    },
    {
        title: 'asus',
        description: 'price is 64000'
    },
    {
        title: 'Dell',
        description: 'price is 44000'
    },
]


// const App = () => {
//     return (
//         <div>
//             {
//                 arr.map((elem) => {
//                     return (<Card key={elem.title} title={elem.title} description={elem.description} />)
//                 })
//             }
//         </div>
//     )
// }


import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './src/pages/homepage/homepage';
const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);
const App = () => {
    return (<Homepage/>)
}
root.render(<App />)





// import React from 'react';
// import ReactDOM from 'react-dom';
// import HomepageSearch from './src/pages/searchpage/homepageSearch';

// const parent = document.getElementById('root');
// const root = ReactDOM.createRoot(parent);

// const App = () => {
//     return (<HomepageSearch/>)
// }

// root.render(<App />)






// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import ProductMain from './src/pages/productPage/productMainPage';

// const parent = document.getElementById('root');
// const root = ReactDOM.createRoot(parent);

// const App = () => {
//     return <ProductMain />;
// }

// root.render(<App />);
