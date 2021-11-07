import React from 'react'
import {BrowserRouter as Router, Route, Redirect, RouteProps} from 'react-router-dom'

interface Props extends RouteProps{
    isUser: boolean;
}

const ProtectedRoute = ({ isUser, ...routeProps}: Props) => {
    if (isUser) {
        return <Route { ...routeProps} />
    }
    return <Redirect to= "/login" />
};

export default ProtectedRoute;