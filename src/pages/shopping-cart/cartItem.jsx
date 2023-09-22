import React, { useEffect, useState } from "react";
import styles from './cart.module.css';

const CartItem = ({ item, removeItem, handleItemCount}) => {

    const [itemQUantity, setItemQuantity] = useState(item.quantity);

    const handleIncrement = () => {
        setItemQuantity((prevCount) => prevCount + 1);
        handleItemCount(item.id, itemQUantity);
    }

    const handleDecrement = () => {
        if (itemQUantity > 1) {
            setItemQuantity((prevCount) => prevCount - 1);
            handleItemCount(item.id, itemQUantity);
        }
    }


    return (

        <div className="container">


            <div className={`row justify-content-md-around justify-content-start align-items-center my-5 ${styles['items-container']}`}>
                <div className="col-md-5 col-12 d-flex align-items-center">
                    <img className={styles['item-img']} src={item.img} alt="item" />
                    <p className={`${styles['product-title']} px-3`}>{item.title}</p>
                </div>

                <div className="col-md-7 col-12 mx-3 mx-md-0">
                    <div className="row flex-direction-md-column mx-md-0 mx-5 align-items-center">
                        <div className="col-12 col-md-3 d-none d-md-block">
                            <p>{item.price}</p>
                        </div>
                        <div className="col-md-6 col-12 text-center d-flex flex-md-column align-items-center">
                            <QuantityController incrementHandler={handleIncrement}
                                decrementHandler={handleDecrement} count={itemQUantity} classes={'my-3 w-50'} />

                            <div>
                                <button className="text-muted btn p-0" onClick={() => removeItem(item.id)}>Remove</button>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <p>{item.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CartItem;



export const QuantityController = ({ incrementHandler, decrementHandler, count, classes }) => {

    return (
        <div className={`border d-flex justify-content-between align-items-center ${classes}`}>
            <button className="btn fs-3" onClick={() => decrementHandler()}>-</button>
            <span>{count}</span>
            <button className="btn fs-4" onClick={() => incrementHandler()}>+</button>
        </div>
    )
}
