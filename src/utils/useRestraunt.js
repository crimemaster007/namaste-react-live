import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config.js";


const useRestraunt = (id) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestrauntInfo();
    }, [])

    async function getRestrauntInfo() {
        const data = await fetch(FETCH_MENU_URL+id);
        const json = await data.json();
        console.log(json.data.cards);
        setRestaurant(json.data.cards);
    }

    return restaurant;
}


export default useRestraunt;