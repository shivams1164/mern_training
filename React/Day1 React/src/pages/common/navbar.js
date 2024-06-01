
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div className="header-parent-container">
            <div className="left">
                <Link to="/">home</Link>
                <Link to="/image-generator">Image generator</Link>
                <Link to="/history">History</Link>
                <Link to="/help">Help</Link>
            </div>
            <div className="right">
                right
            </div>

        </div>
    )
}

export default Navbar