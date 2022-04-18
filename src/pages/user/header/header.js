import './header.scss'

function Header() {
    return (
        <div className="header">
            <div className="logo"><span><i>GRUVVE</i></span></div>
            <div className="navigation">
                    <ul>
                        <li>
                            <a href="/">Dashboard</a>
                        </li>
                        <li>
                            <a href="/">Members</a>
                        </li>
                        <li>
                            <a href="/">Groups</a>
                        </li>
                    </ul>
            </div>
            <div className="action-btn">
                <button>Connect Wallet</button>
            </div>
        </div>
    )
}

export default Header