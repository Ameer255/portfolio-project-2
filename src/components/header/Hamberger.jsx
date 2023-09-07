import React from "react";
import styles from './header.module.css';

function Hamberger({open, onclick}) {

    return (

        <div className={`${styles.hamberger} ${open ? '' : styles.toggle}`} onClick={() => onclick()}>
            <span className={styles.item1}></span>
            <span className={styles.item2}></span>
            <span className={styles.item3}></span>
        </div>
    )
}

export default Hamberger;