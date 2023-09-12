import React, { useState } from "react";
import NavBar from "./NavBar";
import NavSm from "./NavSm";

function Header() {

  let [navSmHidden, setNavSmHidden] = useState(true);

  function navToggleHandler(){
    setNavSmHidden(!navSmHidden);
  }
  return (
    <header>
      <NavBar  navToggleHandler={navToggleHandler} navSmHidden={navSmHidden}/>
      <NavSm navSmHidden={navSmHidden}/>
    </header>

  );
}

export default Header;
