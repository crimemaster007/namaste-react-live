import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestraunt from "../utils/useRestraunt.js";
import { addItem } from "../utils/cartSlice.js";
import { useDispatch } from "react-redux";


const RestrauntMenu = () => {
    const { id } = useParams();

    const restaurant = useRestraunt(id);

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    }


    return (!restaurant) ? <Shimmer /> : (
        <div className="flex m-1 p-1 justify-around">
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
                <h1 className="font-bold">Menu</h1>
                <ul>
                    {restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
                        .slice(1)
                        .map((items, index) => {
                            return (
                                <div key={index}>
                                    {items?.card?.card?.itemCards?.map((item) => {
                                        return (
                                            <li className="flex items-center" key={item?.card?.info?.id} >
                                                <h2>{item?.card?.info?.name}</h2>
                                                <button className="p-1 m-2 bg-green-400 rounded-xl w-20" onClick={() => addFoodItem(item?.card?.info)}
                                                >Add</button>
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

