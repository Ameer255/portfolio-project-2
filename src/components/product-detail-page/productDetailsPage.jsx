import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShopItem from "../shop-items/shopItem";
import Loading from "../loading/loading";
import ProductImages from "./productImages";
import ProductDetails from "./productDetails";
import Axios from "axios";
import products from "../../productData";
import styles from './product-detail.module.css';


const ProductDetailsPage = () => {

  let { id } = useParams();
  id = id.split('-').join(' ');

  const [data, setData] = useState(products.find((p) => p.title === id));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Axios.get(`https://fakestoreapi.com/products/category/women's%20clothing`)
    //   .then((response) => {
    //     // Update the 'data' state with the fetched data

    //     let item = response.data.find((p) => p.id === parseInt(id));
    //     setData(item);
    //     setLoading(false);
    //     console.log(item);
    //   })
    //   .catch((error) => {
    //     // Handle any errors here
    //     console.error('Error fetching data:', error);
    //   });

      setTimeout(() => {
        setLoading(false);
    }, 1000);


  }, [])




  if(loading){
    return (
        <Loading />
    )
}



  return (
    <div className={`container-fluid`}>
      <div className={`row justify-content-center`}>
        <ProductImages imgUrl1={data.images[0].img1} imgUrl2={data.images[0].img2} />
        <ProductDetails title={data.title} description={data.description} price={data.price} imgUrl1={data.images[0].img1} imgUrl2={data.images[0].img2} id={data.id} color={data.color} sizes={data.sizes}/>
      </div>
    </div>
  )
};

export default ProductDetailsPage;
