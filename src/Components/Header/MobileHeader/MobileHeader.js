import React from 'react';
import images from './images';
import * as styles from './styles.module.css';

function MobileHeader() {
    return(
        <header className={styles.header}>
            <img className={styles.header_image} src={images['hero']}/>
            <section className={styles.header_content}>
                <h1>
                    Branding & website design agency
                </h1>
                <p>
                    We specialize in visual storytelling by creating 
                    cohesive brand and website design solutions for 
                    small businesses, giving lasting impressions to 
                    audiences in a digital world.
                </p>
                <button>
                    Learn More
                </button>
            </section>
        </header>
    )
}

export default MobileHeader;