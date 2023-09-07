import React, { useState } from "react";
import NavBar from "./NavBar";
import NavSm from "./NavSm";
import HeroSection from "../hero/HeroSection";

function Header() {

  let [navSmHidden, setNavSmHidden] = useState(true);

  function navToggleHandler(){
    setNavSmHidden(!navSmHidden);
  }
  return (
    <header>
      <NavBar  navToggleHandler={navToggleHandler} navSmHidden={navSmHidden}/>
      <NavSm navSmHidden={navSmHidden}/>
      <HeroSection/>
    </header>

  );
}

export default Header;
