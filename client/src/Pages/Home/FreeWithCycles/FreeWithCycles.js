import { faHardHat, faKey, faMapMarkedAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import freeWithBicyclesImage from '../../../images/freeWithBiCycles.jpg'

const FreeWithCycles = () => {
    return (
        <div className="mt-24 xs:w-11/12 mx-auto bg-green-50 rounded-lg p-5">
            <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
                <div className="">
                    <img src={freeWithBicyclesImage} alt="" className="rounded-lg w-full h-full" />
                </div>
                <div className="text-left cusGrayColor">
                    <h1 className="xs:text-3xl lg:text-4xl font-bold">Included with our every Bicycles</h1>
                    <div className="grid xs:grid-cols-1 lg:grid-cols-2 xs:mt-5 gap-8 lg:mt-10">
                        <div>
                            <div className="flex mb-1">
                                <FontAwesomeIcon icon={faHardHat} className="text-3xl font-bold" />
                                <h3 className="text-2xl ml-3 font-bold">Helmet</h3>
                            </div>
                            <p>We carry the biggest and best brands and offer the largest range of sizes and colours.</p>
                        </div>
                        <div>
                            <div className="flex mb-1">
                                <FontAwesomeIcon icon={faKey} className="text-3xl font-bold" />
                                <h3 className="text-2xl ml-3 font-bold">Bike lock</h3>
                            </div>
                            <p>A bike is only as good as the lock that keeps it safe. Make sure yours can thwart any would-be thief.</p>
                        </div>
                        <div>
                            <div className="flex mb-1">
                                <FontAwesomeIcon icon={faMapMarkedAlt} className="text-3xl font-bold" />
                                <h3 className="text-2xl ml-3 font-bold">Free GPS Guided</h3>
                            </div>
                            <p>Check out our sights lists to find the best places to bike & tour in Central Park and beyond.</p>
                        </div>
                        <div>
                            <div className="flex mb-1">
                                <FontAwesomeIcon icon={faShoppingBasket} className="text-3xl font-bold" />
                                <h3 className="text-2xl ml-3 font-bold">Basket/bike bag</h3>
                            </div>
                            <p>Basket bag with weatherproof protection. Shoulder strap attachments make it excellent off-bike as well.</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default FreeWithCycles;