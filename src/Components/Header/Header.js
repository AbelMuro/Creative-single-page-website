import React from 'react';
import * as styles from './styles.module.css';
import useMediaQuery from '~/Hooks/useMediaQuery.js';
import MobileHeader from './MobileHeader';

function Header() {
    const [mobile] = useMediaQuery('(max-width: 660px)');

    return mobile ? <MobileHeader/> : (
        <header className={styles.header}>
            <section className={styles.header_content}>
                <h1>
                    Branding & website design agency
                </h1>
                <p>
                    We specialize in visual storytelling 
                    by creating cohesive brand and website design 
                    solutions for small businesses, giving 
                    lasting impressions to audiences in a digital world.   
                </p>
                <button>
                    Learn More
                </button>
            </section>
        </header>
    )
} 

export default Header;