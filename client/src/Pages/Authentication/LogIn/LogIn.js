import React from 'react';
import logo from '../../../images/logo.png'
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom'
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useScrollRestore from '../../../Hooks/useScrollRestore';

const LogIn = () => {
    const [loginFormData, setLoginFormData] = useState({})
    const { user, setUser, error, setError,
        handleEmailPasswordLogIn } = useAuth()
    useScrollRestore()
    const location = useLocation()
    const history = useHistory()
    const redirectUrl = location?.state?.from || "/";


    const loginInputOnChange = e => {
        const feild = e.target.name;
        const inputValue = e.target.value;
        const newData = { ...loginFormData }
        newData[feild] = inputValue
        setLoginFormData(newData)
    }

    const handleloginForm = e => {
        e.preventDefault()
        handleEmailPasswordLogIn(loginFormData.email, loginFormData.password)
            .then((userCredential) => {
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
                        Please Sign in to your account
                    </h2>

                </div>
                <form onSubmit={handleloginForm} className="mt-8 space-y-6" action="">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input onChange={loginInputOnChange} id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm md:text-xl" placeholder="Email address" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input onChange={loginInputOnChange} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  md:text-xl" placeholder="Password" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <p>New User? Please
                                <Link to="/registration"
                                    className="text-indigo-700 underline ml-2">Register</Link> </p>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <div>


                        <div className="buttons">
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
                        </div>


                    </div>
                </form>
                <p className="text-red-600">{error}</p>
            </div>
        </div>

    );
};

export default LogIn;