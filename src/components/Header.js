import { useState } from "react"
const loggedInUser = () => {
    return false;
}

export const Title = () => (
    <a href="/">
        <img alt="logo" className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTth54M7VygQniIZiCnTbdJ-NZjo8myuDB3tHf7thEJLxcOSfm20WEiCeJduUxCkk5GqAA&usqp=CAU" />

    </a>
)

export const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul >
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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
