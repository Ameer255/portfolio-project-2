import React, { useEffect, useState } from "react";
import styles from './shop-items.module.css';
import ShopItem from "./shopItem";
import Axios from 'axios';
import Loading from "../loading/loading";

const ShopItemsContainer = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        Axios.get(`https://fakestoreapi.com/products/category/women's%20clothing`)
            .then((response) => {
                // Update the 'data' state with the fetched data
                setData(response.data);
                console.log(response.data);
                setLoading(false);
            })
            .catch((error) => {
                // Handle any errors here
                console.error('Error fetching data:', error);
            });

    }, []);


    if (loading) {
        return (
            <Loading />
        )
    }


    return (
        <div className="container-fluid my-5">
            <div className="row justify-content-center">

                {data &&
                    data.map((item) => <ShopItem title={item.title} description={item.description} imgUrl={item.image} price={item.price} link={item.id} />)
                }
            </div>
        </div>
    )
}

export default ShopItemsContainer;