import React, {useState} from 'react';
import * as styles from './styles.module.css';
import globalIcons from '/public/icons';
import localIcons from './icons'
import {motion, AnimatePresence} from 'framer-motion';
import {menuVariants} from './Variants';

function MobileNavBar() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return(
        <>
            <nav className={styles.navbar}>
                <img className={styles.navbar_logo} src={globalIcons['logo']}/>
                <button className={styles.navbar_button} onClick={handleOpen}>
                    {open ? 
                        <img className={styles.navbar_menu_close} src={localIcons['close']}/> : 
                        <img className={styles.navbar_menu_open} src={localIcons['menu']}/>}
                </button>
            </nav>
            <AnimatePresence>
                {open && 
                <motion.menu className={styles.menu} initial='hidden' animate='show' exit='exit' variants={menuVariants}>
                    <ul className={styles.menu_links}>
                        <li>
                            <a className={styles.menu_link}>
                                About
                            </a>
                        </li>
                        <li>
                            <a className={styles.menu_link}>
                                Service
                            </a>
                        </li>
                        <li>
                            <a className={styles.menu_link}>
                                Projects
                            </a>
                        </li>
                        <li>
                            <button className={styles.menu_button}>
                                Schedule a Call
                            </button>
                        </li>
                    </ul>
                </motion.menu>   }               
            </AnimatePresence>    

        </>

    )
}

export default MobileNavBar;