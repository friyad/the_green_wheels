import { faClock, faHandshake, faStar } from '@fortawesome/free-regular-svg-icons';
import { faBicycle, faDollarSign, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AboutGW = () => {
    return (
        <div className="xs:mt-8 lg:mt-24 mx-auto xs:w-11/12 xl:w-10/12">
            <h1 className="text-5xl font-extrabold font-overlock cusGrayColor">About Green Wheels</h1>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xs:gap-5 2xl:gap-14 mt-10">
                <div className="grid grid-cols-4 justify-center items-center">
                    <FontAwesomeIcon icon={faBicycle} className="xs:text-4xl lg:text-5xl 2xl:text-7xl text-gray-500" />
                    <div className="text-left col-span-3">
                        <h2 className="text-xl font-bold cusGrayColor">Many Types of Bicycles</h2>
                        <p className="cusGrayColor"> We can fit you with the perfect bike because we carry all sizes and types of bikes.</p>
                    </div>
                </div>
                <div className="grid grid-cols-4 justify-center items-center">
                    <FontAwesomeIcon icon={faClock} className="xs:text-4xl lg:text-5xl 2xl:text-7xl text-gray-500" />
                    <div className="text-left col-span-3">
                        <h2 className="text-xl font-bold cusGrayColor">Longest Opening Hours</h2>
                        <p className="cusGrayColor"> Have all the time in the world? Rent for an entire day and explore New York City at your leisure.</p>
                    </div>
                </div>
                <div className="grid grid-cols-4 justify-center items-center">
                    <FontAwesomeIcon icon={faStar} className="xs:text-4xl lg:text-5xl 2xl:text-7xl text-gray-500" />
                    <div className="text-left col-span-3">
                        <h2 className="text-xl font-bold cusGrayColor">Best Bicycles in Town</h2>
                        <p className="cusGrayColor"> Comfort. Safety. Our equipment is guaranteed to make your biking experience 100% stree-free.</p>
                    </div>
                </div>
                <div className="grid grid-cols-4 justify-center items-center">
                    <FontAwesomeIcon icon={faDollarSign} className="xs:text-4xl lg:text-5xl 2xl:text-7xl text-gray-500" />
                    <div className="text-left col-span-3">
                        <h2 className="text-xl font-bold cusGrayColor">Rent Fully Insured</h2>
                        <p className="cusGrayColor">A simple bodily injury claim from a customer riding your bike can derail your business.</p>
                    </div>
                </div>
                <div className="grid grid-cols-4 justify-center items-center">
                    <FontAwesomeIcon icon={faHandshake} className="xs:text-4xl lg:text-5xl 2xl:text-7xl text-gray-500" />
                    <div className="text-left col-span-3">
                        <h2 className="text-xl font-bold cusGrayColor">50 000+ Clients Trust</h2>
                        <p className="cusGrayColor">We have already 50 000+ happy clients. You can see there reviews in the review section. </p>
                    </div>
                </div>
                <div className="grid grid-cols-4 justify-center items-center">
                    <FontAwesomeIcon icon={faHandHoldingUsd} className="xs:text-4xl lg:text-5xl 2xl:text-7xl text-gray-500" />
                    <div className="text-left col-span-3">
                        <h2 className="text-xl font-bold cusGrayColor">30 Days Money Back Guarantee</h2>
                        <p className="cusGrayColor">If you do not satisfied we will back your money within 30 days. This is a great offer for you.</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default AboutGW;