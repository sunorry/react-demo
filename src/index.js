import React from 'react'
import ReactDOM from 'react-dom'
import { useStrict } from 'mobx'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import SmartInput from './collections/SmartInput'
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
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.searchKeyChange = this.searchKeyChange.bind(this)
    this.searchFocus = this.searchFocus.bind(this)
  }

  throttleFetchSuggest(value) {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
    if (!value) return
    this.timer = setTimeout(() => {
      store.fetchSuggest(value)
    }, 300)
  }

  searchKeyChange(value) {
    store.syncSearchKey(value)
    this.throttleFetchSuggest(value.trim())
  }

  searchFocus() {
    store.setShowType()
    store.fetchSuggest()
  }

  render () {
    return (
      <div>
        <SmartInput
          ref={ bar => this.input = bar }
          onInputValueChange={this.searchKeyChange}
          onInputFouce={this.searchFocus} />

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
