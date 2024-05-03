import React from 'react';
import * as styles from './styles.module.css';
import icons from '/public/icons';

function StrategicSection() {

    return(
        <section className={styles.section}>
            <img className={styles.section_image}/>
            <div className={styles.section_blackbox}>
                <img className={styles.wave} src={icons['wave']}/>
                <div className={styles.section_content}>
                    <h1>
                        <span>
                            Design
                        </span>
                        &nbsp;
                        is strategic
                    </h1>
                    <p>
                        “A well-crafted design strategy consistently produces 
                        desired outcomes and brand awareness. 
                        We are firm believers that success lies 
                        in creative collaboration with our clients.”
                    </p>
                    <a>
                        Schedule a Call  
                    </a>
                </div>
            </div>

        </section>
    )
}

export default StrategicSection;