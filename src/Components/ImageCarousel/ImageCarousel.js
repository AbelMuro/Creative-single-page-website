import React, {useState, useEffect, useMemo} from 'react';
import * as styles from './styles.module.css';
import icons from './icons';
import images from './images';
import data from './Data';
import useMediaQuery from '~/Hooks/useMediaQuery.js';

function ImageCarousel() {
    const [slide, setSlide] = useState(0);
    const [image, setImage] = useState({});
    const [tablet] = useMediaQuery('(max-width: 840px)');
    const [mobile] = useMediaQuery('(max-width: 660px)');

    const handlePrevious = () => {
        if(slide === 0) return;
        setSlide(slide - 1);
    }

    const handleNext = () => {
        if(slide === 2) return;
        setSlide(slide + 1);
    }

    const handleScreen = (slide) => {
        if(mobile)
            return slide + 'Mobile';
        else if(tablet)
            return slide + 'Tablet';
        else
            return slide + 'Desktop';
    }

    useEffect(() => {
        if(slide === 0){
            setImage(data[slide])
        }
        else if(slide === 1){
            setImage(data[slide]);
        }
        else{
            setImage(data[slide]);
        }

    }, [slide, mobile, tablet])

    return(
        <section className={styles.carousel}>
            <div className={styles.carousel_blackbox}>
                <img className={styles.wave_icon} src={icons['wavy']}/>
                <div className={styles.carousel_content}>
                    <h1>
                        Brand naming & guidelines
                    </h1>
                    <div className={styles.carousel_buttons}>
                        <button onClick={handlePrevious}>
                            <div className={styles.carousel_previous_icon}/>
                        </button>                    
                        <button onClick={handleNext}>
                            <div className={styles.carousel_next_icon}/>
                        </button>
                    </div>                      
                </div>
            </div>
            <div className={styles.carousel_images} style={{backgroundImage: `url(${images[handleScreen(image.image)]})`}}>
                <div className={styles.carousel_info}>
                    <h2>
                        {data[slide].title}
                    </h2>
                    <p>
                        {data[slide].date}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ImageCarousel;