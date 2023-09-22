import React, { useEffect, useState } from "react";

import ProductDisplay from "../components/products-showcase/productsDisplay";
import shopBagsImg from '../assets/images/shop-bags.webp';
import shopBelts from '../assets/images/shop-belts.gif';
import circleImage from '../assets/images/Introducing-circle-banner.webp';
import dressingImg1 from '../assets/images/dressing-img1.webp';
import dressingImg2 from '../assets/images/dressing-img-2.webp';
import dressingImg3 from '../assets/images/dressing-img-3.webp';
import dressingImg4 from '../assets/images/dressing-img-4.webp';
import DressingDisplay from "../components/dressing-showcase/dressingShowcase";
import OurServices from "../components/our-services/ourServices";
import HeroSection from "../components/hero/HeroSection";

function Home() {
  // const { loading, data, error } = useFetch("products");
 

  return (
    <div>
      <HeroSection />
      <ProductDisplay bg={shopBagsImg} overlayTxt1='Shop' link='Shop Now' overlayTxt2='Bags' width='100%' height='80vh' />
      <ProductDisplay bg={shopBelts} overlayTxt1='Shop' link='Shop Now' overlayTxt2='Belts' width='100%' height='90vh' />
      <ProductDisplay bg={circleImage} overlayTxt1='' overlayTxt2='' width='100%' height='100vh' />
      <div className="d-flex flex-wrap">
        <DressingDisplay bg={dressingImg1} overlayTxt='Couture 2023' width='40%' height='100vh' btnText='Discover the collection' />
        <DressingDisplay bg={dressingImg2} overlayTxt='A Vision of Love' width='60%' height='100vh' btnText='Discover the collection' />
        <DressingDisplay bg={dressingImg3} overlayTxt='Your Dream - Dress Awaits' width='60%' height='100vh' btnText='Book Now' />
        <DressingDisplay bg={dressingImg4} overlayTxt='The House' width='40%' height='100vh' btnText='Discover more' />
      </div>

      <OurServices />
    </div>
  );
}

export default Home;
