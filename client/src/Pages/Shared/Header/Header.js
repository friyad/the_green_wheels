import React, { useState } from 'react';
import logo from '../../../images/logo.png'
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
    const [smMenuOpenClose, setSmMenuOpenClose] = useState(false)
    const [fullHeader, setFullHeader] = useState(false)
    const { user, handleLogOut } = useAuth()
    const [profileMenuOpen, setProfileMenuOpen] = useState(false)
    const history = useHistory()

    const styles = {
        color: 'black',
        borderBottom: '1px solid black'
    }

    const handleLogOutRedireact = () => {
        handleLogOut()
        history.push("/")
        setProfileMenuOpen(false)
    }


    const handleFullHeader = () => {
        if (window.scrollY >= 500) {
            setFullHeader(true)
        }
        else {
            setFullHeader(false)
        }
    }
    window.addEventListener('scroll', handleFullHeader)




    return (
        <div className={fullHeader ? "sticky top-0 shadow-sm bg-white" : "static"}
            style={{ zIndex: 999999999 }}
        >
            {/* This example requires Tailwind CSS v2.0+ */}
            <div className="">
                <div className="max-w-screen-3xl  rounded-sm mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-gray-100 py-6 md:justify-start ">
                        <div className="flex justify-start">
                            <img className="w-32" src={logo} alt="" />
                        </div>

                        <div className="-mr-2 -my-2 md:hidden">
                            <button onClick={() => setSmMenuOpenClose(!smMenuOpenClose)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                <span className="sr-only">Open menu</span>
                                {/* Heroicon name: outline/menu */}
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                        <nav className="hidden md:flex ml-24  space-x-10">

                            <NavLink activeStyle={styles} to="/home" className="text-xl  font-medium text-gray-500 hover:text-gray-900">
                                Home
                            </NavLink>
                            {user &&
                                <NavLink activeStyle={styles} to="/dashboard/myOrders" className="text-xl font-medium text-gray-500 hover:text-gray-900">
                                    Dashboard
                                </NavLink>
                            }
                            <NavLink activeStyle={styles} to="/bicycles" className="text-xl font-medium text-gray-500 hover:text-gray-900">
                                Bicycles
                            </NavLink>

                        </nav>



                        {!user
                            ? <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                <div className="buttons ">
                                    <NavLink to="/login" className="">
                                        <button className="defaultBtn">
                                            Log In
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

                                <NavLink to="/registration" className="ml-5">
                                    <div className="buttons">
                                        <button className="defaultBtn">
                                            Registration
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
                                </NavLink>
                            </div>
                            :
                            <>
                                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                    <button onClick={() => setProfileMenuOpen(!profileMenuOpen)} className="bg-gray-400 w-12 h-12 rounded-full flex justify-center items-center">
                                        {user.photoURL
                                            ? <img src={user?.photoURL} alt="" className="rounded-full w-full h-full" />
                                            :
                                            <h2 className="text-3xl select-none font-bold text-white">{user.displayName?.slice(0, 1)}</h2>
                                        }
                                    </button>
                                </div>
                                {profileMenuOpen &&

                                    <div className="relative md:inline-block text-left xs:hidden ">
                                        <div className="origin-top-right absolute right-0 mt-8 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1} style={{ zIndex: 999999 }}>
                                            <div className="py-1" role="none">
                                                {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">{user.displayName}</a>
                                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">Support</a>
                                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">License</a>

                                                <button onClick={handleLogOutRedireact} className="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-3">
                                                    Sign out
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                }
                            </>
                        }
                    </div>
                </div>






                <CSSTransition
                    in={smMenuOpenClose}
                    unmountOnExit
                    timeout={{ appear: 0, enter: 100, exit: 300 }}
                    classNames="alert"
                >
                    <div className="inset-x-0 p-2 transition transform origin-top-right md:hidden" >
                        <div div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <NavLink activeStyle={styles} to="/home" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Home
                                </NavLink>
                                {user &&
                                    <NavLink activeStyle={styles} to="/dashboard/myOrders" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Dashboard
                                    </NavLink>}
                            </div>

                            {!user
                                ? <div>
                                    <NavLink to="/registration" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium defaultBtn">
                                        Registration
                                    </NavLink>
                                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                                        Existing customer?
                                        <NavLink to="/login" className="text-indigo-600 hover:text-indigo-500">
                                            Sign in
                                        </NavLink>
                                    </p>
                                </div>
                                : <>

                                    <div className="buttons">
                                        <button onClick={() => setProfileMenuOpen(!profileMenuOpen)} className="defaultBtn">

                                            <div className="flex justify-center items-center">
                                                <div className="bg-gray-400 w-8 h-8 rounded-full mx-auto flex justify-center items-center">
                                                    {user.photoURL
                                                        ? <img src={user.photoURL} alt="" className="rounded-full w-full h-full" />
                                                        :
                                                        <h2 className="text-xl select-none font-bold text-white">{user.displayName?.slice(0, 1)}</h2>
                                                    }
                                                </div>
                                                <h1 className="text-xl font-bold flex-auto text-left ml-2">Profile</h1>
                                            </div>
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

                                    {profileMenuOpen &&
                                        <div className="relative md:hidden text-left xs:inline-block mx-auto">
                                            <div className=" absolute w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                                                <div className="py-1" role="none">
                                                    {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>
                                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">Support</a>
                                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">License</a>

                                                    <button onClick={handleLogOutRedireact} type="submit" className="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-3">
                                                        Sign out
                                                    </button>

                                                </div>
                                            </div>
                                        </div>

                                    }
                                </>}

                        </div>
                    </div>
                </CSSTransition>
            </div>
        </div >
    );
};

export default Header;