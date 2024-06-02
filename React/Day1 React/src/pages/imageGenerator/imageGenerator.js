// import React, { useState } from 'react';
// import Navbar from "../common/navbar";
// import "./imageGen.css"
// import { useState, useEffect } from "react";



// const ImageGenerator = () => {

//     // let data = [{ 'id': '1', title: 'hello' }];

//     // // const
//     // const getData = async () => {
//     //     const res = await fetch('https://dummyjson.com/products');
//     //     const obj = await res.json();
//     //     // data = obj.products;
//     //     console.log(data);

//     const [data, setData] = useState("");
//     const [query, setQuery] = useState();
//     const [imageSrc, setImgSrc] = useState("")

//     const getData = async () => {
//         // const res =   
//         const res = await fetch(`https://localhost:1400/api/v1/images`, {
//             method: 'POST',
//             body: JSON.stringify({
//                 searchText: searchText,
//             }),
//             headers: {
//                 "content-Type": "application/json"
//             }

//         });
//         const data = await res.json();

//         if (data?.status === 'success') {
//             setImgSrc(data.data.imgUrl)
//         }

//         setData(res.url)
//     }
//     useEffect(() => {
//         getData();
//     }, [searchText])

//     return (
//         <div >
//             <Navbar />
//             <div className="img-container">
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


// export default ImageGenerator;


import React, { useState } from 'react';
import Navbar from "../common/navbar";
import "./imageGen.css";


const ImageGenerator = () => {
    const [searchText, setSearchText] = useState();
    const [imageSrc, setImgSrc] = useState("");

    const func = (e) => {
        setSearchText(e.target.value);
    }

    const handleClick = async () => {
        const res = await fetch(`http://localhost:1400/api/v1/images`, {
            method: "POST",
            body: JSON.stringify({
                searchText: searchText,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        if (data?.status === 'success') {
            setImgSrc(data.data.imageUrl);
        }
    }

    return (
        <div>
            <Navbar page="imageGenerator" />
            <div className="image-generator-main-container">
                <div className='image-search'>
                    <img src={imageSrc} />
                    <input onChange={(e) => { func(e) }} />
                    <button onClick={handleClick}>Generate</button>
                </div>
            </div>
        </div>
    )
};


export default ImageGenerator;
