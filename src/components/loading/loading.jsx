import React from "react";
import styles from './loading.module.css';

const Loading = () => {

    return (
        <div className={`${styles['loading-overlay']} position-fixed top-0 d-flex justify-content-center align-items-center`}>
            <h4>Loading...</h4>
        </div>
    )

}

export default Loading;