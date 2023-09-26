import React from "react";
import styles from './dressing-showcase.module.css';

const DressingDisplay = ({ width, height, bg, overlayTxt, btnText }) => {

    return (
        <div className={`position-relative ${styles['dressing-showcase-container']}`} style={{ width, height, backgroundImage: `url(${bg})` }}>

            <div className={`${styles['dressing-overlay']} position-absolute`}></div>


            <div className={`position-absolute px-3 py-4  ${styles['dressing-overlay-text-container']}`}>

                <div className={`position-relative `}>
                    <h2>
                        {overlayTxt.split('-').map(part => <>{part}<br /></>)}
                    </h2>
                    <Button txt={btnText} />
                </div>

            </div>

        </div>
    )

}


export default DressingDisplay;


function Button({ txt }) {

    return (
        <button className={`btn px-4 py-3 ${styles.button}`}>{txt}</button>
    )
}

