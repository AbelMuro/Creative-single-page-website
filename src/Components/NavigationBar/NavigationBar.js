import React from 'react';
import * as styles from './styles.module.css';
import icons from '/public/icons';
import MobileNavBar from './MobileNavBar';
import useMediaQuery from '~/Hooks/useMediaQuery.js';

function NavigationBar() {
    const [mobile] = useMediaQuery('(max-width: 660px)');

    return mobile ? <MobileNavBar/> : (
        <nav className={styles.navbar}>
                <div className={styles.navbar_logoContainer}>
                    <img className={styles.navbar_logo} src={icons['logo']}/>                    
                </div>

                <ul className={styles.navbar_links}>
                    <li>
                        <a className={styles.link}>
                            About
                        </a> 
                    </li>
                    <li>
                        <a className={styles.link}>
                            Service
                        </a> 
                    </li>
                    <li>
                        <a className={styles.link}>
                            Projects
                        </a> 
                    </li>
                    <li>
                        <button className={styles.schedulebutton}>
                            Schedule a Call
                        </button>
                    </li>
                </ul>
        </nav>
    )
}

export default NavigationBar;