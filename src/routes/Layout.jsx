import React, { Fragment, useState, useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {

  const [cartItemsCount, setCartItemsCount] = useState(
    localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')).length : 0
  );
 
  const updateCartCount =(count)=>{
    setCartItemsCount((count));
  }

  const removeFromCart = ()=>{
    setCartItemsCount(prevCount => prevCount-1);
  }


  return (
    <Fragment>
      <Header cartItemsCount={cartItemsCount}/>
      <main className="min-h-screen">
        <Outlet context={{updateCartCount, removeFromCart}}/>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
