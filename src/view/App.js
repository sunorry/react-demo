import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import action from '../action';
import { Search, Login, PrivateRoute } from './index';

function wrapComponent(componentRef) {
  console.log('qqq:', componentRef.reduxPlugin)
  const reduxPlugin = componentRef.reduxPlugin;

  const mapStateToProps = (state, ownProps) => {
    console.log('search state:', state)
    console.log('ownProps:', ownProps);
    const storeArr = reduxPlugin.mapStateToProps;
    const newState = {};
    for (let i = 0, len = storeArr.length; i < len; i++) {
      const item = storeArr[i];
      const arr = item.split('.');
      newState[arr[1]]  = state[arr[0]][arr[1]];
    }
    return newState;
  }

  const mapDispatchToProps = (dispatch) => {
    return  bindActionCreators(reduxPlugin.mapDispatchToProps, dispatch)
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(componentRef)
}


// Connected Component
const SearchWrap = wrapComponent(Search);

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
