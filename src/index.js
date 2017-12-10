import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './testCom/App'
import counterApp from './testStore/reducers'
// import App from './todo/App'
// import todoApp from './duxStore/reducers'

// let store = createStore(todoApp)
let store = createStore(counterApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)