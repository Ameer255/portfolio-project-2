import React from "react";
import { Link} from "react-router-dom";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import styles from './header.module.css';

const NavSm = ({navSmHidden}) => {

    return (
        <div className={`${styles['nav-sm']} ${navSmHidden ? styles['nav-hidden'] : ''}`}>
            <ul>
                <div>
                    <li>
                        <Link to="#">Shop</Link>
                    </li>
                    <div><ArrowForwardIosOutlinedIcon /></div>
                </div>
                <div>
                    <li>
                        <Link to="#">Couture</Link>
                    </li>
                    <div><ArrowForwardIosOutlinedIcon /></div>
                </div>
                <div>
                    <li>
                        <Link to="#">Bridal</Link>
                    </li>
                    <div><ArrowForwardIosOutlinedIcon /></div>
                </div>

            </ul>

            <hr />

            <ul>
                <li>
                    <div className={styles.account}>
                        <Link to='/'>Account</Link>
                    </div>

                </li>
            </ul>
        </div>
    )
}

export default NavSm;