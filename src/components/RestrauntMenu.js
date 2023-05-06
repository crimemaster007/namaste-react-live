import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestraunt from "../utils/useRestraunt.js";

const RestrauntMenu = () => {
    const { id } = useParams();

    const restaurant=useRestraunt(id);

    return (!restaurant) ? <Shimmer /> : (
        <div className="menu">
            <div>
                <h1>Restraunt id: {id}</h1>
                <h2>{restaurant[0]?.card?.card?.info?.name}</h2>
                <img
                    src={IMG_CDN_URL + restaurant[0]?.card?.card?.info?.cloudinaryImageId}
                />
                <h3>{restaurant[0]?.card?.card?.info?.areaName}</h3>
                <h3>{restaurant[0]?.card?.card?.info?.city}</h3>
                <h3>{restaurant[0]?.card?.card?.info?.avgRating} stars</h3>
                <h3>{restaurant[0]?.card?.card?.info?.costForTwoMessage}</h3>

            </div>
            <div>
                <h1>Menu</h1>
                {
                    console.log(restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1))
                }
                <ul>
                    {restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
                        .slice(1)
                        .map((items, index) => {
                            return (
                                <div key={index}>
                                    {items?.card?.card?.itemCards?.map((item) => {
                                        return (
                                            <li key={item?.card?.info?.id} >
                                                <h2>{item?.card?.info?.name}</h2>
                                            </li>
                                        );
                                    })}
                                </div>
                            );
                        })}
                </ul>
            </div>
        </div>
    )
}

export default RestrauntMenu;

