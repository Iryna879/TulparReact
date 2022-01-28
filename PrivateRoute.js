import React from 'react';
import {Route, Navigate} from 'react-router-dom';
import {withAuth} from "./auth/auth";
import {Routes} from "react-router";

export const PrivateRoute = withAuth(({component: RouteComponent, isAuthorized, ...rest}) => (
    <Routes>
    <Route {...rest} render={routeProps => (
        isAuthorized ? <RouteComponent {...routeProps} /> : <Navigate to={"/login"}/>
    )} />
    </Routes>
)
);