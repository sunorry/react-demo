import React from 'react'
import {
    withRouter
} from 'react-router-dom'
import fakeAuth from '../../../src/utils/fakeAuth'


const AuthButton = withRouter(({ history, location, match }) => {
    return fakeAuth.isAuthenticated ? (
        <p>
            Welcome! <button onClick={() => {
                fakeAuth.signout(() => history.push('/'))
            }}>Sign out</button>
        </p>
    ) : null
})

export default AuthButton
