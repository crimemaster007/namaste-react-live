import { useContext, useState } from "react"
import Logo from "../assets/img/foodVilla.png"
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext.js";
import useOnline from "../utils/useOnline.js";
import { useSelector } from "react-redux";


const loggedInUser = () => {
    return false;
}


export const Title = () => (
    <a href="/">
        <img alt="logo" className="h-28 p-2 rounded-xl" src={Logo} />
    </a>
)


export const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isOnline = useOnline();
    const { user } = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);

    console.log(cartItems);


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
                    <Link to="/cart">
                        <li className="px-2">Cart-{cartItems.length}</li>
                    </Link>
                </ul>
            </div>

            <h1 className="p-10 ml-36   font-bold text-[#E78D48]">{user.name}{isOnline ? "🟢" : "🔴"}</h1>
            {isLoggedIn ?
                (<button className="mr-6 p-10" onClick={() => { setIsLoggedIn(false) }}>logout</button>)
                :
                (<button className="mr-6 p-10" onClick={() => { setIsLoggedIn(true) }} >login</button>)
            }
        </div >
    );
};
