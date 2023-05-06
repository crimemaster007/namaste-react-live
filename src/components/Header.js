import { useState } from "react"
import Logo from "../assets/img/foodVilla.png"
import { Link } from "react-router-dom";

const loggedInUser = () => {
    return false;
}


export const Title = () => (
    <a href="/">
        <img alt="logo" className="logo" src={Logo} />
    </a>
)


export const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                    <Link to="/instamart">
                        <li>InstaMart</li>
                    </Link>
                    <li>Cart</li>
                </ul>
            </div>
            {isLoggedIn ?
                (<button onClick={() => { setIsLoggedIn(false) }}>logout</button>)
                :
                (<button onClick={() => { setIsLoggedIn(true) }} >login</button>)
            }
        </div >
    );
};
