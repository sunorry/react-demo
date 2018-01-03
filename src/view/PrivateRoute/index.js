import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import fakeAuth from '../../../src/utils/fakeAuth'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        fakeAuth.isAuthenticated ? (
            <Component {...props} />
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
        )
    )} />
)

export default PrivateRoute