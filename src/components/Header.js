import { useState } from "react"
import Logo from "../assets/img/foodVilla.png"
import { Link } from "react-router-dom";

const loggedInUser = () => {
    return false;
}


export const Title = () => (
    <a href="/">
        <img alt="logo" className="h-28 p-2 rounded-xl" src={Logo} />
    </a>
)


export const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div className="flex justify-between bg-[#171a29] text-white shadow-lg">
            <Title />
            <div className="">
                <ul className="flex py-10">
                    <Link to="/">
                        <li className="px-2">Home</li>
                    </Link>
                    <Link to="/about">
                        <li className="px-2">About</li>
                    </Link>
                    <Link to="/contact">
                        <li className="px-2">Contact</li>
                    </Link>
                    <Link to="/instamart">
                        <li className="px-2">Instamart</li>
                    </Link>
                    <li className="px-2">Cart</li>
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
