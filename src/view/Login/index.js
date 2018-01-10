import React from 'react'
import { Redirect } from 'react-router-dom'

import fakeAuth from '../../../src/utils/fakeAuth'
import AuthButton from './AuthButton'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      redirectToRefrrer: false
    }
  }

  login = () => {
      fakeAuth.authenticate(() => {
          this.setState({
              redirectToRefrrer: true
          })
      })
  }

  render() {
      const { from } = this.props.location.state || { from: { pathname: '/' } }
      const { redirectToRefrrer } = this.state

      if(redirectToRefrrer) {
          return <Redirect to={from} />
      }

      return (
         fakeAuth.isAuthenticated ? <AuthButton /> :
            (<div>
              <p>You must log in to view the page at {from.pathname}</p>
              <button onClick={this.login}>Log in</button>
          </div>)
      )
  }
}

export default Login
