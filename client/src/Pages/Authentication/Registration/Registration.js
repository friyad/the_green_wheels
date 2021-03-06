import React from 'react';
import logo from '../../../images/logo.png'
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom'
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useScrollRestore from '../../../Hooks/useScrollRestore';


const Registration = () => {
    const { user, setUser, error, setError,
        handleUserProfileUpdate,
        handleEmailPasswordRegister } = useAuth()
    const [registrationFormData, setRegistrationFormData] = useState({})
    const location = useLocation()
    const history = useHistory()
    const redirectUrl = location.state?.from || "/";
    useScrollRestore()

    const registrationInputOnChange = e => {
        const feild = e.target.name;
        const inputValue = e.target.value;
        const newData = { ...registrationFormData }
        newData[feild] = inputValue
        setRegistrationFormData(newData)
    }

    const handleRegistrationForm = e => {
        e.preventDefault()
        handleEmailPasswordRegister(registrationFormData.email, registrationFormData.password)
            .then((userCredential) => {
                handleUserProfileUpdate(registrationFormData.name)
                setUser(userCredential.user)
                setError('')
                history.push(redirectUrl)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img className="mx-auto h-12 w-auto" src={logo} alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Create your new account
                    </h2>

                </div>
                <form onSubmit={handleRegistrationForm} className="mt-8 space-y-6" action="">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Name</label>
                            <input onChange={registrationInputOnChange} id="email-address" name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm md:text-xl" placeholder="Name" />
                        </div>
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input onChange={registrationInputOnChange} id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm md:text-xl" placeholder="Email address" />
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input onChange={registrationInputOnChange} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  md:text-xl" placeholder="Password" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex items-center">
                            <p>Already have an account? Please
                                <Link to="/login"
                                    className="text-indigo-700 underline ml-2">Log In</Link> </p>
                        </div>
                    </div>
                    <div>
                        <div className="buttons">
                            <button className="defaultBtn">
                                Register Now
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


                    </div>
                </form>
                <p>{error}</p>
            </div>
        </div>
    );
};

export default Registration;