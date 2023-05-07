import { useState, useEffect, useContext } from "react";
import { restrauntList } from "../config.js";
import { RestrauntCard } from "./RestrauntCard.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Helper.js";
import useOnline from "../utils/useOnline.js";
import UserContext from "../utils/UserContext.js";


const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const {user,setUser} = useContext(UserContext);


    useEffect(() => {
        getRestaurants();
    }, [])

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9371531&lng=77.6901166&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json()
        // console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    console.log("render");

    const isOnline = useOnline();

    if (!isOnline) {
        return <h1>🔴Offline, Please check your internet connection!!</h1>;
    }

    if (!allRestaurants) return null;

    return (allRestaurants?.length === 0) ? <Shimmer /> : (
        <>
            <div className="p-5">
                <input type="text" placeholder="Search for restaurants" className="p-2 border-solid border-2 border-gray-500 rounded-xl focus:bg-gray-100 focus:border-gray-950" value={searchInput} onChange={(e) => {
                    setSearchInput(e.target.value);
                }} />
                <button data-testid="search-btn" className="p-2 m-2 bg-[#171a29] text-white rounded-xl" onClick={
                    () => {
                        const dataD = filterData(searchInput, allRestaurants);
                        setFilteredRestaurants(dataD);
                    }
                }>Search</button>
                <input
                    data-testid="search-input"
                    value={user.name}
                    onChange={(e) => {
                        setUser({
                            name:e.target.value
                        })
                    }}
                    className="p-2 border-solid border-2 border-gray-500 rounded-xl focus:bg-gray-100 focus:border-gray-950"
                />
            </div>
            <div className="flex flex-wrap" data-testid="res-list">
                {filteredRestaurants.length === 0 ? (<h1>No restraunt matching your filter.</h1>) : (filteredRestaurants.map((restraunt) => {
                    return <Link to={"/restraunt/" + restraunt.data.id} key={restraunt.data.id}> <RestrauntCard {...restraunt.data} ></RestrauntCard></Link>
                }))}
            </div>
        </>
    );
};

export default Body;