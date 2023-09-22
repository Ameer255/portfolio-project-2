import React from "react";
import CheckOutInfo from "./checkoutInfo";
import CheckOutItems from "./checkoutItems";
import styles from './checkout.module.css';

const CheckOut = () => {



    return (
        <div className="container-fluid my-2">
            <div className="row justify-content-center">
                <CheckOutInfo />
                <CheckOutItems />
            </div>
        </div>
    )
}

export default CheckOut;