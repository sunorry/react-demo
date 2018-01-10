import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import { Search, Login, PrivateRoute } from './index'

const Home = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/search?a=1&b=2'>Search</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
        <Route exact path='/' render={() => <div>HOME</div>} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/search' component={Search} />
    </div>
  </Router>
)

export default Home
