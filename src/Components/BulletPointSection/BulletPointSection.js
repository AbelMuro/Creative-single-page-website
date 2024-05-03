import React from 'react';
import * as styles from './styles.module.css';

function BulletPointSection() {

    return(
        <section className={styles.section}>
            <h1 className={styles.section_title}>
                Our approach for creating a winning brand
            </h1>
            <article className={styles.section_redbox}>
                <ul className={styles.details}>
                    <li>
                        <h2 className={styles.details_title}>
                            Brand Strategy
                        </h2>
                        <p className={styles.details_desc}>
                            Brand strategy is critical for long-term success. 
                            Outshining competitors and capturing the target 
                            audience are key.
                        </p>
                        <p className={styles.details_number}>
                            01
                        </p>
                    </li>
                    <li>
                        <h2 className={styles.details_title}>
                            Brand Design
                        </h2>
                        <p className={styles.details_desc}>
                            Keeping the brand design unique and meaningful 
                            helps in communicating the brand’s timeless 
                            value effectively.
                        </p>
                        <p className={styles.details_number}>
                            02
                        </p>
                    </li>
                    <li>
                        <h2 className={styles.details_title}>
                            Web Design
                        </h2>
                        <p className={styles.details_desc}>
                            A beautifully crafted website is the best 
                            tool for brand awareness, and ultimately 
                            results in increased revenues.
                        </p>
                        <p className={styles.details_number}>
                            03
                        </p>
                    </li>
                </ul>
            </article>
        </section>
    )
}

export default BulletPointSection;