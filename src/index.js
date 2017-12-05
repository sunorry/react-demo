import React from 'react'
import ReactDOM from 'react-dom'
import { useStrict } from 'mobx'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import SearchBar from './collections/SearchBar'
import History from './collections/History'
import Suggest from './collections/Suggest'
import NoSuggess from './collections/NoSuggest'

import ResultBar from './collections/ResultBar'
import Recommand from './collections/Recommand'
import Hospital from './collections/Hospital'
import Depts from './collections/Depts'

import './index.css'

import store from './store/search'

useStrict(true)

@observer
class App extends React.Component {
  render () {
    return (
      <div>
        <SearchBar />
        <div style={{ display: store.showType === 'INIT' ? 'block' : 'none' }}>
          <History />
          <Suggest />
          <NoSuggess />
        </div>
        <div style={{ display: store.showType === 'RESULT' ? 'block' : 'none' }}>
          <ResultBar />
          <Recommand />
          <Hospital />
          <Depts />
        </div>
        <DevTools />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
