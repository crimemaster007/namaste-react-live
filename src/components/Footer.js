import UserContext from "../utils/UserContext.js";
import { useContext } from "react";

const Footer = () => {
    const { user } = useContext(UserContext);
    return (
        <div className="flex justify-center items-center p-8 m-8">
            <h1 className="font-semibold">Made with ❤️ by {user.name}</h1>
        </div>
    )
}

export default Footer;