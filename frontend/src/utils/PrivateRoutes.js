import { Route, Redirect } from 'react-router-dom';
import React, {useContext} from 'react';
import AuthContext from '../context/AuthContext';

export default function PrivateRoutes({children, ...rest}) {
    let { user } = useContext(AuthContext)

    return(
        <Route {...rest}>{!user ? <Redirect to='/login-credentials'/> : children}</Route>
    );
}
