import React from 'react'
import {BrowserRouter as Router, Route, Redirect, RouteProps} from 'react-router-dom'

interface Props extends RouteProps{
    isUser: boolean;
}

// const ProtectedRoute = ({ isUser, component: Component,...routeProps}: Props) => (
//     <Route {...routeProps} render={props => {
//         if (isUser) {
//             return <React.Component { ...props} />
//         }
//         return <Redirect to= "/login" />
//     }}/>
// );

const ProtectedRoute = ({isUser, ...routeProps}: Props) => {
    if (isUser){
        return <Route {...routeProps} />;
    }
    return <Redirect to="/login" />;
};

export default ProtectedRoute;