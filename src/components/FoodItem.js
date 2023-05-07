import { IMG_FOOD_ITEMS_CDN_URL } from "../config.js"

export const FoodItem = ({imageId,name,price}) => {
    // console.log(item);
    return (
        <div className="w-56 p-2 m-2 shadow-xl">
            <img src={IMG_FOOD_ITEMS_CDN_URL + imageId} />
            <h2 className="font-bold text-lg">{name}</h2>
            <h4>{price/100}</h4>
        </div>
    )
}