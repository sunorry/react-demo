import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { Search, Login, PrivateRoute } from './index';
import connect from './connect';

const Home = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/search'>Search</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
        <Route exact path='/' render={() => <div>HOME</div>} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/search' component={connect(Search)} />
    </div>
  </Router>
)

export default Home
