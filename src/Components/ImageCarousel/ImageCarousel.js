import React, {useState} from 'react';
import * as styles from './styles.module.css';
import icons from './icons';
import images from './images';

//i will need to implementthe carousel functionality
function ImageCarousel() {
    const [image, setImage] = useState(1);

    return(
        <section className={styles.carousel}>
            <div className={styles.carousel_blackbox}>
                <img className={styles.wave_icon} src={icons['wavy']}/>
                <div className={styles.carousel_content}>
                    <h1>
                        Brand naming & guidelines
                    </h1>
                    <div className={styles.carousel_buttons}>
                        <button>
                            <div className={styles.carousel_previous_icon}/>
                        </button>                    
                        <button>
                            <div className={styles.carousel_next_icon}/>
                        </button>
                    </div>                      
                </div>
            </div>
            <div className={styles.carousel_images} style={{backgroundImage: `url(${images['slide1Desktop']})`}}>
                <div className={styles.carousel_info}>
                    <h2>
                        Lean Product Roadmap
                    </h2>
                    <p>
                        2019 Project
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ImageCarousel;