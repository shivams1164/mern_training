// import { useState, useEffect } from "react";
// import Navbar from "../common/navbar"
// import './historystyle.css';

// const dummyData = [
//     {
//         id: '1',
//         title: 'Flower',
//         date: '21-02-24'
//     },
//     {
//         id: '2',
//         title: 'Laptop',
//         date: '21-02-24'
//     },
//     {
//         id: '3',
//         title: 'Nature',
//         date: '21-02-24'
//     },
//     {
//         id: '4',
//         title: 'MObile',
//         date1: {
//             time: "345"

//         }

//     },
// ]


// const changeTitle = () => { console.log("Title change"); }
// const changeDescription = () => { console.log("Description change"); }




// const History = () => {

//     const [title, setTitle] = useState("product");
//     const [description, setDesciption] = useState("these are images");

//     useEffect(() => {
//         console.log("Nothing every time when the page is re- render ......");
//     });



//     useEffect(() => {
//         console.log("empty only page is render first time");
//     }, [])

//     useEffect(() => {
//         console.log("title change oly when title change");
//     }, [title])

//     useEffect(() => {
//         console.log("title or description change then it calll");
//     }, [title, description])

//     return (
//         <div >
//             <Navbar />
//             <div className="history-container">
//                 <button onClick={changeTitle}>Change Title</button> <br />
//                 <button onClick={() => { changeTitle(); changeDescription(); }}>Change Title and Description</button> <br />
//                 <button onClick={changeDescription}>Change Description</button>

//                 <input value={title} onChange={(e) => { setTitle(e.target.value) }} /> <br />
//                 <input value={description} onChange={(e) => { setDesciption(e.target.value) }} /> <br />
//                 <h3>Title = {title}</h3>
//                 <h3>Description = {description}</h3>
//                 <div>
//                     {
//                         dummyData.map((item) => {
//                             return (
//                                 <div className="history-card">
//                                     <div className="history-card-title">{item.title}</div>
//                                     <div className="history-card-date">{item.date}</div>
//                                     <div className="history-card-date">{item.date1?.time}</div>

//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default History

