import { faBriefcase, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Order from './Order/Order';

const MyOrders = () => {
    const [allOrder, setAllOrders] = useState(null)
    const { user } = useAuth()

    useEffect(() => {
        fetch(`https://tranquil-atoll-77789.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    let pendingOrders;
    let totalPrice = 0;
    if (allOrder) {
        const findPendingOrders = allOrder.filter(order => order.status === "Pending")
        pendingOrders = findPendingOrders.length;

        for (const order of allOrder) {
            totalPrice += order.cycle.price
        }

    }


    const handleUserOrderDelete = id => {

        fetch(`https://tranquil-atoll-77789.herokuapp.com/orders/${id}`, {
            method: "delete",
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount > 0) {
                    alert('Your Order Deleted Successfully!')
                    const withOutDeletedOrder = allOrder.filter(order => order._id !== id)
                    setAllOrders(withOutDeletedOrder)
                }
            })

    }




    return (
        <div className="flex-1 flex flex-col overflow-hidden">
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                <div className="container mx-auto px-6 py-8">
                    <div className="mt-4">
                        <div className="flex flex-wrap -mx-6">
                            <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                                <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white text-left">
                                    <div className="p-3 text-center rounded-full bg-red-400 w-14 h-14 bg-opacity-75">
                                        <FontAwesomeIcon icon={faDollarSign}
                                            className="text-white text-3xl text-center" />
                                    </div>
                                    <div className="mx-5">
                                        <h4 className="text-2xl font-semibold text-gray-700">
                                            ${totalPrice}</h4>
                                        <div className="text-gray-500">Total Spent</div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                                <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                                    <div className="p-3 rounded-full bg-pink-600 bg-opacity-75">
                                        <svg className="h-8 w-8 text-white" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z" fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                                            <path d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z" stroke="currentColor" strokeWidth={2} />
                                        </svg>
                                    </div>
                                    <div className="mx-5 text-left">
                                        <h4 className="text-2xl font-semibold text-gray-700">{('0' + pendingOrders).slice(-2)}</h4>
                                        <div className="text-gray-500">Total Pending Orders</div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                                <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white text-left">
                                    <div className="p-3 rounded-full bg-red-400 w-14 h-14 bg-opacity-75">
                                        <FontAwesomeIcon icon={faBriefcase}
                                            className="text-white text-3xl " />
                                    </div>
                                    <div className="mx-5">
                                        <h4 className="text-2xl font-semibold text-gray-700">
                                            {('0' + allOrder?.length).slice(-2)}</h4>
                                        <div className="text-gray-500">Total Orders</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col mt-8">
                        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                                <table className="min-w-full text-left">
                                    <thead>
                                        <tr>
                                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Photo</th>
                                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Name</th>
                                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Brand</th>
                                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Price</th>
                                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Brack Name</th>
                                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Speed</th>
                                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Status</th>
                                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {!allOrder
                                            ? <tr>
                                                <td colSpan="9">
                                                    <div className="flex justify-center items-center my-24">
                                                        <div
                                                            className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-700 mr-2">
                                                        </div>
                                                        <h1 className="text-2xl font-bold cusGrayColor">Loading...</h1>
                                                    </div>
                                                </td>
                                            </tr>

                                            : allOrder.map(order => <Order
                                                key={order._id}
                                                order={order}
                                                handleUserOrderDelete={handleUserOrderDelete}
                                            />)


                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MyOrders;