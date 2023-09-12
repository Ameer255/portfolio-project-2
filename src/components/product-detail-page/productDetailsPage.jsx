import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShopItem from "../shop-items/shopItem";
import Loading from "../loading/loading";
import ProductImages from "./productImages";
import ProductDetails from "./productDetails";
import Axios from "axios";


const ProductDetailsPage = () => {

  const { id } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    Axios.get(`https://fakestoreapi.com/products/category/women's%20clothing`)
      .then((response) => {
        // Update the 'data' state with the fetched data

        let item = response.data.find((p) => p.id === parseInt(id));
        setData(item);
        setLoading(false);
        console.log(item);
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error fetching data:', error);
      });

  }, [])




  if(loading){
    return (
        <Loading />
    )
}



  return (
    <div className={`container-fluid my-4`}>
      <div className={`row justify-content-center`}>
        <ProductImages imgUrl={data.image} />
        <ProductDetails title={data.title} description={data.description} price={data.price} imgUrl={data.image} id={id} />
      </div>
    </div>
  )
};

export default ProductDetailsPage;
