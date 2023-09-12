import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./cartItem";
import styles from './cart.module.css';

const Cart = () => {

    const [cartItems, setCartItems] = useState(null);
    useEffect(() => {

        const data = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : null;
        setCartItems(data);

    }, []);


    const removeItem = (id)=>{
        console.log(cartItems);
        const newData = cartItems.filter((item)=>item.id !== parseInt(id));
        setCartItems(newData);
        localStorage.setItem('cartItems', JSON.stringify(newData));
    }

    if (!cartItems || cartItems.length === 0) {
        return (
            <div className="my-5 text-center text-muted">
                <h3> Shopping Cart </h3>
                <p>Your cart is currently empty.!</p>
                <Link to='/shop' className="text-muted">Continue shopping</Link>
            </div>
        )
    }

    return (

        <div className={`my-5 container-fluid`}>


            <div className="row justify-content-around d-none d-md-flex">
                <div className="col-5">
                    <p>Product</p>
                </div>
                <div className="col-2">
                    <p>Price</p>
                </div>
                <div className="col-3">
                    <p>Quantity</p>
                </div>
                <div className="col-2">
                    <p>Total</p>
                </div>

            </div>
            <hr />


            {cartItems.map((item) => {
                return (
                    <CartItem item={item} removeItem={removeItem}/>
                )
            })}

        </div>
    )
}

export default Cart;