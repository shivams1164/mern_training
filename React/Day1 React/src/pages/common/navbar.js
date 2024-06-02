
// import { Link } from "react-router-dom"
// const Navbar = (props) => {
//     console.log(props.page);
//     const activeStyle = {
//         color: 'red',
//         backgroundColor: 'white'

//     }



//     return (
//         <div className="header-parent-container">
//             <div className="left">
//                 <Link style={props.page === 'home' ? activeStyle : []} to="/">home</Link>
//                 <Link style={props.page === 'image' ? activeStyle : []} to="/image-generator">Image generator</Link>
//                 <Link style={props.page === 'history' ? activeStyle : []} to="/history">History</Link>
//                 <Link to="/help">Help</Link>
//             </div>
//             <div className="right" style={{ padding: '4px', color: 'red' }}>
//                 {props.userPoints}
//             </div>

//         </div>
//     )
// }
// export default Navbar

import {useContext} from "react";
import PointsContext from '../../context/PointContext';
import "./navbar.css";
import {Link} from 'react-router-dom';


const Navbar = (props) => {
    const contextValues = useContext(PointsContext);
    console.log(contextValues);
    const page = props.page;

    const customColor = (x) => {
        return {color: page=== x ?'red':'white'}
    }

    return(
        <div className='header-parent-container'>
            <div className='left'>
                <Link to="/" style={customColor('home')}>Home</Link>
                <Link to="/image-generator" style={customColor('imageGenerator')} >Image Generator</Link>
                <Link to="/history"  style={customColor('history')}>History</Link>
                <Link to="/contact" >Contact Us</Link>
                <Link to="/help" >Help</Link>
            </div>
            <div className="right" style={{padding: '4px', color: 'brown'}}>
                {contextValues.userPoints}
            </div>
        </div>
    )
}

export default Navbar;