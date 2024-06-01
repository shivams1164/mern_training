import React, { useState } from 'react';
import Navbar from "../common/navbar";
import "./imageGen.css"
import { useState, useEffect } from "react";



const ImageGenerator = () => {

    // let data = [{ 'id': '1', title: 'hello' }];

    // // const
    // const getData = async () => {
    //     const res = await fetch('https://dummyjson.com/products');
    //     const obj = await res.json();
    //     // data = obj.products;
    //     console.log(data);

    const [data, setData] = useState("");
    const [query, setQuery] = useState();

    const getData = async () => {
        const res = await fetch(`https://source.unsplash.com/random/400x400/?${query}`);
        setData(res.url)
    }
    useEffect(() => {
        getData();
    }, [query])

    return (
        <div >
            <Navbar />
            <div className="img-container">
                <h2>Image Generator</h2>

                <div>
                    <input placeholder={query} id="txtInput" type="text"></input>
                    <button onClick={() => { setQuery(document.getElementById('txtInput').value) }}>Go</button>
                </div>
                {query && <img src={data} alt=" " />}
            </div>

        </div>
    )
};


export default ImageGenerator;
