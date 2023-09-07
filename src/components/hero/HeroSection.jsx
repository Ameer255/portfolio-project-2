import React from "react";
import styles from './hero.module.css';
import img1 from '../../assets/images/hero-img-1.webp'
import img2 from '../../assets/images/hero-img-2.webp'

const HeroSection = () => {
  return (
    <div id="carouselExampleDark" className={` ${styles.carousel} carousel carousel-dark slide`} data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className={`${styles['carousel-item']} carousel-item active`} data-bs-interval="2000">
          <img src={img1} className="d-block w-100" alt="..." />
          <div className={`${styles.captions} position-absolute text-center d-none d-md-block`}>
            <h5>Capsule Exclusive</h5>
            <h3>SAIID KOBEISY X FARFETCH</h3>
            <p>Shop Now</p>
          </div>
        </div>
        <div className={`${styles['carousel-item']} carousel-item`} data-bs-interval="2000">
          <img src={img2} className="d-block w-100" alt="..." />
          <div className={`${styles.captions} position-absolute text-center d-none d-md-block`}>
            <h3>Shop</h3>
            <h3>Ready-To-Wear</h3>
            <p>Shop Now</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className={`${styles.controls} carousel-control-prev-icon`} aria-hidden="true"></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className={`${styles.controls} carousel-control-next-icon`} aria-hidden="true"></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
};

export default HeroSection;
