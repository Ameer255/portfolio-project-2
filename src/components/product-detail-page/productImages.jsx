import React from "react";
import styles  from "./product-detail.module.css";

const ProductImages = ({imgUrl}) => {

    return (
        <div className={`col-10 col-md-7 col-lg-7 mx-lg-3 mx-md-2 my-3 mx-2  ${styles['item-img-container']}`}>
                <div className={` ${styles['img-container']}`}>
                    <img src={imgUrl} alt="item" />
                </div>
        </div>
    )
}

export default ProductImages;