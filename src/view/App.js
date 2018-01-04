import React from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'

import { Search, Login, PrivateRoute } from './index'

const Home = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to='/search'> Search
          </Link>
        </li>
        <li>
          <Link to='/login'> Login
          </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path='/' render={() => <div>132</div>} />
        <Route paht='/login' component={Login} />
        <PrivateRoute path='/search' component={Search} />
      </Switch>
    </div>
  </Router>
)

export default Home
