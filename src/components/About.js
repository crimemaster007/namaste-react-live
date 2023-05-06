import { Outlet } from "react-router-dom";
import Profile from "./Profile.js";
import ProfileClass from "./ProfileClass.js";

const About = () => {
    return (
        <div>
            <h1>About us Page</h1>
            <p>This is a food delivery app delivers food in 10 mins. to your doorstep🚀.</p>
            {/* <Outlet/> */}
            <ProfileClass name={"TusharClass"}/>
            <Profile name={"Tushar"}/>
        </div>
    )
}

export default About;



