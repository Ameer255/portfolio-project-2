import React, { useEffect, useState } from "react";
import styles from './checkout.module.css';

const CheckOutItems = () => {


    const [checkOutItems, setCheckoutItems] = useState(null);
    const [imgUrls, setImgUrls] = useState([]);
    const [subtotal, setSubtotal] = useState(0);


    useEffect(() => {
        let items = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : null;
        setCheckoutItems(items);

        let total = 0;

        items.forEach(async (item) => {
            const img = await import(`../../assets/images/product-images/${item.images[0].img1}`);
            setImgUrls((prevUrls) => [...prevUrls, img.default]);


            total += parseFloat(item.price.replace(/[^0-9.]/g, ''));
            setSubtotal(total.toLocaleString());
        })


    }, [])






    if (!checkOutItems) {
        return (
            <div className="my-5 px-3 text-center col-12 col-md-5">
                <h4>No items in the cart.</h4>
            </div>
        )
    }
    return (
        <div className={`col-12 col-md-5 py-5 ${styles['items-container']}`}>


            <div className="container px-5">


                {checkOutItems.map((item, index) => {

                    return (
                        <div className="row align-items-center my-3">
                            <div className={`position-relative col-2 border d-flex justify-content-center rounded-2 ${styles['img-container']}`}>
                                <div className={`position-absolute d-flex justify-content-center align-items-center rounded-5 ${styles.quantity}`}>{item.quantity}</div>
                                <img src={imgUrls[index]} alt="product img" />
                            </div>

                            <div className="col-7">
                                <p className={`my-0 fw-bold ${styles['item-title']}`}>{item.title}</p>
                                <p className={`my-0 ${styles['size-color']}`}>
                                    <span>
                                        {item.sizes.map((size) => {
                                            if (size.selected) {
                                                return size.size
                                            }
                                            return null;
                                        })} /
                                    </span>
                                    <span>{item.color}</span>

                                </p>
                            </div>

                            <div className="col-3">
                                <p>{item.price}</p>
                            </div>
                        </div>
                    )
                })
                }


                <div className="row align-items-center my-5">
                    <div className="col-9">
                        <input className="form-control py-3" type="text" name="" id="" placeholder="Discount code" />
                    </div>

                    <div className="col-3">
                        <button className={`${styles.apply} btn border py-3 px-3`}>Apply</button>
                    </div>
                </div>

                <div>
                    <div className="row">
                        <div className="col-7">
                            <p className="">Subtotal</p>
                        </div>

                        <div className="col-5">
                            <p className="fw-bold text-end">${subtotal}</p>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-7">
                            <p>Shipping</p>
                        </div>

                        <div className="col-5">
                            <p className={`${styles.shipping} text-end`}>Calculated at next step</p>
                        </div>
                    </div>


                    <div className="row align-items-center">
                        <div className="col-8">
                            <p className="fw-bold">Total</p>
                        </div>

                        <div className="col-4">
                            <p className="fw-bold text-end"><span>USD</span> ${subtotal}</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CheckOutItems;