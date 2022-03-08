import React from 'react';

const DashboardReview = () => {
    return (
        <div className="flex justify-center items-center flex-1">
            <div className="p-5 rounded-md shadow-md bg-white">
                <h1 className="text-3xl font-bold mb-4 cusGrayColor">Please fill up those field</h1>

                <form action="" className="">
                    <input type="text"
                        className="outline-none bg-gray-200 px-3 py-2 rounded-md w-full"
                        placeholder="Type your Name" />
                    <input type="text"
                        className="outline-none bg-gray-200 px-3 py-2 rounded-md w-full mt-2"
                        placeholder="Type your Position" />
                    <textarea type="text" rows="4"
                        className="outline-none bg-gray-200 px-3 py-2 rounded-md w-full mt-2 resize-none"
                        placeholder="Type your Review/Feedback" />
                    <input type="text"
                        className="outline-none bg-gray-200 px-3 py-2 rounded-md w-full mt-2"
                        placeholder="Past your photo URL" />

                    <div className="grid grid-cols-2 mt-10">

                        <input type="submit" value="Send Review"
                            className=" text-xl p-2 rounded-md cursor-pointer bg-green-600 text-white" />
                        <input type="submit" value="Send Review"
                            className=" text-xl p-2 rounded-md cursor-pointer bg-green-600 text-white" />
                    </div>

                </form>
            </div>

        </div>
    );
};

export default DashboardReview;