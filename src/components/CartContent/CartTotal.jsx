import { useContext } from "react";
import { Context } from "../../Context/Context";

const CartTotal = () => {
    const { cart} = useContext(Context)

    const total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);
  return (
    <div className="cart-total">
        <h3>Total a pagar: ${total.toFixed(2)}</h3>

    </div>
    )
}

export default CartTotal;