import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cycle from './Cycle/Cycle';

const Bicycles = () => {
    const [bicycles, setBicycles] = useState(null)

    useEffect(() => {
        fetch('https://tranquil-atoll-77789.herokuapp.com/bicycles')
            .then(res => res.json())
            .then(data => setBicycles(data))
    }, [])


    // console.log(bicycles)

    return (
        <div>
            <div>

            </div>


            <div className="mx-auto xs:w-11/12 xl:w-10/12 mt-14">
                {!bicycles
                    ? <div className="flex justify-center items-center mt-24">
                        <div className="animate-spin rounded-full h-8
                      w-8 border-t-2 border-b-2 border-green-700 mr-2">
                        </div>
                        <h1 className="text-2xl font-bold cusGrayColor">Loading...</h1>
                    </div>
                    :
                    <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {bicycles.map(cycle => <Cycle
                            key={cycle._id}
                            cycle={cycle}
                        />)

                        }
                    </div>

                }
            </div>
        </div>
    );
};

export default Bicycles;