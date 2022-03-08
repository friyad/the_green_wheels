import React, { useState } from 'react';
import initializeAuthentication from '../firebase/firebase.intialize';
import {
    signOut,
    getAuth,
    updateProfile,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,

} from "firebase/auth";
import { useEffect } from 'react';


initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()


    useEffect(() => {
        setIsLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                handleUserProfileUpdate(user.displayName)
                setUser(user)
                setIsLoading(false)
            }
            else {
                setIsLoading(false)
            }
        })
    }, [])




    const handleEmailPasswordRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleEmailPasswordLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleUserProfileUpdate = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
    }

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null)
            }).catch((error) => {
                setError(error.message)
            })
    }





    return {
        user,
        setUser,
        error,
        setError,
        isLoading,
        setIsLoading,
        handleLogOut,
        handleUserProfileUpdate,
        handleEmailPasswordLogIn,
        handleEmailPasswordRegister,
    }
};

export default useFirebase;