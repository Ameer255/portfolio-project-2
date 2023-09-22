import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './shop-items.module.css';

const ShopItem = ({product}) => {

    const {title, id, price, images} = product;
    const [imgUrls, setImgUrls] = useState(null);


    const importImage = async () => {
        try {
          const img1 = await import(`../../assets/images/product-images/${images[0].img1}`);
          const img2 = await import(`../../assets/images/product-images/${images[0].img2}`);

          setImgUrls({img1: img1.default, img2: img2.default});
        } catch (error) {
          console.error('Error importing image:', error);
          return null;
        }
      };


    useEffect(()=>{
        importImage();
        
    })

    return (

     
        <div className={`col-10 col-md-5 col-lg-4 gap-2 my-3  ${styles['shop-item']}`}>

            {imgUrls ? 
            <Link className="text-decoration-none text-reset" to={`/shop/products/${title.split(' ').join('-')}`}>
                <div className={` ${styles['img-container']}`}>
                    <img src={imgUrls.img1} alt="item" />
                </div>

                <div className={`${styles['item-details']} py-2 text-center text-md-start`}>
                    <p>{title}</p>
                    <p>{price}</p> <br />
                </div>
            </Link>
            : ''}

        </div>
        
    )
}

export default ShopItem;