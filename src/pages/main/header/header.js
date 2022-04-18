import './header.scss'

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
                <button>Login</button>
            </div>
        </div>
    )
}

export default Header