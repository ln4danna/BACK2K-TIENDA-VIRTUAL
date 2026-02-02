import { useContext } from "react";
import { Context } from "../../Context/Context";
import CartItemCounter from "./CartItemCounter";


const CartElements = () =>{
    const { cart, setCart} = useContext(Context)

    const deleteProducts = (id) =>{
        const foundId = cart.find((element) => element.id === id)

        const newCart = cart.filter((element) =>{
            return element !== foundId
        }) 

        setCart(newCart) 
    }

    return cart.map((product) => {
        return(
        <div key={product.id} className="card-container">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <CartItemCounter product={product}/>
            <p>${(product.price * product.quantity).toFixed(2)}</p>         
            <h3 className="cart-delete" onClick ={() => deleteProducts(product.id)}>
                ✖️
            </h3>
        </div>
        )
})

}
export default CartElements;