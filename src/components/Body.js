import { useState, useEffect } from "react";
import { restrauntList } from "../config.js";
import { RestrauntCard } from "./RestrauntCard.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Helper.js";
import useOnline from "../utils/useOnline.js";


const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState("");

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
            <div className="search-container">
                <input type="text" placeholder="search" className="search-input" value={searchInput} onChange={(e) => {
                    setSearchInput(e.target.value);
                }} />
                <button className="search-btn" onClick={
                    () => {
                        const dataD = filterData(searchInput, allRestaurants);
                        setFilteredRestaurants(dataD);
                    }
                }>Search</button>
            </div>
            <div className="restraunt-list">
                {filteredRestaurants.length === 0 ? (<h1>No restraunt matching your filter.</h1>) : (filteredRestaurants.map((restraunt) => {
                    return <Link to={"/restraunt/" + restraunt.data.id} key={restraunt.data.id}> <RestrauntCard {...restraunt.data} ></RestrauntCard></Link>
                }))}
            </div>
        </>
    );
};

export default Body;