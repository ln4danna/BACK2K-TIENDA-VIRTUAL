import { useContext } from "react";
import { Context } from "../../Context/Context";

import CartElements from "./CartElements";
import "./CartContent.css";
import CartTotal from "./CartTotal";

const CartContent = () =>{
    const { cart, setCart} = useContext(Context)
    return(
        <>
        {cart.length > 0 ?(

        <>
        <CartElements />
        <CartTotal />
        </>
            
        ) : (
            <h2 className="empty-cart">Tu carrito está vacío</h2>
        )}

        </>
    )
}

export default CartContent;
