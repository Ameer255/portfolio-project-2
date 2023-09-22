import React, { useState } from "react";
import NavBar from "./NavBar";
import NavSm from "./NavSm";

function Header({cartItemsCount}) {

  let [navSmHidden, setNavSmHidden] = useState(true);

  function navToggleHandler(){
    setNavSmHidden(!navSmHidden);
  }
  return (
    <header>
      <NavBar  navToggleHandler={navToggleHandler} navSmHidden={navSmHidden} cartItemsCount={cartItemsCount}/>
      <NavSm navSmHidden={navSmHidden}/>
    </header>

  );
}

export default Header;
