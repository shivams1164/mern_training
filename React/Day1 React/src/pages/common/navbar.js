
import { Link } from "react-router-dom"
const Navbar = (props) => {
    console.log(props.page);
    const activeStyle = {
        color: 'red',
        backgroundColor:'white'

}



return (
    <div className="header-parent-container">
        <div className="left">
            <Link style={props.page === 'home' ? activeStyle : []} to="/">home</Link>
            <Link style={props.page === 'image' ? activeStyle : []} to="/image-generator">Image generator</Link>
            <Link style={props.page === 'history' ? activeStyle : []} to="/history">History</Link>
            <Link to="/help">Help</Link>
        </div>
        <div className="right">
            right
        </div>

    </div>
)
}
export default Navbar