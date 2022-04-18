import './header.scss'
import { Outlet, Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="logo"><span><i>GRUVVE</i></span></div>
            <div className="navigation">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Discord</a>
                        </li>
                        <li>
                            <a href="/">About Us</a>
                        </li>
                        <li>
                            <a href="/">Contributing</a>
                        </li>
                    </ul>
            </div>
            <div className="action-btn">
                <Link to="/login" className="btn">Login</Link>
            </div>
        </div>
    )
}

export default Header