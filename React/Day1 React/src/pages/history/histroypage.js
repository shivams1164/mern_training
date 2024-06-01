// import { useState, useEffect } from "react";
// import Navbar from "../common/navbar"
// import './historystyle.css';




// const History = () => {

//     // let data = [{ 'id': '1', title: 'hello' }];

//     // // const
//     // const getData = async () => {
//     //     const res = await fetch('https://dummyjson.com/products');
//     //     const obj = await res.json();
//     //     // data = obj.products;
//     //     console.log(data);

//     const [data, setData] = useState("");
//     const [query, setQuery] = useState();

//     const getData = async () => {
//         const res = await fetch(`https://source.unsplash.com/random/400x400/?${query}`);
//         setData(res.url)
//     }
//     useEffect(() => {
//         getData();
//     }, [query])

//     return (
//         <div >
//             <Navbar />
//             <div className="history-container">
//                 <h2>Image Generator</h2>

//                 <div>
//                     <input placeholder={query} id="txtInput" type="text"></input>
//                     <button onClick={() => { setQuery(document.getElementById('txtInput').value) }}>Go</button>
//                 </div>
//                 {query && <img src={data} alt=" " />}
//             </div>

//         </div>
//     )
// };


// export default History;




import { useState, useEffect } from "react";
import Navbar from "../common/navbar"
import './historystyle.css';
import { generatePath } from "react-router-dom";
import { Link } from "react-router-dom";



const History = () => {

    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");

    const getData = async () => {
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);

        const obj = await res.json();
        setData(obj.products);
        console.log(data);
    }

    useEffect(() => {
        getData(searchText);
    }, [searchText])

    // getData();


    return (
        <div >
            <Navbar page="history" />
            <input className="inputBox" onChange={(e) => {
                setSearchText(e.target.value)
            }} />
            <div className="history-container">
                <h2>Image Generator</h2>
                {data.map((item) => {
                    return (

                        <div className="history-cart">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <Link to={`/history/${item.id}`}>More</Link>
                        </div>
                    )
                })}

            </div>

        </div>
    )
};


export default History;
