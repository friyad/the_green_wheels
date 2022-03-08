import React from 'react';
import useScrollRestore from '../../Hooks/useScrollRestore';
import AboutGW from './AboutGW/AboutGW';
import FreeWithCycles from './FreeWithCycles/FreeWithCycles';
import HomeBicycles from './HomeBicycles/HomeBicycles';
import Review from './Review/Review';
import VideoBanner from './VideoBanner/VideoBanner';

const Home = () => {
    useScrollRestore()
    return (
        <div className="max-w-screen-3xl mx-auto">
            <VideoBanner />
            <AboutGW />
            <HomeBicycles />
            <FreeWithCycles />
            <Review />
        </div>
    );
};


export default Home;