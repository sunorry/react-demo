import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import action from '../action';
import { Search, Login, PrivateRoute } from './index';

// Map Redux state to component props
function mapStateToProps(state) {
  console.log('search state:', state)
  return state.Search;
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  console.log('search action:', action.Search)
  return  bindActionCreators(action.Search, dispatch)
}

// Connected Component
const SearchWrap = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

const Home = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/search'>Search</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
        <Route exact path='/' render={() => <div>HOME</div>} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/search' component={SearchWrap} />
    </div>
  </Router>
)

export default Home
