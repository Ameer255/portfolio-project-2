import React, { useEffect, useState } from "react";
import CartItem from "./cartItem";

const Cart = ()=>{

    const [cartItems, setCartItems] = useState(null);
    useEffect(()=>{

        const data = localStorage.getItem('cartItems') ? JSON.stringify(localStorage.getItem('cartItems')) : null;
        setCartItems(data);
    }, [])

    if(!cartItems){
        return (
            <div>
                Your cart is empty.!
            </div>
        )
    }

    return (
        <div className={`my-5`}>
            {cartItems.map((item)=>{
                return(
                    <CartItem item={item} />
                )
            })}

            cart items here
        </div>
    )
}

export default Cart;