import { IMG_CDN_URL } from "../config.js"
export const RestrauntCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString }) => {
    return (
        <div className="w-56 p-2 m-2 shadow-xl">
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h2 className="font-bold text-lg">{name}</h2>
            <h3 className="italic">{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
    )
}