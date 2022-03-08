import React from 'react';
import { NavLink } from 'react-router-dom';
import backgroundVideo from '../../../images/Background VideoForBanner.mp4'

const VideoBanner = () => {


    const handleVideoOnChange = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleVideoOnChange)

    return (
        <div className="relative flex justify-center items-center z-10">
            <video autoPlay loop muted className="videoStyle " onChange={handleVideoOnChange}>
                <source src={backgroundVideo} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
            </video>
            <div className="absolute xs:w-10/12 z-10">
                <h1 className="xs:text-3xl xl:text-7xl font-bold text-white font-overlock">Find your special package & offers</h1>

                <div className="buttons w-56 mt-3 mx-auto">
                    <NavLink to="/bicycles" className="">
                        <button className="defaultBtn">
                            Find Cycles
                            <span className="defaultBtn__inner">
                                <span className="defaultBtn__blobs">
                                    <span className="defaultBtn__blob" />
                                    <span className="defaultBtn__blob" />
                                    <span className="defaultBtn__blob" />
                                    <span className="defaultBtn__blob" />
                                </span>
                            </span>
                        </button>
                    </NavLink>
                </div>
            </div>


        </div>
    );
};

export default VideoBanner;