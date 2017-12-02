import React from 'react'
import ReactDOM from 'react-dom'
import { useStrict } from 'mobx'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import SearchBar from './components/SearchBar'
import History from './components/History'
import Suggest from './components/Suggest'
import NoSuggess from './components/NoSuggest'

import store from './store/search'

useStrict(true)

@observer
class App extends React.Component {
  render () {
    return (
      <div>
        <SearchBar />
        <div>
          <div style={{display: store.showType === 'INIT' ? 'block' : 'none'}}>
            <History />
            <Suggest />
            <NoSuggess />
          </div>
        </div>
        <div style={{ display: store.showType === 'RESULT' ? 'block' : 'none' }}>
          结果
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
