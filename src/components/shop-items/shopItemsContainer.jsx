import React, { useEffect, useState } from "react";
import styles from './shop-items.module.css';
import ShopItem from "./shopItem";
import Axios from 'axios';
import Loading from "../loading/loading";
import products from "../../productData";

const ShopItemsContainer = () => {

    const [data, setData] = useState(products);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // Axios.get(`https://fakestoreapi.com/products/category/women's%20clothing`)
        //     .then((response) => {
        //         // Update the 'data' state with the fetched data
        //         setData(response.data);
        //         console.log(response.data);
                
        //     })
        //     .catch((error) => {
        //         // Handle any errors here
        //         console.error('Error fetching data:', error);
        //     });

        setTimeout(() => {
            setLoading(false);
        }, 1000);


    }, []);


    if (loading) {
        return (
            <Loading />
        )
    }


    return (
        <div className={`${styles['shop-container']} container my-5`}>
            <div className="row justify-content-center">

                {data &&
                    data.map((item) => <ShopItem product={item} />)
                }
            </div>
        </div>
    )
}

export default ShopItemsContainer;