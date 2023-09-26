import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useOutletContext } from "react-router-dom";
import CartItem from "./cartItem";
import paypalImg from '../../assets/images/paypal.svg';
import paypalLogo from '../../assets/images/paypal-logo.svg';
import styles from './cart.module.css';

const Cart = () => {

    const { removeFromCart } = useOutletContext();

    const navigate = useNavigate();
    const [subtotal, setSubtotal] = useState(0);
    const [cartItems, setCartItems] = useState(
        localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
    );
    const [termsAccepted, setTermsAccepted] = useState(false);


    useEffect(() => {
        calculateSubtotal(cartItems);
    }, []);


    const calculateSubtotal = (data) => {
        let total = 0;

        
            data.forEach((item) => {
                let num = item.price.replace(/[^0-9.]/g, '');
                num = parseFloat(num);
                total += num;
            })
            setSubtotal(total.toLocaleString());
        
    }


    const removeItem = (id) => {
        console.log(cartItems);
        const newData = cartItems.filter((item) => item.id !== id);
        setCartItems((prevData)=>newData);
        localStorage.setItem('cartItems', JSON.stringify(newData));
        calculateSubtotal(newData);
        removeFromCart();
    }


    const handleItemCount = (id, count, action) => {
        // Create a new array with updated counts
        // console.log('id is ', id , ' and count is ', count)
        const updatedCartItems = cartItems.map((item) => {
            if (item.id === id) {
                // Update the count for the matching item

                if(action === '+'){
                return { ...item, quantity: count + 1 };
                }
                else if(action === '-' && count > 0) {
                    return { ...item, quantity: count - 1 };
                }
            }
            // Keep other items unchanged
            return item;
        });

        // Update the state with the new array
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };



    const handleSubmit = (e) => {
        if (!termsAccepted) {
            e.preventDefault();
            return;
        }

        navigate('/checkout');
    }

    if (!cartItems || cartItems.length === 0) {
        return (
            <div className="my-5 text-center text-muted">
                <h3 className={`text-center ${styles.h3}`}> Shopping Cart </h3>
                <p>Your cart is currently empty.!</p>
                <Link to='/shop' className="text-muted">Continue shopping</Link>
            </div>
        )
    }

    return (

        <div className={`container ${styles['main-container']}`}>


            <div className="row mt-5 justify-content-around d-none d-md-flex">
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
                    <CartItem item={item} removeItem={removeItem} handleItemCount={handleItemCount} />
                )
            })}


            <div className="text-center my-4">
                <p> <Link className="text-decoration-none text-reset">Update Cart</Link>   |  <Link className="text-decoration-none text-reset" to='/shop'>Continue Shopping</Link> </p>
            </div>

            <hr />
            <div className="d-flex justify-content-between">
                <p className="m-0">Subtotal</p>
                <p className="m-0">$ {subtotal}</p>

            </div>
            <hr />


            <div className="d-flex justify-content-center my-3 flex-column align-items-center">

                <p>Add a note to your order</p>
                <textarea name="" id="" cols="40" rows="3"></textarea>

                <form className="my-3 text-center" onSubmit={handleSubmit}>


                    <p>Taxes and <Link className="text-muted"> shipping </Link> calculated at checkout</p>
                    <div className="d-flex justify-content-center align-items-baseline">
                        <input type="checkbox" name="" id="" checked={termsAccepted} required onChange={() => setTermsAccepted(!termsAccepted)} />
                        <p className="m-0 px-2"> I HAVE READ AND ACCEPT THE <Link className="text-muted">TERMS OF SERVICE</Link> AND <Link className="text-muted">REFUND POLICY</Link></p>
                    </div>
                    <p className={`my-4 p-2 rounded-1 ${styles.notification}`}>
                        All orders are processed in USD. While the content of your cart is currently displayed in PKR, you will checkout using USD at the most current exchange rate.
                    </p>


                    <button type="submit" className={`rounded-1 px-4 py-3 border-1 ${styles.checkout}`}>Check out</button>



                    <div className="d-flex justify-content-center my-2">

                        <button className={`${styles.paypal} d-flex justify-content-center my-2 py-3 btn px-3 border`}>
                            <img src={paypalLogo} alt="paypal logo" />
                            <img src={paypalImg} alt="paypal icon" />
                        </button>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default Cart;