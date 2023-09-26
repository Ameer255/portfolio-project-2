import React from "react";
import { Link } from "react-router-dom";
import styles from './product-showcase.module.css';

const ProductDisplay = ({width, height, bg, overlayTxt1, overlayTxt2, link})=>{

    return (
        <div className={`position-relative ${styles['product-showcase-container']}` } style={{width, height, backgroundImage: `url(${bg})`}}>

            <div className={`${styles['overlay-text-container']} position-absolute d-flex justify-content-center align-items-center flex-column`}>
                { overlayTxt1 &&
                <h2>
                    {overlayTxt1} <br /> {overlayTxt2}
                </h2>
                }

                { link && <Link to="/shop" className="my-4 text-decoration-none">Shop Now</Link> }
            </div>
        </div>
    )
}

export default ProductDisplay;