import React from 'react'
import ReactDOM from 'react-dom'
import { useStrict } from 'mobx'

import SearchBar from './components/SearchBar'
import Init from './collections/Init'
import Result from './collections/Result'

useStrict(true)

class App extends React.Component {
  render () {
    return (
      <div>
        <SearchBar />
        <Init />
        <Result />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
