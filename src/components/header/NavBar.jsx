import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from './header.module.css';
import Hamberger from "./Hamberger";
// import logo from './logo.avif'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


function NavBar({ navToggleHandler, navSmHidden }) {

    let [onTop, setOnTop] = useState(true);

    window.addEventListener("scroll", function() {
        // Get the scroll position
        let scrollPosition = window.scrollY;
      
        // Check if the user has scrolled a bit (e.g., 100 pixels)
        if (scrollPosition > 70) {
          console.log("User has scrolled a bit.");
          setOnTop(false);
        } else {
          console.log("User is at the extreme top.");
          setOnTop(true)
        }
      });



    return (
        <nav className={`${styles.nav} ${onTop ? '' : styles.dark} px-3 py-3`}>
            <Hamberger navSmHidden={navSmHidden} onclick={() => navToggleHandler()} open={navSmHidden} />

            <h2 className={styles.h2}>SAIID KOBEISY</h2>

            <div className={styles['nav-links-container']}>
                <NavLink to='/shop'>Shop</NavLink>
                <NavLink to='/about'>Couture</NavLink>
                <NavLink to='/contact'>Bridal</NavLink>
            </div>

            <div className={styles['nav-icons-container']}>
                <Link to='/'>
                    <PersonOutlineOutlinedIcon />
                </Link>
                <Link to='/'>
                    <svg viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>Search</title>
                        <g stroke="none" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                            <g transform="translate(-1335.000000, -30.000000)" stroke="currentColor">
                                <g transform="translate(1336.000000, 31.000000)">
                                    <circle cx="12" cy="12" r="12"></circle>
                                    <line x1="27" y1="27" x2="20.475" y2="20.475" id="Path"></line>
                                </g>
                            </g>
                        </g>
                    </svg>
                </Link>
                <Link to='/cart'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Basket</title>
                        <path d="M68.4 192A20.38 20.38 0 0048 212.2a17.87 17.87 0 00.8 5.5L100.5 400a40.46 40.46 0 0039.1 29.5h232.8a40.88 40.88 0 0039.3-29.5l51.7-182.3.6-5.5a20.38 20.38 0 00-20.4-20.2H68" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="20"></path>
                        <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="20" d="M160 192l96-128 96 128"></path>
                    </svg>
                </Link>

                <select>
                    <option value='Euro'>EUR</option>
                    <option value='US Dollar'>USD</option>
                    <option value='Canadian Dollar'>CAD</option>
                </select>
            </div>
        </nav>
    );
}


export default NavBar;
