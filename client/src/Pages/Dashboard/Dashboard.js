import { faBriefcase, faCommentAlt, faHandHoldingUsd, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import useScrollRestore from '../../Hooks/useScrollRestore';
import logo from '../../images/logo.png'
import DashboardPayment from './DashboardPayment/DashboardPayment';
import DashboardReview from './DashboardReview/DashboardReview';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import MyOrders from './MyOrder/MyOrders';

const Dashboard = () => {
    useScrollRestore()

    const navlinkStyles = {
        backgroundColor: '#374151',
    }



    return (
        <div className="max-w-screen-3xl mx-auto">
            <div>
                <div className="flex bg-gray-200" style={{ height: '800px' }}>
                    <div className="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden" />
                    <div className="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
                        <div className="flex items-center justify-center mt-8">
                            <div className="flex items-center">
                                <img src={logo} alt="" className="w-20" />
                                <span className="text-white text-2xl mx-2 font-semibold">Dashboard</span>
                            </div>
                        </div>
                        <nav className="mt-10">
                            <NavLink activeStyle={navlinkStyles} className="flex items-center mt-4 py-2 px-6 text-gray-100" to="/dashboard/myOrders">
                                <FontAwesomeIcon icon={faBriefcase} />
                                <span className="mx-3">My Orders</span>
                            </NavLink>
                            <NavLink activeStyle={navlinkStyles} className="flex items-center mt-4 py-2 px-6 text-gray-100" to="/dashboard/payment">
                                <FontAwesomeIcon icon={faHandHoldingUsd} />
                                <span className="mx-3">Payment</span>
                            </NavLink>
                            <NavLink activeStyle={navlinkStyles} className="flex items-center mt-4 py-2 px-6 text-gray-100" to="/dashboard/review">
                                <FontAwesomeIcon icon={faCommentAlt} />
                                <span className="mx-3">Give A Review</span>
                            </NavLink>
                            <NavLink activeStyle={navlinkStyles} className="flex items-center mt-4 py-2 px-6 text-gray-100" to="/dashboard/makeAdmin">
                                <FontAwesomeIcon icon={faUserShield} />
                                <span className="mx-3">Make Admiin</span>
                            </NavLink>
                        </nav>
                    </div>

                    <Switch>
                        <Route exact path="/dashboard/myOrders">
                            <MyOrders />
                        </Route>

                        <Route exact path="/dashboard/payment">
                            <DashboardPayment />
                        </Route>

                        <Route path="/dashboard/review">
                            <DashboardReview />
                        </Route>

                        <Route path="/dashboard/makeAdmin">
                            <MakeAdmin />
                        </Route>
                    </Switch>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;