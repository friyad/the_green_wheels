import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()


    if (isLoading) {
        return " ";
    }

    else {
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    user ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />

        );
    }


};

export default PrivetRoute;