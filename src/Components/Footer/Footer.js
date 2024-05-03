import React from 'react';
import * as styles from './styles.module.css';
import icons from '/public/icons';

function Footer() {
    return(
        <footer className={styles.footer}>
            <img className={styles.wave_icon} src={icons['wave']}/>
            <section className={styles.footer_content}>
                <h1>
                    Let's build something great together
                </h1>
                <button>
                    Schedule a Call
                </button>                
            </section>
        </footer>
    )
}

export default Footer;