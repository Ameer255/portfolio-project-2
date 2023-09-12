import React from "react";
import { Link } from "react-router-dom";
import styles from './shop-items.module.css';

const ShopItem = ({ title, price, description, imgUrl, link }) => {

    return (
        <div className={`col-10 col-md-5 col-lg-3 mx-lg-3 mx-md-2 my-3 mx-2  ${styles['shop-item']}`}>
            <Link className="text-decoration-none text-reset" to={`/shop/products/${link}`}>
                <div className={` ${styles['img-container']}`}>
                    <img src={imgUrl} alt="item" />
                </div>

                <div className={`${styles['item-details']} py-2`}>
                    <p>{title}</p>
                    <p>$ {price}</p> <br />
                </div>
            </Link>

        </div>
    )
}

export default ShopItem;