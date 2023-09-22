import React, { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import styles from "./product-detail.module.css";
import paypalImg from '../../assets/images/paypal.png';
import Axios from "axios";
import data from "../../productData";
import { QuantityController } from "../../pages/shopping-cart/cartItem";

const ProductDetails = ({ title, description, price, id, imgUrl1, color, sizes }) => {

    const { updateCartCount } = useOutletContext();
    const [imgUrls, setImgUrls] = useState(null);
    const [count, setCount] = useState(1);


    const importImage = async () => {
        try {
            const img1 = await import(`../../assets/images/product-images/${imgUrl1}`);

            setImgUrls({ img1: img1.default });
        } catch (error) {
            console.error('Error importing image:', error);
            return null;
        }
    };


    useEffect(() => {
        importImage();
    }, [count])





    const handleIncrement = () => {

        try {
            setCount((prevCount) => prevCount + 1);
        }
        catch (err) {
            console.error(err.message);
        }
    }

    const handleDecrement = () => {
        if (count > 1) {
            setCount((prevCount) => prevCount - 1);
        }
    }




    const addToCart = () => {

        try {
            let item = data.find((p) => p.id === id);
            let cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
            let itemExists = cartItems.some(item => item.id === id);

            if (itemExists) {
                alert('This item is already in your cart.!');
                return;
            }
            item.quantity = count;
            item.img = imgUrls.img1;
            console.log(cartItems)
            cartItems.push(item);
            
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            alert('item added to cart');
            updateCartCount(cartItems.length);

        }
        catch (err) {

        }

    }




    return (
        <div className={`col-10 col-md-4 col-lg-4 my-3 py-5 px-4 ${styles['item-details-container']}`}>

            <div className={` ${styles['item-details']}`}>
                <p className="text-muted">Saiid Kobeisy Online</p>
                <h5>{title}</h5>
                <p> {id} </p>
                <p> {price}</p>
                <p>Size</p>
                <p>
                    {sizes.map((size) => {
                        return (
                            <span className={`d-inline-block mx-2 ${size.selected ? 'fw-bold' : 'text-muted'} ${size.available ? '' : 'text-decoration-line-through'}`}>
                                {size.size}
                            </span>
                        )
                    })}


                    {/* <span className="d-inline-block mx-2 text-muted">36</span>
                    <span className="d-inline-block mx-2 text-muted">38</span>
                    <span className="d-inline-block mx-2">40</span>
                    <span className="d-inline-block mx-2 text-muted">42</span> */}
                </p>

                <p>Color: {color}</p>
                <div className={`${styles['color-img']} rounded-5`}>
                    <img src={imgUrls && imgUrls.img1} alt="" className="rounded-5" />
                </div>

                <div className="my-4">
                    <div className={`${styles['cart-btn-container']} d-flex justify-content-between flex-wrap`}>
                        <QuantityController incrementHandler={handleIncrement} decrementHandler={handleDecrement} count={count} />
                        <button className={`border ${styles['add-to-cart']}`} onClick={addToCart}>Add to cart</button>
                        <button className={`${styles.paypal} d-block my-2 py-3`}>Buy with <img src={paypalImg} alt="paypal icon" /> </button>
                    </div>

                    <p className="text-center">
                        <Link className='text-decoration-none text-muted'>More payment options</Link>
                    </p>
                </div>

                <hr />
                <div className="py-4">
                    <p>{description}</p>
                </div>
                <hr />

                <div>
                    <p>Share on social media</p>
                    <button className="btn btn-prmary" onClick={() => {
                        alert('hi');
                        handleIncrement()
                    }}>Click here</button>
                    <p>
                        <i>
                            <svg width="15px" height="15px" viewBox="0 0 9 17">
                                <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"></path>
                            </svg>
                        </i>

                        <i>
                            <svg width="15px" height="15px" viewBox="0 0 48 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                <title>Twitter</title>
                                <defs></defs>
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-240.000000, -299.000000)" fill="#000000">
                                        <path d="M288,303.735283 C286.236309,304.538462 284.337383,305.081618 282.345483,305.324305 C284.379644,304.076201 285.940482,302.097147 286.675823,299.739617 C284.771263,300.895269 282.666667,301.736006 280.418384,302.18671 C278.626519,300.224991 276.065504,299 273.231203,299 C267.796443,299 263.387216,303.521488 263.387216,309.097508 C263.387216,309.88913 263.471738,310.657638 263.640782,311.397255 C255.456242,310.975442 248.201444,306.959552 243.341433,300.843265 C242.493397,302.339834 242.008804,304.076201 242.008804,305.925244 C242.008804,309.426869 243.747139,312.518238 246.389857,314.329722 C244.778306,314.280607 243.256911,313.821235 241.9271,313.070061 L241.9271,313.194294 C241.9271,318.08848 245.322064,322.17082 249.8299,323.095341 C249.004402,323.33225 248.133826,323.450704 247.235077,323.450704 C246.601162,323.450704 245.981335,323.390033 245.381229,323.271578 C246.634971,327.28169 250.269414,330.2026 254.580032,330.280607 C251.210424,332.99061 246.961789,334.605634 242.349709,334.605634 C241.555203,334.605634 240.769149,334.559408 240,334.466956 C244.358514,337.327194 249.53689,339 255.095615,339 C273.211481,339 283.114633,323.615385 283.114633,310.270495 C283.114633,309.831347 283.106181,309.392199 283.089276,308.961719 C285.013559,307.537378 286.684275,305.760563 288,303.735283"></path>
                                    </g>
                                    <g transform="translate(-1332.000000, -476.000000)"></g>
                                </g>
                            </svg>
                        </i>

                        <i>
                            <svg width="15px" height="15px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                <title>Pinterest</title>
                                <defs></defs>
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-407.000000, -295.000000)" fill="#000000">
                                        <path d="M431.001411,295 C417.747575,295 407,305.744752 407,319.001411 C407,328.826072 412.910037,337.270594 421.368672,340.982007 C421.300935,339.308344 421.357382,337.293173 421.78356,335.469924 C422.246428,333.522491 424.871229,322.393897 424.871229,322.393897 C424.871229,322.393897 424.106368,320.861351 424.106368,318.59499 C424.106368,315.038808 426.169518,312.38296 428.73505,312.38296 C430.91674,312.38296 431.972306,314.022755 431.972306,315.987123 C431.972306,318.180102 430.572411,321.462515 429.852708,324.502205 C429.251543,327.050803 431.128418,329.125243 433.640325,329.125243 C438.187158,329.125243 441.249427,323.285765 441.249427,316.36532 C441.249427,311.10725 437.707356,307.170048 431.263891,307.170048 C423.985006,307.170048 419.449462,312.59746 419.449462,318.659905 C419.449462,320.754101 420.064738,322.227377 421.029988,323.367613 C421.475922,323.895396 421.535191,324.104251 421.374316,324.708238 C421.261422,325.145705 420.996119,326.21256 420.886047,326.633092 C420.725172,327.239901 420.23408,327.460046 419.686541,327.234256 C416.330746,325.865408 414.769977,322.193509 414.769977,318.064385 C414.769977,311.248368 420.519139,303.069148 431.921503,303.069148 C441.085729,303.069148 447.117128,309.704533 447.117128,316.819721 C447.117128,326.235138 441.884459,333.268478 434.165285,333.268478 C431.577174,333.268478 429.138649,331.868584 428.303228,330.279591 C428.303228,330.279591 426.908979,335.808608 426.615452,336.875463 C426.107426,338.724114 425.111131,340.575587 424.199506,342.014994 C426.358617,342.652849 428.63909,343 431.001411,343 C444.255248,343 455,332.255248 455,319.001411 C455,305.744752 444.255248,295 431.001411,295"></path>
                                    </g>
                                    <g transform="translate(-1499.000000, -472.000000)"></g>
                                </g>
                            </svg>
                        </i>
                    </p>
                </div>

                <br />

            </div>
        </div>
    )
}

export default ProductDetails;