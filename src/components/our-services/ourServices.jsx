import React from "react";
import serviceImg1 from '../../assets/images/our-services1.png';
import serviceImg2 from '../../assets/images/our-services2.png';
import serviceImg3 from '../../assets/images/our-services3.png';
import styles from './services.module.css';
import Service from "./service";

const OurServices = ({ content, img }) => {


    return (
        <div className={`${styles['main-container']} py-4 d-flex justify-content-center container-fluid`}>
            <div className="row">
                <Service content='We offer worldwide shipping with every purchase at no additional cost.' title='Complimentary Shipping' img={serviceImg1} />
                <Service content='Our style consultants are available to assist you any time. Connect via the WhatsApp icon or by sending an email.' title='Customer Care' img={serviceImg2} />
                <Service content='Return unworn, unaltered items within 14 days for a refund. See our return and refund policy for full details.' title='Return & Refund' img={serviceImg3} />
            </div>
        </div>
    )
}


export default OurServices;