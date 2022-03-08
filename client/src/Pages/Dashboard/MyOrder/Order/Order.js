import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Order = ({ order, handleUserOrderDelete }) => {
    const { brandName, description, hBrack, imgURL,
        name, price, speed, updatedDate, _id
    } = order.cycle

    //orderPlaceTime, status


    return (
        <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">
                    <div className="h-14 w-24">
                        <img className="h-full w-full" src={imgURL} alt />
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-md leading-5 font-medium text-gray-900">{name}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-500">{brandName}</div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-md leading-5 text-gray-900">${price}</div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-md leading-5 text-gray-500">
                {hBrack ? "Hidrolic" : "None"}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-md leading-5 text-gray-500">
                {speed} mph
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <span className={order.status === "Pending" ? "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-black" : "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"}>{order.status}</span>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                <button
                    className="px-3 py-2 rounded-md bg-green-600 text-white font-semibold">
                    <FontAwesomeIcon icon={faEdit} /> Edit Shippint Details</button>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                <button
                    onClick={() => handleUserOrderDelete(order._id)}
                    className="px-3 py-2 rounded-md bg-red-600 text-white font-semibold"
                ><FontAwesomeIcon icon={faTrash} /> Delete</button>
            </td>
        </tr >
    );
};

export default Order;