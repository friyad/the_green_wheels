import { faDolly, faInfoCircle, faSortAmountUpAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Switch, Route, useParams, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useScrollRestore from '../../Hooks/useScrollRestore';

// const {cycleDetials, brandName, description, hBrack, imgURL, name, price, speed, updatedDate, _id }
const BicycleDetails = () => {
    useScrollRestore()
    const [cycleDetials, setCycleDetails] = useState(null)
    const { detialsID } = useParams()
    const { user } = useAuth()
    const history = useHistory()

    useEffect(() => {
        fetch(`https://tranquil-atoll-77789.herokuapp.com/bicycleDetails/${detialsID}`)
            .then(res => res.json())
            .then(data => setCycleDetails(data))
    }, [])

    const [shippingData, setShippingData] = useState({})
    const shippingOnChange = e => {
        const feild = e.target.name;
        const fieldValue = e.target.value;
        const newData = { ...shippingData }
        newData[feild] = fieldValue;
        setShippingData(newData)
    }


    const handleShippingOnSubmit = e => {
        e.preventDefault()
        const order = {
            cycle: { ...cycleDetials },
            shippingInfo: { ...shippingData },
            userEmail: user.email,
            orderPlaceTime: new Date().toLocaleString(),
            status: 'Pending',
        }
        fetch('https://tranquil-atoll-77789.herokuapp.com/order', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    alert('Welcome! your order place successfully!')
                    history.push("/bicycles")
                }
            })
    }



    return (
        <div className="mx-auto xs:w-11/12 xl:w-10/12">
            {!cycleDetials
                ? <div className="flex justify-center items-center mt-24">
                    <div className="animate-spin rounded-full h-8
                      w-8 border-t-2 border-b-2 border-green-700 mr-2">
                    </div>
                    <h1 className="text-2xl font-bold cusGrayColor">Loading...</h1>
                </div>
                : <div>

                    <div>
                        <div className="p-5">
                            <div className="mx-4 p-4">
                                <div className="flex items-center">

                                    <div className="flex items-center text-white relative">
                                        <div className=" rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-purple-500 ">
                                            <FontAwesomeIcon icon={faInfoCircle}
                                                className="text-2xl" />
                                        </div>
                                        <div className=" absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-purple-500 ">
                                            BiCycle Details
                                        </div>
                                    </div>

                                    <div className=" flex-auto border-t-2 transition duration-500 ease-in-out "></div>

                                    <div className="flex items-center relative">
                                        <div className=" rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  text-gray-500">
                                            <FontAwesomeIcon icon={faDolly}
                                                className="text-2xl" />
                                        </div>
                                        <div className=" absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500" >
                                            Shipping Detials & Place Order
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                    {/* // const {cycleDetials, brandName, description, hBrack, imgURL, name, price, speed, updatedDate, _id } */}

                    <div className="mt-10">
                        <Switch>
                            <Route exact path={`/bicycleDetails/${cycleDetials._id}`}>
                                <div className="grid xs:grid-cols-1 lg:grid-cols-12 gap-8">
                                    <div className="lg:col-span-5">
                                        <img src={cycleDetials.imgURL} alt="" className="w-full h-full" />
                                    </div>
                                    <div className="lg:col-span-7 text-left">
                                        <h1 className="my-3 text-4xl font-bold">{cycleDetials.name}</h1>
                                        <p className="text-xl">{cycleDetials.description}</p>
                                        <h4 className="mt-6 text-2xl  cusGrayColor">Price: {cycleDetials.price}</h4>
                                        <h4 className="text-2xl cusGrayColor ">Brand: {cycleDetials.brandName}</h4>
                                        <h4 className="text-2xl cusGrayColor ">Speed: {cycleDetials.speed} mph</h4>
                                        <h4 className="text-2xl cusGrayColor ">Brack: Hidrolic</h4>

                                        <div className="buttons xs:w-full md:w-5/12 mt-5">
                                            <Link
                                                to={`/bicycleDetails/${cycleDetials._id}/shipping`} className="">
                                                <button className="defaultBtn">
                                                    Go to Shipping
                                                    <span className="defaultBtn__inner">
                                                        <span className="defaultBtn__blobs">
                                                            <span className="defaultBtn__blob" />
                                                            <span className="defaultBtn__blob" />
                                                            <span className="defaultBtn__blob" />
                                                            <span className="defaultBtn__blob" />
                                                        </span>
                                                    </span>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Route>

                            <Route path={`/bicycleDetails/${cycleDetials._id}/shipping`}>
                                <div className="mx-auto">
                                    <div className="leading-loose mx-auto">
                                        <form onSubmit={handleShippingOnSubmit} className="xs:w-11/12 lg:w-7/12 mx-auto text-left m-4 p-10 bg-white rounded shadow-xl">
                                            <p className="text-gray-800 mb-4 text-3xl font-bold text-center">Customer information</p>
                                            <div className>
                                                <label className="block text-sm text-gray-00" htmlFor="cus_name">Name</label>
                                                <input onChange={shippingOnChange} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="name" type="text" required placeholder="Your Name" aria-label="Name" defaultValue={user.displayName} />
                                            </div>
                                            <div className="mt-2">
                                                <label className="block text-sm text-gray-600" htmlFor="cus_email">Email</label>
                                                <input onChange={shippingOnChange} className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="email" type="email" required placeholder="Your Email" aria-label="Email" defaultValue={user.email} />
                                            </div>
                                            <div className="mt-2">
                                                <label className=" block text-sm text-gray-600" htmlFor="cus_email">Address</label>
                                                <input onChange={shippingOnChange} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="street" type="text" required placeholder="Street" aria-label="Email" />
                                            </div>
                                            <div className="mt-2">
                                                <label className="hidden text-sm block text-gray-600" htmlFor="cus_email">City</label>
                                                <input onChange={shippingOnChange} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="city" type="text" required placeholder="City" aria-label="Email" />
                                            </div>
                                            <div className="inline-block mt-2 w-1/2 pr-1">
                                                <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">Country</label>
                                                <input onChange={shippingOnChange} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="country" type="text" required placeholder="Country" aria-label="Email" />
                                            </div>
                                            <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                                                <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">Zip</label>
                                                <input onChange={shippingOnChange} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="zip" type="text" required placeholder="Zip" aria-label="Email" />
                                            </div>

                                            <div className="mt-4">
                                                <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Place Order</button>
                                            </div>
                                        </form>
                                    </div>


                                </div>
                            </Route>

                        </Switch>




                    </div>
                </div>
            }
        </div>
    );
};

export default BicycleDetails;