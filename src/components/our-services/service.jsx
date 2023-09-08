import React from "react";
import styles from './services.module.css';
const  Service = ({title, content, img})=>{


    return (
        <div className={`${styles['service-container']} text-center px-5 py-3 col-12 col-md-4 col-lg-4 d-felx flex-column justify-content-center align-items-center gap-2`}>

            <img src={img} alt="services img" />
            <p className="fw-bold">{title}</p>
            <p className={styles.content}>{content}</p>
        </div>
    )
}

export default Service;