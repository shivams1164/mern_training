import React, { useState } from 'react';
import Navbar from "../common/navbar";
import "./imageGen.css"


const ImageGenerator = () => {
    // let name = "akash";
    const [name, changeName] = useState("Shivam")
    const func = (e) => {
        changeName(e.target.value);
        console.log(name);
    }


    return (
        <div>
            <Navbar />
            <div className="image-generator-container">
                <div className="image-section">
                    <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" className="random-image" />
                    <input className='text-box' type='text' onChange={(e) => func(e)} />
                </div>
                {name}
            </div>
        </div>
    );
};

export default ImageGenerator;
