import React from "react";
import { Link } from "react-router-dom";

const OrderPlaced = () => {

    return (
        <div className="m-5">
            <h3 className="my-4 text-center">Order Placed Successfully.!</h3>
            <p className="text-center">
                <Link to='/shop'>Continue shoping</Link>
            </p>
        </div>
    )
}

export default OrderPlaced;