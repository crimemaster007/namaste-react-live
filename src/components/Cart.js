import { useDispatch, useSelector } from "react-redux";
import { FoodItem } from "./FoodItem";
import { clearCart } from "../utils/cartSlice.js";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        return dispatch(clearCart());
    }
    return (
        <div className="m-2 p-2">
            <h1 className="font-bold text-2xl m-2">Cart - {cartItems.length}</h1>
            <button className="p-1 m-2 bg-red-400 rounded-xl w-20" onClick={() => handleClearCart()}>Clear cart 🛒</button>
            <div className="flex flex-wrap">
                {
                    cartItems.map((item) => {
                        return <FoodItem key={item.id} {...item} />
                    })
                }
            </div>
        </div>

    )
}

export default Cart;


        // <div>
        //     <h1 className="font-bold text-3xl">Cart Items</h1>
        //     {
        //         cartItems.map((cardItem) => {
        //             return <FoodItem item={cardItem} />
        //         })
        //     }
        // </div>