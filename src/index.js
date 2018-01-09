
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { Search } from './view';

import action from './action';
import { createStore } from 'redux';
import { bindActionCreators } from 'redux'
import reducer from './reducer';

const { setSearchVal, setShowType } = action.Search;

// Store
const store = createStore(reducer)

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    ...state,
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    setSearchVal: (val) => dispatch(setSearchVal(val))
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
