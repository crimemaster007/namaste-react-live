import { useEffect, useState } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
    //    console.log("api call")
    },)

    // console.log("render")
    return (
        <>
            <h1>Profile Functional Component</h1>
            <h2>Name : {props.name}</h2>
            <h3>Count: {count}</h3>
            <h3>Count2: {count2}</h3>
            <button onClick={() => {
                setCount(count + 1);
                setCount2(count2 + 1);
            }}
            >Count</button>
        </>
    )
}

export default Profile;