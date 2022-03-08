import React from 'react';
import { Link } from 'react-router-dom';
import brandIcon from '../../../images/icons/brandIcon.png'
import speedIcon from '../../../images/icons/speedIcon.png'


const Cycle = ({ cycle }) => {
    const { brandName, description, hBrack, imgURL, name, price, speed, updatedDate, _id } = cycle;



    return (
        <div className="p-4 rounded-md shadow-md">
            <div>
                <img src={imgURL} alt="" className="rounded-md w-full h-60" />
            </div>
            <div>
                <h2 className="text-2xl my-3 font-semibold">{name}</h2>
                <p className="text-justify">{description.slice(0, 250)}</p>

                <div className="flex justify-around items-center my-3">
                    <div className="flex justify-center items-center">
                        <img src={brandIcon} alt="" className="w-8 mr-1" />
                        <h4 className="text-2xl font-semibold">{brandName}</h4>
                    </div>
                    <h2 className="text-2xl font-semibold">${price}</h2>
                    <div className="flex justify-center items-center">
                        <img src={speedIcon} alt="" className="w-10 mr-1" />
                        <h4 className="text-2xl font-semibold">{speed}</h4>
                    </div>
                </div>

                <Link to={`/bicycleDetails/${_id}`} className="ml-5">
                    <div className="buttons">
                        <button className="defaultBtn">
                            See Details & Buy
                            <span className="defaultBtn__inner">
                                <span className="defaultBtn__blobs">
                                    <span className="defaultBtn__blob" />
                                    <span className="defaultBtn__blob" />
                                    <span className="defaultBtn__blob" />
                                    <span className="defaultBtn__blob" />
                                </span>
                            </span>
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Cycle;