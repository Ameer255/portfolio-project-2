import React, {useEffect, useState} from "react";
import styles  from "./product-detail.module.css";

const ProductImages = ({imgUrl1, imgUrl2}) => {


    
    const [imgUrls, setImgUrls] = useState(null);


    const importImage = async () => {
        try {
          const img1 = await import(`../../assets/images/product-images/${imgUrl1}`);
          const img2 = await import(`../../assets/images/product-images/${imgUrl2}`);

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
        <div className={`col-10 col-md-8 col-lg-8 ${styles['item-img-container']}`}>
                <div className={` ${styles['img-container']}`}>
                    <img src={imgUrls && imgUrls.img1} alt="item" />
                </div>
        </div>
    )
}

export default ProductImages;