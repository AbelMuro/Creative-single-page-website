import React from 'react';
import NavigationBar from './Components/NavigationBar';
import Header from './Components/Header';
import StrategicSection from './Components/StrategicSection';
import BulletPointSection from './Components/BulletPointSection';
import ImageCarousel from './Components/ImageCarousel';
import Footer from './Components/Footer';
import './styles.css';

function App() {
    return(
        <>
            <NavigationBar/>
            <Header/>
            <StrategicSection/>
            <BulletPointSection/>
            <ImageCarousel/>
            <Footer/>
        </>
    )
}

export default App;